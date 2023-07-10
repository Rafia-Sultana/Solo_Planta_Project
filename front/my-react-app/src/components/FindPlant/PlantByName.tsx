import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
interface plantProps {
  PlantByName: [];
}

const PlantByName: React.FC<plantProps> = (props) => {
    const navigate = useNavigate()
  const location = useLocation();
  const datas = location.state;

const handleInfo = (data: any)=>{
    navigate('/plantInfo',{
        state:data
    })
    // console.log('from plantby name',data);
}
  return (
    <div>
   
     {datas.map((data: any) => (
       
         <div  onClick={() => handleInfo(data)}  className='card border-2 my-5 p-10  primaryColor'>
          <b>{data.Latin_name}</b>
          <p>{data.Common_name}</p>
          <p>{data.Other_names}</p>
          <p>{data.Light_ideal.split(' (')[0]}</p>
        </div>
       
      ))}
    
    </div>
  );
};

export default PlantByName;
