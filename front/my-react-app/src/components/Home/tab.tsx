import React, { useState } from 'react';
import green from '../../assets/images/svg.png'

const Tab: React.FC = () => {
  const [active, setActive] = useState(1);
  const handleClick = (tabIndex: number) => {
    setActive(tabIndex);
  };

  return (
    <div className='h-screen'>






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
      <div className='card  shadow-2xl p-2  rounded-lg h-44'>
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
