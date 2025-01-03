import axios from "axios";

const USER_API = 'http://127.0.0.1:5000/api/servers'

export const createServer = async(serverData)=>{
    try {
        console.log(serverData)
        const response = await axios.post(`${USER_API}/createServer/${serverData}`, serverData);
        return response.data;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
}


export const getServer = async(serverID)=>{
    try {
        console.log(serverID)
        console.log(`${USER_API}/getUser/${serverID}`)
        const response = await axios.get(`${USER_API}/getServer/${serverID}`);
        return response.data;
    } catch (error) {
        console.error("Error getting server:", error);
        throw error;
    }
}

export const joinServerUsingCode = async (username,joiningCode)=>{
    try {
        console.log(username)
        const response = await axios.post(`${USER_API}/joinServer/${username}/${joiningCode}`);
        return response.data
    } catch (error) {
        console.log(error)
    }
}
