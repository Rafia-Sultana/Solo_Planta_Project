import balcony from '../../../assets/images/balcony.jpg'
import living from '../../../assets/images/living.jpg'
import kitchen from '../../../assets/images/kitchen.jpg'
import bedroom from '../../../assets/images/bedroom.jpg'
import office from '../../../assets/images/office.jpg'
import terrace from '../../../assets/images/terrace2.jpg'
import { useNavigate } from 'react-router-dom'
import Icons from '../../Icons/Icons'

interface siteList {
    name: string;
    image: string
}


const SiteList = () => {

    const userSiteData = [
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
        {
            name: "Terrace",
            image: terrace
        },
    ]
    const navigate = useNavigate();
    const handleClick = (single: siteList) => {
        navigate('/light', {
            state: single
        })
    }
    return (
        <div className="">
            <p className='text-center font-bold my-5 text-xl'>Choose a Site for you...</p>

            <div className='grid grid-cols-2 gap-3 place-content-center p-5'>

                {
                    userSiteData.map((single) => <>
                        <div className="p-2" onClick={() => handleClick(single)}>

                            <img src={single.image} alt="" className='rounded-lg' />
                            <p className='text-center font-semibold'>{single.name}</p>

                        </div>
                    </>)
                }
                <Icons></Icons>
            </div>


        </div>

    );
};

export default SiteList;