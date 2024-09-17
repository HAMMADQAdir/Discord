import axios from 'axios'

const USER_API = 'http://127.0.0.1:5000/api/chats'

export const createUserAndServer = async(userData)=>{
    try {
        const response = await axios.post(`${USER_API}/createUser`, userData);
        return response.data;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
}


export const getChat = async(chatID)=>{
    try {
        const response = await axios.get(`${USER_API}/getChat/${chatID}`);
        return response.data;
    } catch (error) {
        console.error("Error getting chat:", error);
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