import { useNavigate } from "react-router-dom";

const AddPlant = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/find')
    }
    return (
        <div className="fixed bottom-4 right-4">
            <button
                onClick={handleClick}
                className="primaryBackground rounded-lg text-white py-3 px-4">
                Add Plant</button>
        </div>

    );
};

export default AddPlant;