import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import addSitInfo from '../../../Services/AddingSiteInfo';
import authJWT from '../../../Services/ApiServiceJWT';
import AllPlant from '../../../Services/AllPlant';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import addUserInfo from '../../../Services/AddingUserInfo';
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
    };
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
    console.log(location.state);
    const plantMaxTemp = location.state.plantInfos.maxTempCel
    const plantMinTemp = location.state.plantInfos.minTempCel;
    const plantWateringDifficulty = location.state.plantInfos.wateringDifficulty;
    const plantClimate = location.state.plantInfos.Climate;
    // console.log(plantClimate);

    console.log(plantWateringDifficulty)

    // console.log(location.state.plantInfos._id);
    const [userinfo, setUserInfo] = useState<Userinfo[]>([])
    const [allSite, setAllSite] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [profile, setProfile] = useState<ProfileData | null>(null);
    const profileId = profile?._id;
    console.log(profileId);



    // console.log(selectedDate);
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

        const createPlant = { profileId, singleSiteId, plantId, selectedDate }
        // console.log(singleSiteId);
        await AllPlant.createPlantByUser(createPlant);

    };




    const currentDate = new Date().toISOString().split('T')[0];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSelectedDate(value);
    };
    return (
        <div>
            <p className='text-green-500'>Hello {profile?.name}</p>


            <h3 className='text-center font-bold'>Pick a Site</h3>
            <input
                type='date'
                min={currentDate}
                value={selectedDate}
                onChange={handleChange}
                required
            />
            {allSite.map((singleSite: site) => (
                <div
                    className='flex flex-row gap-5 justify-center items-center  '
                    key={singleSite._id}
                    onClick={() => handleSingleSite(singleSite._id)}
                >


                    {(singleSite.temperature.maxValue >= plantMaxTemp)

                        ? (
                            <p>
                                <ToastContainer /></p>
                        ) : null}

                    <img onClick={notify} src={singleSite.previous.image} className='w-28 h-28' alt='' />
                    <p>{singleSite.previous.name}</p>

                </div>
            ))}
        </div>
    );
};

export default SelectedSite;
