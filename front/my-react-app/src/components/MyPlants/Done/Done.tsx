import React, { useEffect, useState } from 'react';
import DoneLottiePlayer from '../../Lottie/Done.component';
import LoadingLottiePlayer from '../../Lottie/Loading.component';

const Done = () => {

    return (
        <div className='p-5'>
            <p className='font-semibold mt-10'>
                Now, Sit Back, Have Relax... We're preparing Water Schedule for your Plant.
            </p>
            <DoneLottiePlayer></DoneLottiePlayer>
            <LoadingLottiePlayer />
        </div>
    );
};

export default Done;