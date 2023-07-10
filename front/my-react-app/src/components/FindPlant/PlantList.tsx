interface plantList {
    plant: any;
    plantList:any;
}

const PlantList:React.FC<plantList> = (props) => {
    console.log(props.plant);
    const {Common_name,Other_names,Light_ideal} = props.plant;
    return (
        <div className="card border-2 border-green-300">
            <b>{Common_name}</b>
            <p>{Other_names}</p>
            <p>{Light_ideal.split(" (")[0]}</p>
        </div>
    );
};

export default PlantList;