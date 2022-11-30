import axios from "axios";

const API_URL = 'http://localhost:5000/api/home/'

const createHome = async (homeData,token) => {
    const config = {
        headers:{
            authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL + 'create',homeData,config)
    return response.data
}

const getHomes =  async () => {
    const response = await axios.get(API_URL + 'getHomes')
    return response.data
}

const deleteHome = async (homeId,token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token},`
        }
    }
    const response = await axios.delete(`${API_URL}/${homeId}`,config)
    return response.data
}

export const homeService = {
    createHome,
    getHomes,
    deleteHome
}