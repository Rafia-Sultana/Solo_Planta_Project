

const AddSite = () => {
    const handleAddSite =()=>{
        console.log('clicked');
    }
    return (
        <div>
            <button 
            onClick={handleAddSite}
            className="primaryBackground rounded-lg p-3 white">
            Add Site</button>
        </div>
    );
};

export default AddSite;