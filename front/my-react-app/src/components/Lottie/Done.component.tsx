import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DoneLottiePlayer(): any {
    const [redirect, setRedirect] = useState(false);
    const navigate = useNavigate();

    const handleLoopComplete = (e: string) => {
        if (e === 'complete') setRedirect(true);
    };
    // if (redirect) {
    // 	return navigate('/register');
    // }

    return (
        <div style={{ backgroundColor: 'white' }}>

            {
                <Player
                    autoplay={true}
                    loop={false}
                    src="https://lottie.host/73196430-5335-4b8c-a9ce-9e6f4efd95ca/WaPvATUVRH.json"
                    style={{
                        height: '250px',
                        width: '200px', marginTop: '50px',
                        backgroundColor: 'white', borderRadius: '20%'
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

export default DoneLottiePlayer;
