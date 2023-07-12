import balcony from '../../../assets/images/balcony.jpg'
import living from '../../../assets/images/living.jpg'
import kitchen from '../../../assets/images/kitchen.jpg'
import bedroom from '../../../assets/images/bedroom.jpg'
import office from '../../../assets/images/office.jpg'
import { useNavigate } from 'react-router-dom'

interface siteList{ 
    name: string; 
    image: string 
}


const SiteList = () => {

    const userSiteData= [
        {
            name: "Living",

            image: living
        },
        {
            name: "Bedroom",
            image: bedroom
        },
        {
            name: "Balcony",
            image: balcony
        },
        {
            name: "Kitchen",
            image: kitchen
        },
        {
            name: "Office",
            image: office
        },
      ]
const navigate = useNavigate();
      const handleClick = (single:siteList ) =>{
        navigate('/light',{
            state:single
        })
      }
    return (
        <div >
            
            {
                userSiteData.map((single)=><>
                <div className="m-5 border-2 border-black" onClick={()=>handleClick(single)}>
              
                <img src={single.image} alt="" />
                <p className='text-center'>{single.name}</p>
               
                </div>
                </>)
            }
        </div>
    );
};

export default SiteList;