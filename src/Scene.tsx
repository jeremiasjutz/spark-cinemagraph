import React from 'react';
import {Vector2} from 'three';
import {ThreeCanvas} from '@remotion/three';
// eslint-disable-next-line
// @ts-ignore
import {BlendFunction} from 'postprocessing';
import {AbsoluteFill, Img, useVideoConfig} from 'remotion';
import {
	EffectComposer,
	ChromaticAberration,
	Noise,
	Scanline,
} from '@react-three/postprocessing';

import {Globe} from './Globe';
import background from './assets/background_shadow.png';

const container: React.CSSProperties = {
	backgroundColor: '#0C0014',
};

export const Scene: React.FC = () => {
	const {width, height} = useVideoConfig();

	return (
		<AbsoluteFill style={container}>
			<ThreeCanvas linear width={width} height={height} className="z-0">
				<ambientLight intensity={2} color={0xffffff} />
				<Globe />
				<EffectComposer>
					<Noise premultiply blendFunction={BlendFunction.ADD} />
					<Scanline blendFunction={BlendFunction.OVERLAY} density={1} />
					<ChromaticAberration
						blendFunction={BlendFunction.NORMAL}
						offset={new Vector2(-0.004, 0.002)}
					/>
				</EffectComposer>
			</ThreeCanvas>
			<Img src={background} className="absolute z-0" />
		</AbsoluteFill>
	);
};
