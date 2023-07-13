const BASE_URL = 'http://localhost:5000';


let addUserInfo: any = {
    userInfo: async function () { },

}
addUserInfo.userInfo = async (previousData: any): Promise<void> => {

    return await fetch(`${BASE_URL}/userinfo`, {
        method: 'POST',
        credentials: 'include',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(previousData),
    })
        .then((res) => res.json())
        .catch((err) => console.log(err));
}


export default addUserInfo;