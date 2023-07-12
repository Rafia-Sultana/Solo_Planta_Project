
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './LightMeter.css'
const LightMeter = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const previous = (location.state);
  // console.log;
  const [volume, setVolume] = useState('');
  const handleVolumeChange = (e: any) => {
    setVolume(e.target.value);

  }

  const handleBtn = () => {
    navigate('/temperature', {
      state: {
        previous: previous,
        volume: volume
      }
    })
  }

  return (
    <div>
      <h4>Light Meter</h4>
      <input type="range" onChange={handleVolumeChange} />
      <p>light in your site : {volume} Lux</p>
      <button onClick={handleBtn} className='primaryBackground white p-3 rounded-lg '>next</button>
    </div>
  );
};

export default LightMeter;