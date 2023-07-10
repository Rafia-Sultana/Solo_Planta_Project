import herb from '../../assets/images/herbs.jpg';
import orchids from '../../assets/images/orchids.jpg';
import flower from '../../assets/images/flower.jpg';
import vegetable from '../../assets/images/vegetables.jpg';
import foliage from '../../assets/images/foliage2.jpg';
import cactus from '../../assets/images/cactus2.jpg';
import { BsSearch } from 'react-icons/bs';
import Icons from '../Icons/Icons';
const FindPlant = () => {

    const plants =[
        {
            plantName:"Herbs",
        image:herb
        },
        
        {
            plantName:"Orchids",
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
            plantName:"Cactus",
        image:cactus
        },

    ]
    return (
        <div className='p-4'>
            <h1 className='font-bold'>Find Plant</h1>
            <input type="text" placeholder="search" className="input input-bordered w-full bg-gray-200 my-4" />
            <br />
            <hr />
            <section className="grid grid-cols-3 gap-3 card  my-5 rounded-md">

                {
                    plants.map((plant)=>(
                        <div className="  gap-3 rounded-lg p-3">
                            <img src={plant.image} className='w-32 h-28' alt="" />
                            <b>{plant.plantName}</b>
                        </div>
                    ))
                }
            </section>
            <Icons></Icons>
            
        </div>
    );
};

export default FindPlant;