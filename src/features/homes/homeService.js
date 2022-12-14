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

const updatePosts = async (payload) => {
    const response = await axios.patch(API_URL+`update/${payload.currentId}`,payload.homeData)
    console.log("hello",'id:',payload.currentId, "homedata: ",payload.homeData)
    return response.data
}

const finduserPosts = async (userId) => {
    const response  = await axios.get(API_URL + `userposts/${userId}`)
    return response.data
}
const findHomebyid = async(id) => {
    const response = await axios.get(API_URL + `findbyid/${id}`)
    return response.data
}

const deleteHome = async (homeId) => {
    const response = await axios.delete(API_URL + `delete/${homeId}`)
    return response.data
}



export const homeService = {
    createHome,
    getHomes,
    updatePosts,
    findHomebyid,
    finduserPosts,
    deleteHome
}