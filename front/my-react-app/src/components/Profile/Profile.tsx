import { useEffect, useState } from "react";
import authJWT from "../../Services/ApiServiceJWT";
import plants from "../../Services/AllPlant";
import Icons from "../Icons/Icons";
const BASE_URL = 'http://localhost:5000';


interface ProfileData {
  _id: string,
  name: string,
  email: string;

}

interface Userinfo {
  skill_level: string,
  climate: string,
  indoor_outdoor: string,
  userId: string

}
const Profile: React.FC = () => {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [userInfo, setUserInfo] = useState<Userinfo[]>([]);
  const [loader, setLoader] = useState<Boolean>(true);
  const profileId = profile?._id;




  console.log(userInfo)
  // const handleProfile = async () => {

  // };

  // useEffect(() => {
  //   handleProfile();
  // }, []);




  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileData = await authJWT.userProfile();
        const id = profileData?._id;

        if (profileData?._id !== profile?._id) setProfile(profileData);

        const response = await fetch(`${BASE_URL}/userinfo/${id}`);
        const responseData = await response.json(); // Wait for the JSON data to be parsed

        setUserInfo(responseData); // Log the parsed JSON data

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="card shadow-2xl h-screen ">
      {/* <h2>Profile</h2> */}
      <hr />
      {profile === null ? (
        <span className="loading loading-dots loading-lg"></span>

      ) : (
        <>

          <div className="grid grid-cols-1 gap-3">
            <p className="flex justify-center items-center primaryBackground h-44 rounded-t-3xl white text-4xl text-center"> {profile.name}</p>
            <div className="p-4 grid grid-cols-1 gap-3">

              <div className="bg-gray-100 p-4 rounded-lg">
                <label htmlFor="" >Email</label>
                <p className="font-bold ">{profile.email}</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <label htmlFor="" >Account</label>
                <p className="font-bold ">Standard</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <label htmlFor="" >Indoor/Outdoor</label>
                <p className="font-bold ">
                  {userInfo[0]?.indoor_outdoor
                  }</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <label htmlFor="" >Skill Level</label>
                <p className="font-bold ">{userInfo[0]?.skill_level}</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <label htmlFor="" >Climate</label>
                <p className="font-bold ">{userInfo[0]?.climate}</p>
              </div>

              {/* <div className="bg-gray-100 p-4 rounded-lg">
              
                <p className="font-bold ">LogOut</p>
              </div> */}

            </div>
            <Icons></Icons>
            {/* <p><span>Indoor/Outdoor:</span></p>
            <p><span>Skill Level:</span></p> */}
          </div>
        </>
      )}








      {/*   {
        loader ?
          <> <span className="loading loading-dots loading-lg"></span></> :
          (<>
            
          </>)
      } */}
    </div>
  );
};

export default Profile;
