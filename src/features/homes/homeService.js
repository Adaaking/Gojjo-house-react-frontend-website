import axios from "axios";

const API_URL = 'http://localhost:8800/api/home/'


const createHome = async (homeData,token) => {
    const config = {
        headers:{
            authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL + 'create',homeData,config)
    console.log('homedata',homeData)
    return response.data
}

const getHomes =  async () => {
    const response = await axios.get(API_URL + 'getHomes')
    return response.data
}

const updatePosts = async (id,homeData) => {
    const response = await axios.patch(API_URL+`update/${id}`,{data: homeData})

    return response.data
}

const findHomebyid = async(id) => {
    const response = await axios.get(API_URL + 'findbyid' + `/${id}`)
    return response.data
}

const deleteHome = async (homeId) => {
    const response = await axios.delete(API_URL + 'delete' + `/${homeId}`)
    return response.data
}



export const homeService = {
    createHome,
    getHomes,
    updatePosts,
    findHomebyid,
    deleteHome
}