import {Composition} from 'remotion';
import {Scene} from './Scene';
import './styles.css';

// Welcome to the Remotion Three Starter Kit!
// Two compositions have been created, showing how to use
// the `ThreeCanvas` component and the `useVideoTexture` hook.

// You can play around with the example or delete everything inside the canvas.

// The device frame automatically adjusts to the video aspect ratio.
// Change the variable below to try out tablet mode:

// Remotion Docs:
// https://remotion.dev/docs

// @remotion/three Docs:
// https://remotion.dev/docs/three

// React Three Fiber Docs:
// https://docs.pmnd.rs/react-three-fiber/getting-started/introduction

export const RemotionVideo: React.FC = () => {
	return (
		<Composition
			id="Scene"
			component={Scene}
			durationInFrames={60 * 30}
			fps={30}
			width={1080}
			height={1920}
		/>
	);
};
