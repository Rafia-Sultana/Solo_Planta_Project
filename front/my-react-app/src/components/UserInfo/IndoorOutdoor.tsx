import React, { useRef } from 'react';
import indoor from '../../assets/images/indoor.jpg';
import outdoor from '../../assets/images/outdoor.jpg';


const IndoorOutdoor: React.FC = () => {
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
  const siteData= [
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
  return (
    <div>
      {/* <button className='btn  primaryBackground text-white' onClick={openModal}>
      Indoor or Outdoor
      </button> */}
      
        <form method='' className=''>
          <h3 className='font-bold text-lg text-center'>Indoor or Outdoor</h3>
          <p className=''>Would you like help with plants indoor,outdoor or both?</p>

        
         {
            siteData.map((singleData)=>
            <>
           <div className="flex justify-center gap-3 my-5">
           <img src={singleData.image} alt="" className='w-28 rounded-lg'/>
            <div>
            <b>{singleData.siteName}</b>
            <p>{singleData.desc}</p>
            </div>
           </div>
            <hr />
            </>
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
