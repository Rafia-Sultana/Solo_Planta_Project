import { useEffect, useState } from 'react';
import Plants from '../../../Interfaces/Plants.interface';
import plants from '../../../Services/AllPlant';
import PlantByName from '../../FindPlant/PlantByName';

const AllPlant = () => {
    const [allPlant, setAllPlant] = useState<Plants[]>([]);
    const handleAllPlant = async () => {
        const plantData = await plants.plant();
        setAllPlant(plantData);


    };

    useEffect(() => {
        handleAllPlant();
    }, []);

    return (
        <div>
            <h2 className='font-bold text-xl primaryColor ml-3 text-center mt-4'> Plants List</h2>
            {
                allPlant.map((plant) => <>
                    {
                        // <PlantByName

                        //     plant={plant}
                        // ></PlantByName>
                    }
                </>)
            }
        </div>
    );
};

export default AllPlant;