import { TfiPlus } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import Icons from "../../Icons/Icons";

const AddPlant = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/find')
    }
    return (
        <div className="fixed bottom-4 right-4">
            <button
                onClick={handleClick}
                className="primaryBackground rounded-full p-4 mb-16 white">
                <TfiPlus size={27} /></button> <Icons />
        </div>

    );
};

export default AddPlant;