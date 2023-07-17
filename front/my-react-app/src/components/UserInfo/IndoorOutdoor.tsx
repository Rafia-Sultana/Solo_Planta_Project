import React, { useRef } from 'react';
import indoor from '../../assets/images/indoor.jpg';
import outdoor from '../../assets/images/outdoor.jpg';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
interface site { siteName: string; desc: string; image: string; }

const IndoorOutdoor: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const skillDataByUser = (location.state);


  const siteData = [
    {
      siteName: "Indoor",
      desc: "For indoor plant care,in living room,master room",
      image: indoor
    },
    {
      siteName: "Outdoor",
      desc: " For potted plants in garden,balcony or terrace",
      image: outdoor
    },

  ]

  const handleForm = (singleData: site) => {

    navigate('/climate', {
      state: {
        singleData, skillDataByUser
      }
    })
  }
  return (
    <div className='p-5'>


      <form method='' className='mt-3'>
        <h3 className='font-bold text-lg text-center'>Indoor or Outdoor</h3>
        <p className='font-semibold text-center mt-3 mb-8'>Would you like help with plants indoor,outdoor or both?</p>


        {
          siteData.map((singleData) =>
            <div key={singleData.siteName}>
              <div className="flex justify-center gap-3 my-5" onClick={() => handleForm(singleData)}>
                <img src={singleData.image} alt="" className='w-28 rounded-lg' />
                <div>
                  <b>{singleData.siteName}</b>
                  <p>{singleData.desc}</p>
                </div>
              </div>
              <hr />
            </div>
          )
        }



        {/* <div className='modal-action'>
            <button className='btn' onClick={closeModal}>
              Close
            </button>
          </div> */}
      </form>

    </div>
  );
};

export default IndoorOutdoor;
