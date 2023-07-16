// import React, { useEffect, useState } from 'react';
// import { BsFillCloudSunFill } from 'react-icons/bs';
// import { IoIosSunny } from 'react-icons/io'
// import { Navigate, useLocation } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import Icons from '../Icons/Icons';
// import Plants from '../../Interfaces/Plants.interface';
// interface plantProps {
//   plant: Plants
// }

// const PlantByName: React.FC<plantProps> = ({ plant }) => {

//   const navigate = useNavigate()
//   const location = useLocation();
//   const datas = location.state;

//   const [imgUrl, setImgUrl] = useState();


//   const handleInfo = (data: any) => {
//     navigate('/plantInfo', {
//       state: data
//     })

//   }


//   useEffect(() => {
//     const fetchData = async () => {
//       try {

//         const common = plant.Common_name.split(' ').map(word => word.toLowerCase()).join('+');

//         const response = await fetch(`https://perenual.com/api/species-list?q=${common}&key=sk-K1vQ64a3c27a6a4641467`, {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });

//         const result = await response.json();


//         if (result.data.length) {
//           setImgUrl(result.data[0]['default_image']['medium_url']);
//         }

//       } catch (error) {

//       }
//     }

//     fetchData();
//   }, [plant])






//   return (
//     <div className='p-5'>


//       <div onClick={() => handleInfo(plant)} className='card border-2  m-4  primaryColor '>
//         <div className="flex justify-center items-center gap-3">
//           <div className="">
//             <img src={plant.imgUrl} alt="" className=" object-contain w-44 h-36 rounded-lg" />
//           </div>
//           <div className="">
//             <b>{plant.Common_name}</b>
//             <p>{plant.Latin_name}</p>
//             <p>{plant.Other_names}</p>
//             <div className="flex justify-start">
//               <p className='mt-1 mr-2'> {plant.Light_ideal && plant.Light_ideal.split(' (')[0].toLowerCase() === "full sun" ? (
//                 <BsFillCloudSunFill size={20} style={{ backgroundColor: '#B1D7B4', padding: '4px', borderRadius: '30%' }} />
//               ) : (
//                 <IoIosSunny size={22} style={{ backgroundColor: '#B1D7B4', padding: '4px', borderRadius: '30%' }} />
//               )}</p>

//               <p style={{ backgroundColor: '#B1D7B4', padding: '2px', borderRadius: '10%' }}>{
//                 plant.wateringDifficulty

//               }
//               </p>


//             </div>
//           </div>
//         </div>


//       </div>
//       <Icons></Icons>

//     </div>
//   );
// };

// export default PlantByName;
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

        <div onClick={() => handleInfo(data)} className='card border-2  my-4 p-3 primaryColor'>
          <div className="flex justify-center items-center gap-3">
            <div className="">
              <img src={data.imgUrl} alt="" className="object-cover w-36 h-36 rounded-2xl" />
            </div>
            <div className="">
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
          </div>


        </div>

      ))}

    </div>
  );
};

export default PlantByName;
