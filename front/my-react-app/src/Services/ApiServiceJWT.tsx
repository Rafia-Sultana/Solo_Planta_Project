const BASE_URL = 'http://localhost:5000';
import User from './../Interfaces/User.interface';

let authJWT:any ={
    register : async function () {},
    login: async function () {}
}

 interface RegisterResponse {
    success: boolean,
    message:string
 }

 const token: string | null =localStorage.getItem('accessToken');

 authJWT = {
    register: async (user: User): Promise<RegisterResponse> => {
		return await fetch(`${BASE_URL}/register`, {
			method: 'POST',
			credentials: 'include',
			mode: 'cors',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.catch((err) => console.log(err));
	},
	login: async (user: User): Promise<RegisterResponse> => {
		return await fetch(`${BASE_URL}/login`, {
			method: 'POST',
			credentials: 'include',
			mode: 'cors',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.catch((err) => console.log(err));
	},
    userProfile: async (): Promise<RegisterResponse> => {
		return await fetch(`${BASE_URL}/profile`, {
			method: 'GET',
			credentials: 'include',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${token}`,
			},
		})
			.then((res) => res.json())
			.catch((err) => console.log(err));
	}
 }
 export default authJWT;