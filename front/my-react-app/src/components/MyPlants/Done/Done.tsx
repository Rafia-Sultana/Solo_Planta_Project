import React from 'react';
import DoneLottiePlayer from '../../Lottie/Done.component';
import LoadingLottiePlayer from '../../Lottie/Loading.component';

const Done = () => {
    return (
        <div>
            <DoneLottiePlayer></DoneLottiePlayer>
            <LoadingLottiePlayer />
        </div>
    );
};

export default Done;