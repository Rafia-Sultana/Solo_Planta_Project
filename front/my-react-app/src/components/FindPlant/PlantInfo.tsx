import { useLocation } from 'react-router-dom';
import { FcCheckmark } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { TbClover } from 'react-icons/tb';
import { BsTriangleHalf } from 'react-icons/bs';
import { BsFillSunFill } from 'react-icons/bs';
import { SlLocationPin } from 'react-icons/sl';
import { IoIosSunny } from 'react-icons/io';
import { PiTriangle } from 'react-icons/pi';
import { FaDroplet } from 'react-icons/fa6';
import { GiGrowth } from 'react-icons/gi';
import { useState } from 'react';

const PlantInfo = () => {
    const [active, setActive] = useState(1);
    const handleClick = (tabIndex: number) => {
        setActive(tabIndex);
    };
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location.state);
    const plantInfos = location.state;
    const handleAadButton = () => {
        navigate('/selectedsite', {
            state: {
                plantInfos,
            },
        });
    };
    console.log(plantInfos);
    const {
        Latin_name,
        Common_name,
        Other_names,
        Growth,
        Light_ideal,
        wateringDifficulty,
        Avaibility,
        Watering,
        maxTempCel,
        minTempCel,
        Origin, Zone, Climate, Use, Bearing, Pruning, Family_name, Color_of_leaf, Pot_diameter, Width_potential,
        Height_potential, Light_tolered
    } = plantInfos;

    return (
        <div className='p-4'>
            <div >
                <p className='font-bold text-2xl text-center'>{Latin_name}</p>
                {/* <p>{Other_names}</p> */}
                <p className='text-center'>{Common_name}</p>
            </div>

            {/* ------------------------------------- */}
            <div className='grid grid-cols-2 m-5 gap-4'>
                {/* <p className=' shadow-xl card p-5'>  <FcCheckmark />  RECOMMENDED</p> */}
                <p className='card shadow-md p-4 bg-green-50 flex justify-center items-center'>
                    <GiGrowth />
                    {Growth}
                </p>
                <p className='card shadow-md p-4 bg-green-50 flex justify-center items-center'>
                    <IoIosSunny />
                    {Light_ideal.split(' (')[0]}
                </p>
                <p className='card shadow-md p-4 bg-green-50 flex justify-center items-center'>
                    <PiTriangle />
                    {wateringDifficulty}
                </p>
                <p className='card shadow-md p-4 bg-green-50 flex justify-center items-center'>
                    <FaDroplet />
                    {Avaibility}
                </p>
            </div>
            <div className='flex justify-center'>
                <button
                    onClick={handleAadButton}
                    className='primaryBackground white w-5/6 text-white text-center p-2 rounded-3xl'
                >
                    Add Plant
                </button>
            </div>
            {/* <TbClover className='w-1/6' /> */}

            <div className='mt-7'>
                <div className='flex ml-10 gap-7 '>
                    <button
                        className={` ${active === 1
                            ? 'tab-active primaryBackground white rounded-lg px-2'
                            : ''
                            } `}
                        onClick={() => handleClick(1)}
                    >
                        Care
                    </button>
                    <button
                        className={` ${active === 2
                            ? 'tab-active primaryBackground white rounded-lg px-2'
                            : ''
                            }`}
                        onClick={() => handleClick(2)}
                    >
                        Characteristics
                    </button>
                    <button
                        className={` ${active === 3
                            ? 'tab-active primaryBackground white rounded-lg px-2'
                            : ''
                            }`}
                        onClick={() => handleClick(3)}
                    >
                        Site
                    </button>
                </div>
                <br />
                <div className='card  shadow-2xl p-2  rounded-lg bg-green-50'>
                    {active === 1 && (
                        <>
                            <div className='grid grid-cols-1 gap-3 p-2 tab-content '>
                                <div className='shadow-sm '>
                                    <b>Watering</b>
                                    <p>{Watering}</p>
                                </div>
                                <br />

                                <div className='shadow-sm'>
                                    <b>Bearing</b>
                                    <p>{Bearing}</p>
                                </div>

                                <br />
                                <div className='shadow-sm'>
                                    <b>Pruning</b>
                                    <p>{Pruning}</p>
                                </div>
                                <br />

                                <div className='shadow-sm'>
                                    <b>Use</b>
                                    <p>{Use}</p>
                                </div>



                            </div>
                        </>
                    )}
                    {active === 2 && (
                        <>


                            <div className='grid grid-cols-1 gap-3 p-2 tab-content '>
                                <div className='shadow-sm '>
                                    <b>Growth</b>
                                    <p>{Growth}</p>
                                </div>
                                <br />

                                <div className='shadow-sm'>
                                    <b>Colur Of Leaf</b>
                                    <p>{Color_of_leaf}</p>
                                </div>
                                <br />
                                <div className='shadow-sm'>
                                    <b>Maximum Temperature</b>
                                    <p>{maxTempCel}</p>
                                </div>
                                <br />
                                <div className='shadow-sm'>
                                    <b>Minimum Temperature</b>
                                    <p>{minTempCel}</p>
                                </div>

                                <br />
                                <div className='shadow-sm'>
                                    <b>Pot Diameter</b>
                                    <p>{Pot_diameter}</p>
                                </div>
                                <br />

                                <div className='shadow-sm'>
                                    <b>Width Potential</b>
                                    <p>{Width_potential}</p>
                                </div>
                                <br />
                                <div className='shadow-sm'>
                                    <b>Height Potential</b>
                                    <p>{Height_potential}</p>
                                </div>



                            </div>



                        </>
                    )}
                    {active === 3 && (
                        <>
                            <div className='grid grid-cols-1 gap-3 p-2 tab-content '>
                                <div className='shadow-sm '>
                                    <b>Origin</b>
                                    <p>{Origin}</p>
                                </div>
                                <br />

                                <div className='shadow-sm'>
                                    <b>Zone</b>
                                    <p>{Zone}</p>
                                </div>

                                <br />
                                <div className='shadow-sm'>
                                    <b>Climate</b>
                                    <p>{Climate}</p>
                                </div>
                                <br />

                                <div className='shadow-sm'>
                                    <b>Light Ideal</b>
                                    <p>{Light_ideal}</p>
                                </div>
                                <br />
                                <div className='shadow-sm'>
                                    <b>Light Tolereted</b>
                                    <p>{Light_tolered}</p>
                                </div>



                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PlantInfo;
