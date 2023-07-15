import { useNavigate } from "react-router-dom";
import { TfiPlus } from 'react-icons/tfi'
import Icons from "../../Icons/Icons";
const AddSite = () => {
    const navigate = useNavigate()

    const handleAddSite = () => {
        navigate('/siteList')
    }
    return (
        <div className="fixed bottom-4 right-4">


            <button
                onClick={handleAddSite}
                className="primaryBackground rounded-full p-4 mb-16 white">
                <TfiPlus size={27} />
            </button>
            <Icons />
        </div>
    );
};

export default AddSite;