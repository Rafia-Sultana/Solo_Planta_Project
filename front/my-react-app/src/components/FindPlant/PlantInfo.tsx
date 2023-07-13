import { useLocation } from 'react-router-dom';
import { FcCheckmark } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { BsTriangleHalf } from 'react-icons/bs';
import { BsFillSunFill } from 'react-icons/bs';
import { SlLocationPin } from 'react-icons/sl';

const PlantInfo = () => {
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location.state);
    const plantInfos = location.state;
    const handleAadButton = () => {
        navigate('/selectedsite', {
            state: {
                plantInfos
            }
        })
    }
    const { Latin_name, Common_name, Other_names, Growth, Light_ideal, wateringDifficulty, Availability } = plantInfos
    return (
        <div>
            <div className="">
                <p>{Latin_name}</p>
                <p>{Other_names}</p>
                <p>{Common_name}</p>
            </div>

            {/* ------------------------------------- */}
            <div>
                <p className=' shadow-xl card p-5'>  <FcCheckmark />  RECOMMENDED</p>
                <p>{Growth}</p>
                <p>{Light_ideal.split(' (')[0]}</p>
                <p>{wateringDifficulty}</p>
                <p>{Availability}</p>


            </div>
            <button
                onClick={handleAadButton}
                className='primaryBackground white'>Add Plant</button>

        </div>



    );
};

export default PlantInfo;