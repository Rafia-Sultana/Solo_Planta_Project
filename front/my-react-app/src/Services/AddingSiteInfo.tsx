const BASE_URL = 'http://localhost:5000';

let addSitInfo: any = {
    addSite: async function () { },

}
interface RegisterResponse {
    success: boolean,
    message: string
}
interface SiteInfo {
    previous: {
        image: string,
        name: string
    },
    temparature: {
        maxValue: number,
        minValue: number
    },
    volume: number
}
const token: string | null = localStorage.getItem('accessToken');
addSitInfo = {
    addSite: async (siteInfo: SiteInfo): Promise<RegisterResponse> => {

        return await fetch(`${BASE_URL}/addsite`, {
            method: 'POST',
            credentials: 'include',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(siteInfo),
        })
            .then((res) => res.json())
            .catch((err) => console.log(err));
    },

    getSite: async (): Promise<void> => {
        return await fetch(`${BASE_URL}/allsite`,
            {
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
export default addSitInfo;