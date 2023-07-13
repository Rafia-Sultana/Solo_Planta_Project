import React, { useEffect, useRef, useState } from 'react';
import tropical from '../../assets/images/tropical.jpg';
import subTropical from '../../assets/images/subTropical.jpg';
import humidtropical from '../../assets/images/tropicalHumid.jpg';
import aridtropical from '../../assets/images/aridTropical.jpg';
import { useLocation, useNavigate } from 'react-router-dom';
import authJWT from '../../Services/ApiServiceJWT';
import AddingUserInfo from '../../Services/AddingUserInfo';

interface climate { climateName: string; desc: string; image: string; }
interface UserProfile { name: string, email: string, _id: string }
const Climate: React.FC = () => {
  // let array: any[] = []; let array2: climate[] = [];
  const location = useLocation();
  const navigate = useNavigate();
  const previousData = (location.state)
  // array.push(previousData);
  // console.log(previousData);
  // const [userInfo, setUserInfo] = useState('')


  const [userProfile, setUserProfile] = useState<UserProfile>({ name: '', email: '', _id: '' });




  const climateData = [
    {
      climateName: "Tropical",
      desc: " Every now and then I manage to keep a cactus alive",
      image: tropical
    },
    {
      climateName: "Tropical Humid",
      desc: " I have my plants under control,we are alright",
      image: humidtropical
    },
    {
      climateName: "SubTropical",
      desc: "What I dont know about plants is not worth knowing",
      image: subTropical
    },
    {
      climateName: "Arid Tropical",
      desc: "What I dont know about plants is not worth knowing",
      image: aridtropical
    },
  ]

  const handleForm = async (singleData: climate) => {
    // console.log(userProfile._id);
    previousData["climateData"] = singleData;
    previousData["userId"] = userProfile._id;
    // setUserInfo(previousData);
    await AddingUserInfo.userInfo(previousData);

    navigate('/home')

  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await authJWT.userProfile();
        setUserProfile(result)

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  return (
    <div >

      <form >
        <h3 className='font-bold text-lg text-center'>Climate</h3>
        <p className=''>Tell us your Climate </p>


        {
          climateData.map((singleData) =>
            <>
              <div className="flex justify-center gap-3 my-5" onClick={() => handleForm(singleData)}>
                <img src={singleData.image} alt="" className='w-28 rounded-lg' />
                <div>
                  <b>{singleData.climateName}</b>
                  <p>{singleData.desc}</p>
                </div>
              </div>
              <hr />
            </>
          )
        }



        {/* <div className='modal-action'>
            <button className='btn' onClick={closeModal}>
              Close
            </button>
          </div> */}
      </form>
      {/* </dialog> */}

    </div>
  );
};

export default Climate;
