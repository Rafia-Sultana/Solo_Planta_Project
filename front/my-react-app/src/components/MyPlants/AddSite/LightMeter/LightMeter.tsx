
import { useState } from 'react';
import { GrNext } from 'react-icons/gr'
import { useLocation, useNavigate } from 'react-router-dom';
import './LightMeter.css'
const LightMeter = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const previous = (location.state);
  // console.log;
  const [volume, setVolume] = useState(50);
  const handleVolumeChange = (e: any) => {
    // console.log(typeof e.target.value);
    setVolume(Number(e.target.value));

  }
  console.log(typeof volume);
  const handleBtn = () => {
    navigate('/temperature', {
      state: {
        previous: previous,
        volume: volume
      }
    })
  }

  return (
    <div className="">
      <h4 className='font-bold text-center mt-10'>How much Light have in your site?</h4>
      <div className='flex flex-col items-center justify-center h-screen'>

        <input type="range" onChange={handleVolumeChange} />
        <p className='font-semibold'>Light: {volume} Lux</p>
        <br />
        <button onClick={handleBtn} className='primaryBackground white p-3 rounded-lg w-72 '>
          next
        </button>
      </div>
    </div>

  );
};

export default LightMeter;