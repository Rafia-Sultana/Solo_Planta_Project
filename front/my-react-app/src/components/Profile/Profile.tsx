import { useEffect, useState } from "react";
import authJWT from "../../Services/ApiServiceJWT";
import plants from "../../Services/AllPlant";


interface ProfileData {
    name:string,
  email: string;

}

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [plantsdata,setPlantsdata] = useState({});


const handlePlants = async ()=>{
  const plantsinfo = await plants.plant();
  setPlantsdata(plantsinfo);
}
useEffect(() => {
  handlePlants();
}, []);
console.log(plantsdata);





  const handleProfile = async () => {
    const profileData = await authJWT.userProfile();
    setProfile(profileData);
  };

  useEffect(() => {
    handleProfile();
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
               <p className="font-bold "></p>
               </div>
               <div className="bg-gray-100 p-4 rounded-lg">
              <label htmlFor="" >Skill Level</label>
               <p className="font-bold "></p>
               </div>
            </div>
           
            {/* <p><span>Indoor/Outdoor:</span></p>
            <p><span>Skill Level:</span></p> */}
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
