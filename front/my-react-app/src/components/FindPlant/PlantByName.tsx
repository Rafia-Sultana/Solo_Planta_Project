import React from 'react';
import PlantList from './PlantList';
interface plantProps {
  PlantByName: [];
}

const PlantByName: React.FC<plantProps> = (props) => {
//   console.log(props.PlantByName);
  const arrayPropsPlantByName = props.PlantByName;
  return (
    <div>
      {/* <h2> Plants</h2> */}

      {arrayPropsPlantByName.map((plant: any) => 
      <>
      <PlantList plant={plant} plantList={undefined}/>
      </>
      
      )}
    </div>
  );
};

export default PlantByName;
