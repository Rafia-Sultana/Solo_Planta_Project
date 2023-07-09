import React from 'react';
import beginner from '../../assets/images/begineerPot.jpg';
import experienced from '../../assets/images/experiencedPot.jpg';
import masterPot from '../../assets/images/masterPot.jpg';
import indoor from '../../assets/images/indoor.jpg';
import outdoor from '../../assets/images/outdoor.jpg';
import tropical from '../../assets/images/tropical.jpg';
import subTropical from '../../assets/images/subTropical.jpg';
import humidtropical from '../../assets/images/tropicalHumid.jpg';
import aridtropical from '../../assets/images/aridTropical.jpg';
import Modal from './Modal';

const AllData: React.FC = () => {
  const allInfo = [
    {
      SkillLevel: 'Beginner',
      desc: ' Every now and then I manage to keep a cactus alive',
      image: beginner,
    },
    {
      SkillLevel: 'Experienced',
      desc: ' I have my plants under control,we are alright',
      image: experienced,
    },
    {
      SkillLevel: 'Master',
      desc: 'What I dont know about plants is not worth knowing',
      image: masterPot,
    },
    {
      siteName: 'Indoor',
      desc: 'For indoor plant care,in living room,master room',
      image: indoor,
    },
    {
      siteName: 'Outdoor',
      desc: ' For potted plants in garden,balcony or terrace',
      image: outdoor,
    },
    {
      climateName: 'Tropical',
      desc: ' Every now and then I manage to keep a cactus alive',
      image: tropical,
    },
    {
      climateName: 'Tropical Humid',
      desc: ' I have my plants under control,we are alright',
      image: humidtropical,
    },
    {
      climateName: 'SubTropical',
      desc: 'What I dont know about plants is not worth knowing',
      image: subTropical,
    },
    {
      climateName: 'Arid Tropical',
      desc: 'What I dont know about plants is not worth knowing',
      image: aridtropical,
    },
  ];
  return (
    <div>
      {allInfo.map((singleInfo) => (
        <>{<Modal singleInfo={singleInfo} />}</>
      ))}
    </div>
  );
};

export default AllData;
