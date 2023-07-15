import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchLottiePlayer(): any {
    const [redirect, setRedirect] = useState(false);

    const handleLoopComplete = (e: string) => {
        if (e === 'complete') setRedirect(true);
    };


    return (
        <div style={{ backgroundColor: 'white' }}>

            {
                <Player
                    autoplay={true}
                    loop={false}
                    src="https://lottie.host/79294ea3-645d-40d9-b084-3674257adeec/sgh2S76uxN.json"
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

export default SearchLottiePlayer;
