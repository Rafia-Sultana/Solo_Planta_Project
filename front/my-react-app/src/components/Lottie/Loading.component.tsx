//https://lottie.host/b7aaf0d5-8fea-48ee-af16-b2fc836ee6fc/T3E9eJ5dBp.json

import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoadingLottiePlayer(): any {
    const [redirect, setRedirect] = useState(false);
    const navigate = useNavigate();

    const handleLoopComplete = (e: string) => {
        if (e === 'complete') setRedirect(true);
    };
    if (redirect) {
        return navigate('/addsite');
    }

    return (
        <div style={{ backgroundColor: 'white' }}>

            {
                <Player
                    autoplay={true}
                    loop={false}
                    src="https://lottie.host/b7aaf0d5-8fea-48ee-af16-b2fc836ee6fc/T3E9eJ5dBp.json"
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

export default LoadingLottiePlayer;
