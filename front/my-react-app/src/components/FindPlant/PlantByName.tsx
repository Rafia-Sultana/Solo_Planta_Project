import React from 'react';
import { BsFillCloudSunFill } from 'react-icons/bs';
import { IoIosSunny } from 'react-icons/io'
import { Navigate, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
interface plantProps {
  PlantByName: [];
}

const PlantByName: React.FC<plantProps> = (props) => {
  const navigate = useNavigate()
  const location = useLocation();
  const datas = location.state;
  const name = datas[0].Appeal;
  // console.log(name);

  const handleInfo = (data: any) => {
    navigate('/plantInfo', {
      state: data
    })
    // console.log('from plantby name',data);
  }
  return (
    <div className='p-5'>
      <h2 className='font-bold text-xl primaryColor ml-3 text-center'>{name} Plants List</h2>
      {datas.map((data: any) => (

        <div onClick={() => handleInfo(data)} className='card border-2 my-5 p-10  primaryColor'>
          <b>{data.Common_name}</b>
          <p>{data.Latin_name}</p>
          <p>{data.Other_names}</p>
          <div className="flex justify-start">
            <p className='mt-1 mr-2'> {data.Light_ideal.split(' (')[0].toLowerCase() === "full sun" ? (
              <BsFillCloudSunFill size={20} style={{ backgroundColor: '#B1D7B4', padding: '4px', borderRadius: '30%' }} />
            ) : (
              <IoIosSunny size={22} style={{ backgroundColor: '#B1D7B4', padding: '4px', borderRadius: '30%' }} />
            )}</p>

            <p style={{ backgroundColor: '#B1D7B4', padding: '2px', borderRadius: '10%' }}>{
              data.wateringDifficulty

            }
            </p>
          </div>


        </div>

      ))}

    </div>
  );
};

export default PlantByName;
