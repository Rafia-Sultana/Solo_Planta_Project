
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react";
import addSitInfo from "../../../../Services/AddingSiteInfo";
import authJWT from "../../../../Services/ApiServiceJWT";

const temperature = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const current = (location.state);
    const [minValue, setMinValue] = useState(25);
    const [maxValue, setMaxValue] = useState(75);
    current["temperature"] = { minValue, maxValue };
    // console.log(current);
    // console.log(typeof minValue);
    const handleSubmit = async () => {
        const profileData = await authJWT.userProfile();
        const profileId = profileData?._id;
        // console.log(profileId);
        current["userId"] = { profileId };
        console.log(current);
        await addSitInfo.addSite(current);
        navigate('/addsite')

    }



    return (
        <div className='p-5 '>
            <p className="text-center font-semibold text-xl mt-16">

                How much Temperature does your site have?

            </p>
            <div className='multi-range-slider-container mt-20'>

                <hr />
                <MultiRangeSlider
                    min={0}
                    max={100}
                    step={5}
                    minValue={minValue}
                    maxValue={maxValue}
                    onInput={(e: ChangeResult) => {
                        setMinValue(e.minValue);
                        setMaxValue(e.maxValue);
                    }}
                ></MultiRangeSlider>
                <div style={{ display: 'flex', justifyContent: 'center' }}>

                    <div style={{ margin: '10px' }} className="font-semibold">Min: {minValue}℃ </div>
                    <div style={{ margin: '10px' }} className="font-semibold">Max: {maxValue}℃ </div>
                </div>
            </div>
            <button
                onClick={handleSubmit}
                className="w-full primaryBackground rounded-lg text-white p-3"> submit</button>
        </div>
    )

}
export default temperature;
