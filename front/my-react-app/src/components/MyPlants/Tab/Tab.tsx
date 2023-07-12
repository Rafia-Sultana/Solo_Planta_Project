import { useState } from "react";
import AddSite from "../AddSite/AddSite";
import AddPlant from "../AddPlant/AddPlant";


const Tab: React.FC = () => {
  const [active, setActive] = useState(1);
  const handleClick = (tabIndex: number) => {
    setActive(tabIndex);
  };
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
            <div className=''><b>Content for Tab 1(todays list)</b></div>
            <AddSite></AddSite>
          </>
        )}
        {active === 2 && (
          <>
            <b className=''>Content for Tab 2(upcoming list)</b>
            <AddPlant></AddPlant>
          </>
        )}
      </div>
    </div>
  );
};

export default Tab;