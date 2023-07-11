import React, { useRef } from 'react';
import beginner from '../../assets/images/begineerPot.jpg';
import experienced from '../../assets/images/experiencedPot.jpg';
import masterPot from '../../assets/images/masterPot.jpg';
import { useNavigate } from 'react-router-dom';
interface Skill{ 
  SkillLevel: string; 
  desc: string;
   image: string;
 }

const SkillLevel: React.FC = () => {
  const navigate = useNavigate();
  // const modalRef = useRef<HTMLDialogElement>(null);

  // const openModal = () => {
  //   if (modalRef.current) {
  //     modalRef.current.showModal();
  //   }
  // };

  // const closeModal = () => {
  //   if (modalRef.current) {
  //     modalRef.current.close();
  //   }
  // };
  const skillData= [
    {
        SkillLevel: "Beginner",
        desc: " Every now and then I manage to keep a cactus alive",
        image: beginner
    },
    {
        SkillLevel: "Experienced",
        desc: " I have my plants under control,we are alright",
        image: experienced
    },
    {
        SkillLevel: "Master",
        desc: "What I dont know about plants is not worth knowing",
        image: masterPot
    }
  ]
const handleForm=(singleData:Skill )=>{
  navigate('/indoorOutdoor',
  {
    state:singleData
  })
// console.log(singleData);
}

  return (
    <div>
      {/* <button className='btn  primaryBackground text-white' >
        Skill
      </button> */}
      
        <form>
          <h3 className='font-bold text-lg text-center'>Skill Level</h3>
          <p className=''>How skilled are you at taking care of plants?</p>

        
         {
            skillData.map((singleData)=>
            <>
           <div className="flex justify-center gap-3 my-5"  onClick={()=>handleForm(singleData)} >
           <img src={singleData.image} alt="" className='w-28 rounded-lg'/>
            <div>
            <b>{singleData.SkillLevel}</b>
            <p>{singleData.desc}</p>
            </div>
           </div>
            <hr />
            </>
            )
         }
  </form>
     
    </div>
  );
};

export default SkillLevel;
