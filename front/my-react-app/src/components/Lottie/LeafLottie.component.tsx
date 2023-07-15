import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LeafLottiePlayer(): any {
	const [redirect, setRedirect] = useState(false);
	const navigate = useNavigate();

	const handleLoopComplete = (e: string) => {
		if (e === 'complete') setRedirect(true);
	};
	// if (redirect) {
	// 	return navigate('/register');
	// }

	return (
		<div style={{ backgroundColor: '#e2ede2' }}>

			{
				<Player
					autoplay={true}
					loop={false}
					src="https://assets3.lottiefiles.com/packages/lf20_pjbhh9ml.json"
					style={{
						height: '250px',
						width: '200px', marginTop: '50px',
						backgroundColor: '#e2ede2', borderRadius: '20%'
					}}
					onEvent={handleLoopComplete}>
					<Controls
						visible={false}
						buttons={['play', 'repeat', 'frame', 'debug']}
					/>
				</Player>
			}
		</div>
	);
}

export default LeafLottiePlayer;
