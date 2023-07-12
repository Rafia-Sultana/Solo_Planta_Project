import { useState } from "react";


const Tab:React.FC = () => {
    const [active, setActive] = useState(1);
  const handleClick = (tabIndex: number) => {
    setActive(tabIndex);
  };
    return (
        <div>
             <div className='flex ml-20  gap-7 '>
        <button
          className={` ${
            active === 1 ? 'tab-active border-b-2 border-green-700 ' : ''
          } `}
          onClick={() => handleClick(1)}
        >
          Sites
        </button>
        <button
          className={` ${
            active === 2 ? 'tab-active border-b-2 border-green-700' : ''
          }`}
          onClick={() => handleClick(2)}
        >
         Plants
        </button>
      </div>
      <br />
      <div className='card  m-3  p-2  rounded-lg h-44'>
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