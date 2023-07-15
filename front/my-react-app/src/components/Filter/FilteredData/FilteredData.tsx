
import { useLocation } from "react-router-dom";
import Plants from "../../../Interfaces/Plants.interface";
import { BsFillCloudSunFill } from 'react-icons/bs';
import { IoIosSunny } from 'react-icons/io'
const FilteredData = () => {
    const location = useLocation();
    const datas = location.state;



    return (
        <div>
            {datas.map((data: any) => (

                <div className='card border-2 my-5 p-10  primaryColor'>
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

export default FilteredData;