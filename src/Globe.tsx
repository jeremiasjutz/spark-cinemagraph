import {Sphere, Stars, useAspect, useTexture} from '@react-three/drei';
import {useThree} from '@react-three/fiber';
import React, {useEffect} from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import uvMap from './assets/earth-uv-map.jpg';
import * as THREE from 'three';

import coordinates from './data/coordinates';

const CAMERA_DISTANCE = 3;

export const Globe: React.FC = () => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();
	const earthUVMap = useTexture(uvMap);

	// Place a camera and set the distance to the object.
	// Then make it look at the object.
	const camera = useThree((state) => state.camera);
	useEffect(() => {
		camera.position.set(0, 0, CAMERA_DISTANCE);
		camera.lookAt(0, 0, 0);
	}, [camera]);

	// During the whole scene, the phone is rotating.
	// 2 * Math.PI is a full rotation.
	const constantRotation = interpolate(
		frame,
		[0, durationInFrames],
		[0, -Math.PI * 2]
	);

	const latLonToCoord = ({
		lat,
		lon,
		radius = 1,
	}: {
		lat: number;
		lon: number;
		radius?: number;
	}): THREE.Vector3 => {
		const phi = (90 - lat) * (Math.PI / 180);
		const theta = (lon + 180) * (Math.PI / 180);
		const x = -(radius * Math.sin(phi) * Math.cos(theta));
		const z = radius * Math.sin(phi) * Math.sin(theta);
		const y = radius * Math.cos(phi);
		return new THREE.Vector3(x, y, z);
	};

	const curves: Record<string, THREE.Vector3>[] = coordinates.map(
		({startLat, startLng, endLat, endLng}: Record<string, number>) => {
			const start = latLonToCoord({lat: startLat, lon: startLng});
			const end = latLonToCoord({lat: endLat, lon: endLng});
			const distance = Math.sqrt(
				(end.x - start.x) ** 2 + (end.y - start.y) ** 2 + (end.z - start.z) ** 2
			);
			const smallArc = distance < 0.5;
			// const arc = -1 * (arcAlt + 1);
			const arc = -1;
			const normalize = (input: number) => (smallArc ? input : input);
			const midA = new THREE.Vector3(
				normalize(start.x),
				normalize(start.y),
				arc
			);
			const midB = new THREE.Vector3(normalize(end.x), normalize(end.y), arc);

			return {
				start,
				end,
				midA,
				midB,
			};
		}
	);

	const texture = useTexture(require('./assets/background.png'));
	const scale = useAspect(1080, 1920, 0.6);

	return (
		<>
			<group
				scale={1}
				rotation={[0.6, constantRotation + 350, 0]}
				position={[0, 0, 0]}
			>
				{curves.map(({start, end, midA, midB}, i) => {
					const curve = new THREE.CubicBezierCurve3(start, midA, midB, end);
					const delay = i * fps;
					const duration = durationInFrames - fps;
					return (
						<mesh key={i}>
							<tubeGeometry
								args={[curve, 64, 0.005, 8, false]}
								drawRange={{
									count: interpolate(
										frame,
										[0 + delay, duration / 2, duration - delay],
										[0, 99999, 0]
									),
									start: 0,
								}}
							/>
							<meshPhongMaterial attach="material" color="white" />
						</mesh>
					);
				})}
				<Sphere removeFromParent args={[1, 64, 32]}>
					{/* eslint-disable-next-line */}
					{/* @ts-ignore */}
					<meshPhongMaterial map={earthUVMap} />
				</Sphere>
				<Stars
					fade
					radius={50}
					depth={50}
					count={1000}
					factor={10}
					saturation={0}
				/>
			</group>
			<group>
				<mesh scale={scale}>
					<planeBufferGeometry />
					<meshBasicMaterial transparent attach="material" map={texture} />
				</mesh>
			</group>
		</>
	);
};