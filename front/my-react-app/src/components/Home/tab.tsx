import React, { useState } from 'react';
import green from '../../assets/images/svg.png'

const Tab: React.FC = () => {
  const [active, setActive] = useState(1);
  const handleClick = (tabIndex: number) => {
    setActive(tabIndex);
  };

  return (
    <div className='h-screen'>

        {/* <div className="h-52 w-96  primaryBackground rounded-b-3xl"> */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="h-max  transform rotate-180 w-96">
  <path fill="#327161"
   fill-opacity="1"
    d="M0,160L60,176C120,192,240,224,360,
    218.7C480,213,600,171,720,165.3C840,160,960,192,
    1080,197.3C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,
    320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,
    320,120,320,60,320L0,320Z"></path>
</svg> */}



        {/* </div> */}
        <img src={green} className="h-max  transform rotate-180 w-96" alt="" />
        <br />
        <br />
      <div className='flex ml-20  gap-7 '>
        <button
          className={` ${
            active === 1 ? 'tab-active primaryBackground white' : ''
          } `}
          onClick={() => handleClick(1)}
        >
          Today
        </button>
        <button
          className={` ${
            active === 2 ? 'tab-active primaryBackground white' : ''
          }`}
          onClick={() => handleClick(2)}
        >
          Upcoming
        </button>
      </div>
      <br />
      <div className='card border-2 m-3 border-green-600 shadow-2xl p-2  rounded-lg h-44'>
        {active === 1 && (
          <>
            <div className='tab-content'><b>Content for Tab 1(todays list)</b></div>
          </>
        )}
        {active === 2 && (
          <>
            <b className='tab-content'>Content for Tab 2(upcoming list)</b>
          </>
        )}
      </div>
    </div>
  );
};

export default Tab;
