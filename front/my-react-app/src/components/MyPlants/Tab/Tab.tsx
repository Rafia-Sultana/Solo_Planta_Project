import { useEffect, useState } from 'react';
import AddSite from '../AddSite/AddSite';
import AddPlant from '../AddPlant/AddPlant';
import addSitInfo from '../../../Services/AddingSiteInfo';
import Site from '../../../Interfaces/Site.interface';
import authJWT from '../../../Services/ApiServiceJWT';
import ProfileData from '../../../Interfaces/ProfileData.interface';
import AllPlant from '../../../Services/AllPlant';
import Plants from '../../../Interfaces/Plants.interface';

interface PlantByUser {
  plant_id: string;
  site_id: string;
  user_id: string;
}

const Tab: React.FC = () => {
  const [allSite, setAllSite] = useState<Site[]>([]);
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [plantByUser, setPlantByUser] = useState<PlantByUser[]>([]);
  const [allPlant, setAllPlant] = useState<Plants[]>([]);
  const [active, setActive] = useState(1);
  const profileId = profile?._id;

  // console.log(plantByUser);

  // console.log(profileId);
  const handleClick = (tabIndex: number) => {
    setActive(tabIndex);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await addSitInfo.getSite();
        const profileData = await authJWT.userProfile();
        const getPlantByUser = await AllPlant.getPlantByUser();
        const allPlant = await AllPlant.plant();
        setAllSite(result);
        setAllPlant(allPlant);
        setProfile(profileData);
        setPlantByUser(getPlantByUser);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // console.log(allPlant);

  return (
    <div>
      <div className='flex justify-center items-center font-semibold  gap-7 '>
        <button
          className={` ${active === 1 ? 'tab-active border-b-2 border-green-700 ' : ''
            } `}
          onClick={() => handleClick(1)}
        >


          SITES
        </button>
        <button
          className={` ${active === 2 ? 'tab-active border-b-2 border-green-700' : ''
            }`}
          onClick={() => handleClick(2)}
        >
          PLANTS
        </button>
      </div>
      <br />
      <div className=' '>
        {active === 1 && (
          <>
            <div className=''>
              <b>
                {allSite.map((singleSite: Site) => (
                  <div
                    className='flex flex-row mb-2 gap-3 justify-start mx-4 '
                    key={singleSite._id}
                  >
                    {singleSite.userId.profileId === profileId ? (
                      <>


                        <img
                          src={singleSite.previous.image}
                          className='w-28 h-28 rounded-md'
                          alt=''
                        />
                        <p className='mt-10'>{singleSite.previous.name}</p>
                      </>
                    ) : (
                      <>
                        <p></p>
                      </>
                    )}
                  </div>
                ))}
              </b>
            </div>
            <AddSite></AddSite>
          </>
        )}
        {active === 2 && (
          <>
            <div className='card px-4  '>
              {plantByUser.map((singlePlantByUser) => (
                <>
                  {singlePlantByUser.user_id === profileId ? (
                    <>
                      {allPlant.map((singlePlant) => (
                        <div className=''>
                          {singlePlant._id == singlePlantByUser.plant_id ? (
                            <div className='card '>

                              <p className='font-semibold'>
                                {singlePlant.Common_name}
                              </p>



                              {allSite.map((singleSite) => (
                                <>
                                  {singlePlantByUser.site_id ==
                                    singleSite._id ? (
                                    <>
                                      {/* <span className='text-sm'> */}

                                      {singleSite.previous.name}
                                      {/* </span> */}
                                      <br />
                                      <br />
                                    </>
                                  ) : (
                                    <></>
                                  )}
                                </>
                              ))}
                            </div>
                          ) : (
                            <div className=''></div>
                          )}
                        </div>
                      ))}
                    </>
                  ) : (
                    <></>
                  )}
                </>
              ))}
            </div>
            <AddPlant></AddPlant>
          </>
        )}
      </div>
    </div>
  );
};

export default Tab;
