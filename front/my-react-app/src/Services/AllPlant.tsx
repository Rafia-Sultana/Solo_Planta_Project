const BASE_URL = 'http://localhost:5000';
import Plants from '../Interfaces/Plants.interface';

const plants: any = {
  plant: async function () { },
  plantByName: async function () { }
};
interface CreatePlant {
  profileId: string, singleSiteId: string, plantId: string, selectedDate: string
}

const token: string | null = localStorage.getItem('accesstoken');

plants.plant = async () => {
  return await fetch(`${BASE_URL}/getall`, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`
    }
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
plants.createPlantByUser = async (createPlant: CreatePlant): Promise<void> => {
  return await fetch(`${BASE_URL}/plantByUser`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(createPlant),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));

}
plants.plantByName = async () => {
  return await fetch(`${BASE_URL}/plantByName/:name`, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`
    }
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export default plants;
