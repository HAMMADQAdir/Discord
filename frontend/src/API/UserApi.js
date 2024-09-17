import axios from 'axios'

const USER_API = 'http://127.0.0.1:5000/api/users'

export const createUserAndServer = async(userData)=>{
    try {
        const response = await axios.post(`${USER_API}/createUser`, userData);
        return response.data;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
}


export const getUser = async(username)=>{
    try {
        console.log(`${USER_API}/getUser/${username}`)
        const response = await axios.get(`${USER_API}/getUser/${username}`);
        return response.data;
    } catch (error) {
        console.error("Error getting user:", error);
        throw error;
    }
}

export const getUserWithEmail = async(email)=>{
    try {
        const response = await axios.get(`${USER_API}/getUserWithEmail/${email}`);
        return response.data;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
}