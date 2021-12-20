import React, {useEffect} from 'react';
import {useThree} from '@react-three/fiber';
import {CubicBezierCurve3, Vector3} from 'three';
import {Sphere, useAspect, useTexture} from '@react-three/drei';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

import {Stars} from './CustomStars';
import uvMap from './assets/earth-uv-map.jpg';
import coordinates from './data/coordinates';

const CAMERA_DISTANCE = 3;

export const Globe: React.FC = () => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();
	const earthUVMap = useTexture(uvMap);

	const camera = useThree((state) => state.camera);
	useEffect(() => {
		camera.position.set(0, 0, CAMERA_DISTANCE);
		camera.lookAt(0, 0, 0);
	}, [camera]);

	const constantXRotation = interpolate(
		frame,
		[0, durationInFrames],
		[0, Math.PI * 2]
	);
	// const constantYRotation = interpolate(
	// 	frame,
	// 	[0, durationInFrames / 2, durationInFrames],
	// 	[0.6, 0, 0.6]
	// );

	const latLonToCoord = ({
		lat,
		lon,
		radius = 1,
	}: {
		lat: number;
		lon: number;
		radius?: number;
	}): Vector3 => {
		const phi = (90 - lat) * (Math.PI / 180);
		const theta = (lon + 180) * (Math.PI / 180);
		const x = -(radius * Math.sin(phi) * Math.cos(theta));
		const z = radius * Math.sin(phi) * Math.sin(theta);
		const y = radius * Math.cos(phi);
		return new Vector3(x, y, z);
	};

	const curves: Record<string, Vector3>[] = coordinates.map(
		({startLat, startLng, endLat, endLng}: Record<string, number>) => {
			const start = latLonToCoord({lat: startLat, lon: startLng});
			const end = latLonToCoord({lat: endLat, lon: endLng});
			const distance = Math.sqrt(
				(end.x - start.x) ** 2 + (end.y - start.y) ** 2 + (end.z - start.z) ** 2
			);
			const factor =
				distance < 0.1
					? 1.075
					: distance < 0.5
					? 1.1
					: distance > 1
					? 1.5
					: 1.25;
			const midA = new Vector3(
				start.x * factor + 0.4 * (end.x - start.x),
				start.y * factor + 0.4 * (end.y - start.y),
				start.z * factor + 0.4 * (end.z - start.z)
			);
			const midB = new Vector3(
				end.x * factor + 0.4 * (start.x - end.x),
				end.y * factor + 0.4 * (start.y - end.y),
				end.z * factor + 0.4 * (start.z - end.z)
			);

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
				rotation={[0.5, constantXRotation + 350, 0]}
				position={[0, 0, 0]}
			>
				{curves.map(({start, end, midA, midB}, i) => {
					const curve = new CubicBezierCurve3(start, midA, midB, end);
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
				<Stars
					fade
					radius={50}
					depth={50}
					count={1000}
					factor={10}
					saturation={0}
				/>
				<Sphere args={[1, 64, 32]}>
					{/* eslint-disable-next-line */}
					{/* @ts-ignore */}
					<meshPhongMaterial map={earthUVMap} />
				</Sphere>
			</group>
			<group>
				<mesh scale={scale}>
					<planeBufferGeometry />
					{/* eslint-disable-next-line */}
					{/* @ts-ignore */}
					<meshBasicMaterial transparent attach="material" map={texture} />
				</mesh>
			</group>
		</>
	);
};
