const BASE_URL = 'http://localhost:5000';
import Plants from '../Interfaces/Plants.interface';

const plants: any = {
  plant: async function () {},
  plantByName: async function () {}
};

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
