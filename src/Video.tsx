import {Composition} from 'remotion';
import {Scene} from './Scene';
import './styles.css';

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
