import { useLocation } from 'react-router-dom';

const HealthAssessment = () => {
  const location = useLocation();
  const datas = location.state;
  //    console.log(datas);
  return (
    <div className='p-5'>
      {datas?.similar_images?.map((single: any) => (
        <>
          <div className='flex overflow-x-scroll'>
            <img src={single.url} className=" w-44 h-44 flex-shrink-0 mr-4" alt='' />
          </div>
        </>
      ))}{' '}
      <br />
      <b> {datas.name}</b>
      <br />
      <p> <span className='underline font-bold '>url:</span>{datas.details?.url}</p>
      <p className='underline font-bold red'> {datas.details?.common_names} </p><br />
      <p><span className='underline font-bold '>Disease Description: <br /> </span>{datas.details?.description}</p> <br />

      <br />
      <div >
        <span className="underline font-bold ">Treatment: </span> <br />
        {datas.details?.treatment?.biological?.map((b: any) => (
          <>{b}</>
        ))}
      </div>
      <div className="">
        <span className="underline font-bold "> How To Prevent:</span> <br />
        {datas.details?.treatment?.prevention?.map((b: any) => (
          <>{b}</>
        ))}
      </div>
    </div>
  );
};

export default HealthAssessment;
