import { useNavigate } from "react-router-dom";

const AddSite = () => {
    const navigate = useNavigate()

    const handleAddSite = () => {
        navigate('/siteList')
    }
    return (
        <div className="fixed bottom-4 right-4">


            <button
                onClick={handleAddSite}
                className="primaryBackground rounded-lg p-3 white">
                Add Site</button>
        </div>
    );
};

export default AddSite;