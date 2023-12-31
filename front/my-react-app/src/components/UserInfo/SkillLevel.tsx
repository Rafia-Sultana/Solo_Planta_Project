import React, { useRef } from 'react';
import beginner from '../../assets/images/begineerPot.jpg';
import experienced from '../../assets/images/experiencedPot.jpg';
import masterPot from '../../assets/images/masterPot.jpg';
import { useNavigate } from 'react-router-dom';


interface Skill {
  SkillLevel: string;
  desc: string;
  image: string;
}

const SkillLevel: React.FC = () => {
  const navigate = useNavigate();

  const skillData = [
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
  const handleForm = (singleData: Skill) => {
    navigate('/indoorOutdoor',
      {
        state: singleData
      })

  }

  return (
    <div className='p-5'>


      <form className='mt-3'>
        <h3 className='font-bold text-lg text-center'>Skill Level</h3>
        <p className='font-semibold'>How skilled are you at taking care of plants?</p>


        {
          skillData.map((singleData) =>
            <div key={singleData.SkillLevel}>
              <div className="flex justify-center gap-3 my-5" onClick={() => handleForm(singleData)} >
                <img src={singleData.image} alt="" className='w-28 rounded-lg' />
                <div>
                  <b>{singleData.SkillLevel}</b>
                  <p>{singleData.desc}</p>
                </div>
              </div>
              <hr />
            </div>
          )
        }
      </form>

    </div>
  );
};

export default SkillLevel;
