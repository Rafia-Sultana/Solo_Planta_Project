import React, { useRef } from 'react';
import tropical from '../../assets/images/tropical.jpg';
import subTropical from '../../assets/images/subTropical.jpg';
import humidtropical from '../../assets/images/tropicalHumid.jpg';
import aridtropical from '../../assets/images/aridTropical.jpg';

const Climate: React.FC = () => {
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
  const climateData= [
    {
        climateName: "Tropical",
        desc: " Every now and then I manage to keep a cactus alive",
        image: tropical
    },
    {
        climateName: "Tropical Humid",
        desc: " I have my plants under control,we are alright",
        image: humidtropical
    },
    {
        climateName: "SubTropical",
        desc: "What I dont know about plants is not worth knowing",
        image: subTropical
    },
    {
        climateName: "Arid Tropical",
        desc: "What I dont know about plants is not worth knowing",
        image: aridtropical
    },
  ]
  return (
    <div >
      {/* <button className='btn primaryBackground text-white' onClick={openModal}>
        Climate
      </button> */}
      {/* <dialog id='' className=' ' ref={modalRef}> */}
        <form method='' className=''>
          <h3 className='font-bold text-lg text-center'>Climate</h3>
          <p className=''>Tell us your Climate </p>

        
         {
            climateData.map((singleData)=>
            <>
           <div className="flex justify-center gap-3 my-5">
           <img src={singleData.image} alt="" className='w-28 rounded-lg'/>
            <div>
            <b>{singleData.climateName}</b>
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
      {/* </dialog> */}
    </div>
  );
};

export default Climate;
