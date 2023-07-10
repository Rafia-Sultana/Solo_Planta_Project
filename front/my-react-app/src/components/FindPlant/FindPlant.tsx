import herb from '../../assets/images/herbs.jpg';
import orchids from '../../assets/images/orchids.jpg';
import flower from '../../assets/images/flower.jpg';
import vegetable from '../../assets/images/vegetables.jpg';
import foliage from '../../assets/images/foliage2.jpg';
import cactus from '../../assets/images/cactus2.jpg';
import { BsSearch } from 'react-icons/bs';
import Icons from '../Icons/Icons';
import { useState } from 'react';
import PlantByName from './PlantByName';
const BASE_URL = 'http://localhost:5000';
const FindPlant = () => {
    const [plantByName,setPlantByName] = useState(null)

    const plants =[
        {
            plantName:"Trunc",
        image:herb
        },
        
        {
            plantName:"Color",
        image:orchids
        },
        {
            plantName:"Vegetables",
        image:vegetable
        },
        {
            plantName:"Flower",
        image:flower
        },
        {
            plantName:"Foliage",
        image:foliage
        },
        {
            plantName:"Bearing",
        image:cactus
        },

    ]


    const sendPlantName = async (singlePlantName: string) =>{
        // console.log(singlePlantName);
        try {
            const response = await fetch(`${BASE_URL}/plantByName/${singlePlantName}`,{
                method:'GET',
            headers:{
                'Content-Type': 'application/json',
            },
            
            });
            if (response.ok) {
                const data = await response.json();
                setPlantByName(data);
                
              } else {
                console.log('Request failed with status:', response.status);
              }
            
        } catch (error) {
            console.log(error);
        }
    }
    // console.log(plantByName);
    return (
        <div className='p-4'>
            <h1 className='font-semibold'>Find Plant</h1>
            <input type="text" placeholder="search" className="input input-bordered w-full bg-gray-200 my-4" />
            <br />
            <hr />
            <section className="grid grid-cols-3 gap-3 card  my-5 rounded-md">

                {
                    plants.map((plant)=>(
                        <div className="  gap-3 rounded-lg p-3">
                            <img src={plant.image} className='w-32 h-28' alt="" />
                            {/* <b>{plant.plantName}</b> */}
                            <button onClick={()=>sendPlantName(plant.plantName)}>{plant.plantName}</button>
                        </div>
                    ))
                }
            </section>
            {plantByName &&

             <PlantByName PlantByName={plantByName} 
             />
             }
            <Icons></Icons>
            
        </div>
    );
};

export default FindPlant;