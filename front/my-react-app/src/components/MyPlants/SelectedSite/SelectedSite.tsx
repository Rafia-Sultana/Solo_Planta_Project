import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import addSitInfo from '../../../Services/AddingSiteInfo';
import authJWT from '../../../Services/ApiServiceJWT';
import AllPlant from '../../../Services/AllPlant';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import addUserInfo from '../../../Services/AddingUserInfo';
import Icons from '../../Icons/Icons';
const BASE_URL = 'http://localhost:5000';
interface site {
    _id: string;
    previous: {
        name: string;
        image: string;
    };
    volume: number;
    temperature: {
        maxValue: number;
        minValue: number;
    },
    userId: {
        profileId: string
    }
}
interface ProfileData {
    _id: string;
    name: string;
    email: string;
}
interface Userinfo {
    skill_level: string,
    climate: string,
    indoor_outdoor: string,
    userId: string

}


const SelectedSite = () => {

    const notify = () => toast("This plant is not for you..You may check other");
    const navigate = useNavigate();
    const location = useLocation();
    const plantId = (location.state.plantInfos._id)
    const plant_id = (location.state.plantInfos._id)
    console.log(location.state);
    const plantMaxTemp = location.state.plantInfos.maxTempCel
    const plantMinTemp = location.state.plantInfos.minTempCel;
    const plantWateringDifficulty = location.state.plantInfos.wateringDifficulty;
    const plantClimate = location.state.plantInfos.Climate;

    // console.log(plantClimate);

    // console.log(plantWateringDifficulty)

    // console.log(location.state.plantInfos._id);
    const [userinfo, setUserInfo] = useState<Userinfo[]>([])
    const [allSite, setAllSite] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [profile, setProfile] = useState<ProfileData | null>(null);
    const profileId = profile?._id;
    const date = new Date(selectedDate);
    // console.log(date);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await addSitInfo.getSite();

                setAllSite(result);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    // console.log(allSite);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await authJWT.userProfile();

                setProfile(result);
                // console.log(profileId);


                const response = await fetch(`${BASE_URL}/userinfo/${profileId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },

                });
                if (response.ok) {
                    const data = await response.json();
                    setUserInfo(data);

                } else {
                    console.log('Request failed with status:', response.status);
                }

            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);


    const handleSingleSite = async (singleSiteId: string) => {
        // console.log(date);

        const createPlant = { profileId, singleSiteId, plantId, selectedDate }
        // console.log(singleSiteId);

        await AllPlant.createPlantByUser(createPlant);
        await AllPlant.wateringLogByUser({ plant_id, date })

    };




    const currentDate = new Date().toISOString().split('T')[0];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSelectedDate(value);
    };
    const handlecClick = () => {
        // console.log('clicked');
        navigate('/done')
    }

    return (
        <div className='p-4'>



            <h3 className='text-center font-bold mb-8 text-xl'>Pick a Site...
                <span className='text-green-500 font-bold'>{profile?.name}!!</span>
            </h3>
            <input
                type='date'
                min={currentDate}
                value={selectedDate}
                onChange={handleChange}
                required
                className='ml-52 my-5'
            />
            {allSite.map((singleSite: site) => (
                <div
                    className='flex flex-row gap-5 justify-start items-center'
                    key={singleSite._id}
                    onClick={() => handleSingleSite(singleSite._id)}
                >
                    {singleSite.userId.profileId === profileId ? (
                        <div className='my-2' onClick={handlecClick} >
                            <img src={singleSite.previous.image}
                                className='w-28 h-28 rounded-lg' alt='' />
                            <p>{singleSite.previous.name}</p>
                        </div>
                    ) : (
                        <>
                            <p></p>
                        </>
                    )}
                </div>
            ))}
            <Icons></Icons>

        </div>
    );
};

export default SelectedSite;
