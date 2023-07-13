
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react";
import addSitInfo from "../../../../Services/AddingSiteInfo";

const temperature = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const current = (location.state);
    const [minValue, setMinValue] = useState(25);
    const [maxValue, setMaxValue] = useState(75);
    current["temperature"] = { minValue, maxValue };
    console.log(typeof minValue);
    const handleSubmit = async () => {
        await addSitInfo.addSite(current);
        navigate('/find')

    }


    return (
        <div className='mt-72'>
            <div className='multi-range-slider-container'>
                <p className="text-center font-bold text-2xl my-4">Temperature</p>
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

                    <div style={{ margin: '10px' }}>Min: {minValue}</div>
                    <div style={{ margin: '10px' }}>Max: {maxValue}</div>
                </div>
            </div>
            <button onClick={handleSubmit}> submit</button>
        </div>
    )

}
export default temperature;
