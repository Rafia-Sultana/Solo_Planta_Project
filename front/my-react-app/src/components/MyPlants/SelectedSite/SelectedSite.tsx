import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import addSitInfo from '../../../Services/AddingSiteInfo';
import authJWT from '../../../Services/ApiServiceJWT';
import AllPlant from '../../../Services/AllPlant';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import addUserInfo from '../../../Services/AddingUserInfo';
import Icons from '../../Icons/Icons';
import { GoDot } from 'react-icons/go';
import { FcApproval } from 'react-icons/fc';
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
    userId: {
        profileId: string;
    };
}
interface ProfileData {
    _id: string;
    name: string;
    email: string;
}
interface Userinfo {
    skill_level: string;
    climate: string;
    indoor_outdoor: string;
    userId: string;
}

const SelectedSite = () => {
    const notify = () => toast(`Good Choice..${profileName}`);
    const navigate = useNavigate();
    const location = useLocation();
    const { _id, maxTempCel, minTempCel, wateringDifficulty, Climate } =
        location.state.plantInfos;
    // console.log(_id, maxTempCel, minTempCel, wateringDifficulty, Climate);
    const plantId = location.state.plantInfos._id;
    const plant_id = location.state.plantInfos._id;

    const [userinfo, setUserInfo] = useState<Userinfo[]>([]);


    const [allSiteByUserId, setAllSiteByUserId] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [profile, setProfile] = useState<ProfileData | null>(null);
    const profileId = profile?._id;
    const profileName = profile?.name;

    const date = new Date(selectedDate);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await authJWT.userProfile();
                const id = result._id;

                const userInfoById = await addUserInfo.userInfoById(id);
                const getSiteById = await addSitInfo.getSiteById(id);


                setAllSiteByUserId(getSiteById);
                setProfile(result);

                setUserInfo(userInfoById);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const showModal = () => {
        const modal = document.getElementById('my_modal_3') as HTMLDialogElement | null;
        if (modal) {
            modal.showModal();
        }
    };
    const closeModal = () => {
        const modal = document.getElementById('my_modal_3') as HTMLDialogElement | null;
        if (modal) {
            modal.close();
        }
    };

    const showModal1 = () => {
        const modal = document.getElementById('my_modal_5') as HTMLDialogElement | null;
        if (modal) {
            modal.showModal();
        }
    };

    const closeModal1 = () => {
        const modal = document.getElementById('my_modal_5') as HTMLDialogElement | null;
        if (modal) {
            modal.close();
        }
    };
    const showModal2 = () => {
        const modal = document.getElementById('my_modal_2') as HTMLDialogElement | null;
        if (modal) {
            modal.showModal();
        }
    };

    const closeModal2 = () => {
        const modal = document.getElementById('my_modal_2') as HTMLDialogElement | null;
        if (modal) {
            modal.close();
        }
    };

    const userSkillLevel = userinfo[0]?.skill_level;
    const userAreaClimate = userinfo[0]?.climate;

    const handleSingleSite = async (singleSite: site) => {
        const singleSiteId = singleSite._id;
        const userSiteTemp = singleSite.temperature.maxValue;



        if ((userSiteTemp > maxTempCel)
            && (userSkillLevel !== wateringDifficulty) &&
            (userAreaClimate !== Climate)) {
            showModal();
            console.log('not for you');

        }
        else {
            console.log('for you');
            // notify();

            const createPlant = { profileId, singleSiteId, plantId, selectedDate };

            await AllPlant.createPlantByUser(createPlant);
            await AllPlant.wateringLogByUser({ plant_id, date });
            showModal2();
            // navigate('/done')


        }




        // const createPlant = { profileId, singleSiteId, plantId, selectedDate };

        // await AllPlant.createPlantByUser(createPlant);
        // await AllPlant.wateringLogByUser({ plant_id, date });
    };

    const handleModalClick = async (singleSite: site) => {
        const singleSiteId = singleSite._id;
        console.log('clicked');
        const createPlant = { profileId, singleSiteId, plantId, selectedDate };

        await AllPlant.createPlantByUser(createPlant);
        await AllPlant.wateringLogByUser({ plant_id, date });

        navigate('/done')
    }
    const perfectClick = () => {

        navigate('/done')
    }

    const currentDate = new Date().toISOString().split('T')[0];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSelectedDate(value);
    };


    return (
        <div className='p-4'>

            {/* <button onClick={notify}>Notify!</button> */}
            <ToastContainer />

            <div className="" >
                <button className="btn hidden" onClick={showModal2}></button>
                <dialog id="my_modal_2" className="modal">
                    <form method="dialog" className="modal-box">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 " onClick={closeModal2}>✕</button>

                        <div className="flex flex-col justify-center items-center gap-3">
                            <p >< FcApproval size={65} /></p>
                            <h3 className='font-bold text-center'>Perfect Choice For You!</h3>
                            <button
                                onClick={perfectClick}
                                className='border-2 p-3 border-green-600 mt-3 w-full rounded-lg text-green-600 font-bold'>Next</button>
                        </div>
                    </form>
                </dialog>
            </div>






            <div className="" style={{ position: 'fixed', top: '4rem', right: '2rem', bottom: "2rem" }}>
                <button className="btn" onClick={showModal1}>Select Date</button>
                <dialog id="my_modal_5" className="modal">
                    <form method="dialog" className="modal-box">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 " onClick={closeModal1}>✕</button>
                        <h3 className="font-bold text-lg my-2">When you have last watered ?</h3>
                        <input
                            type='date'
                            // min={currentDate}
                            value={selectedDate}
                            onChange={handleChange}
                            required
                            className=' my-5'
                        />
                    </form>
                </dialog>
            </div>

            <h3 className='text-center font-bold mb-8 text-xl'>
                Pick a Site...
                <span className='text-green-500 font-bold'>{profile?.name}!!</span>
            </h3>


            {allSiteByUserId.map((singleSite: site) => (
                <div
                    className='flex flex-row gap-5 justify-start items-center mt-5'
                    key={singleSite._id}
                    onClick={() => handleSingleSite(singleSite)}
                >
                    <div className='my-2'>
                        <img
                            src={singleSite.previous.image}
                            className='w-28 h-28 rounded-lg'
                        />
                        <p>{singleSite.previous.name}</p>
                    </div>
                    <div className="">
                        <button className="btn hidden" onClick={showModal}></button>
                        <dialog id="my_modal_3" className="modal">
                            <form method="dialog" className="modal-box">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-7  top-7 " onClick={closeModal}>✕</button>
                                <section className='bg-orange-400 p-4 rounded-lg'>
                                    <h3 className="font-bold text-lg">Hey {profile?.name}!</h3>
                                    <h3>This Plant is not recommanded for you!</h3>
                                </section>


                                <div className="flex justify-center items-center gap-5 mr-2">
                                    <GoDot size={30} style={{ color: "orange" }} />
                                    <div>
                                        <p className='font-semibold text-center mt-3'>Difficulty:  {wateringDifficulty}</p>
                                        <p className='text-center'>Your Skill:  {userSkillLevel}</p>
                                    </div>
                                </div>
                                <br />
                                <div className="flex justify-center items-center gap-5">
                                    <GoDot size={30} style={{ color: "orange" }} />
                                    <div>
                                        <p className='font-semibold text-center'>Climate:  {Climate}</p>
                                        <p className='text-center'>Your Area: {userAreaClimate}</p>
                                    </div>
                                </div>
                                <br />
                                <div className="flex justify-center items-center gap-5 mr-6">
                                    <GoDot size={30} style={{ color: "orange" }} />
                                    <div>
                                        <p className='font-semibold text-center '>    Suitable Site:  No</p>
                                        {/* <p className='text-center'>Your Area: {userAreaClimate}</p> */}
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleModalClick(singleSite)}
                                    className='border-2 rounded-lg w-full mt-3 border-orange-400 p-3 font-bold'

                                >want to proceed?</button>

                            </form>
                        </dialog>
                    </div>


                </div>
            ))}

            <Icons></Icons>
        </div>
    );
};

export default SelectedSite;
