import React, { useRef,useState } from 'react';

const Modal: React.FC<{singleInfo: any}> = ({singleInfo}) => {
  const myModalRef = useRef<HTMLDialogElement>(null);
  const [selectedInfo, setSelectedInfo] = useState(null);

  const openModal = (singleInfo:any) => {
    setSelectedInfo(singleInfo)
    if (myModalRef.current) {
      myModalRef.current.showModal();
    }
  };
  console.log(selectedInfo);

  return (
    <>
      <button className="btn" onClick={()=>openModal(singleInfo)}>SkillLevel</button>
      <button className="btn" onClick={openModal}>site</button>
      <button className="btn" onClick={openModal}>climate</button>
      <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle" ref={myModalRef}>
      <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          {/* {selectedInfo && (
            <div key={selectedInfo.SkillLevel || selectedInfo.siteName || selectedInfo.climateName}>
              <h4>{selectedInfo.SkillLevel || selectedInfo.siteName || selectedInfo.climateName}</h4>
              <p>{selectedInfo.desc}</p>
              <img src={selectedInfo.image} alt={selectedInfo.SkillLevel || 
                selectedInfo.siteName || selectedInfo.climateName} />
            </div>
          )} */}
          <div className="modal-action">
            <button className="btn" onClick={() => myModalRef.current?.close()}>Close</button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default Modal;
