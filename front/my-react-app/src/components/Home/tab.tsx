import React, { useEffect, useState } from 'react';
import green from '../../assets/images/svg.png'
import authJWT from '../../Services/ApiServiceJWT';
import ProfileData from '../../Interfaces/ProfileData.interface';
const BASE_URL = 'http://localhost:5000';
const Tab: React.FC = () => {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [waterSchedule, setWaterScedule] = useState<any[]>([]);
  const [active, setActive] = useState(1);
  const handleClick = (tabIndex: number) => {
    setActive(tabIndex);
  };

  const handleProfile = async () => {
    const profileData = await authJWT.userProfile();
    // console.log(profileData);

    if (profile?._id !== profileData._id) setProfile(profileData);
  };

  const profileId = profile?._id;
  console.log(profileId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await handleProfile();

        const response = await fetch(`${BASE_URL}/water/schedule/${profileId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const result = await response.json();
        setWaterScedule(result);
        console.log('Schedule:', result);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [profile]);






  return (



    <div className='p-5 '>
      <img src={green} className="h-max  transform rotate-180 w-96" alt="" />
      <br />
      <br />
      <div className='flex ml-20  gap-7 '>
        <button
          className={` ${active === 1 ? 'tab-active primaryBackground white rounded-lg p-2' : ''
            } `}
          onClick={() => handleClick(1)}
        >
          Today
        </button>
        <button
          className={` ${active === 2 ? 'tab-active primaryBackground white rounded-lg p-2' : ''
            }`}
          onClick={() => handleClick(2)}
        >
          Upcoming
        </button>
      </div>
      <br />

      <div className='card p-2 rounded-lg overflow-y-scroll'>
        {waterSchedule.map((single) => {
          if (single.nextWatering === 'Water today.' && active === 1) {
            return (
              <div className='tab-content  mb-4' key={single.id}>
                <div>
                  <p className='font-semibold'>{single.plantSpecies.Common_name}</p>
                  <p>Watering in: {single.nextWatering}</p>
                </div>
              </div>
            );
          }

          if (single.nextWatering !== 'Water today.' && active === 2) {
            return (
              <div className='tab-content  mb-4' key={single.id}>
                <p className='font-semibold'>{single.plantSpecies.Common_name}</p>
                <p>Watering in: {single.nextWatering}</p>
              </div>
            );
          }
        })}

        {!waterSchedule.some((single) => single.nextWatering === 'Water today.' && active === 1) && (
          <b className='tab-content  mb-4'>
            <p className='text-center font-bold'>No schedule for today</p>
          </b>
        )}
      </div>




      {/* <div className='card  shadow-2xl p-2  rounded-lg h-44'> */}
      {/* {active === 1 && (
          <>
            <div className='tab-content'><b>


              Content for Tab 1(todays list)


            </b></div>
          </>
        )}
        {active === 2 && (
          <>
            <b className='tab-content'>Content for Tab 2(upcoming list)</b>
          </>
        )} */}
      {/* </div> */}
    </div>
  );
};

export default Tab;
