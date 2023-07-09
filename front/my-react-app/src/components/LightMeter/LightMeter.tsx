import React from 'react';
import './LightMeter.css'

const LightMeter = () => {
    return (
        <div>
              {/* <input   type="range"
    className="transparent h-10  cursor-pointer appearance-none rounded-lg border-transparent 
    bg-gradient-to-r from-sky-300 to-yellow-500"
    min="0"
    max="50"
    step="0.5" /> */}
    
    <div className="vertical-slider">
  <input type="range" className="slider" min="0" max="50" step="0.5" />
</div>


        </div>
    );
};

export default LightMeter;