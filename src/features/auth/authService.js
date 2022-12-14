import axios from 'axios'

const API_URL = 'http://localhost:5000/api/user/'

const register = async (userData) => {
    const response = await axios.post(API_URL + 'register',userData)
     if(response.data) {
        localStorage.setItem('profile',JSON.stringify(response.data))
     }
     return response.data
}

const login = async (userData) => {
    const response = await axios.post(API_URL + 'login',userData)

    if(response.data){
        localStorage.setItem('profile', JSON.stringify(response.data))
    }
    return response.data
}

const logout = () => {
    localStorage.removeItem('profile')
}

const authService = {
    register,
    login,
    logout
}

export default authService