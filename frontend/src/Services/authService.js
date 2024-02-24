import axios from 'axios'
import {toast} from 'react-toastify'
const backendBaseUrl = process.env.REACT_APP_BACKEND_BASE_URL
console.log(backendBaseUrl);

export const Register = async (registrationData) => {
    try {
        const response = await axios.post(`${backendBaseUrl}/register`,registrationData)
        console.log(backendBaseUrl)
        if(response) {
            toast.success(response.data.message,{autoClose:1000})
            return response.data.token;
        }
    } catch (error) {
        toast.error(error.response.data.error,{autoClose:1000})
    }
}

export const LoginUser = async (loginData) => {
    try {
        const response = await axios.post(`${backendBaseUrl}/login`,loginData)
        console.log(backendBaseUrl)
        if(response) {
            toast.success(response.data.message,{autoClose:1000})
            return response.data.token;
        }
    } catch (error) {
        toast.error(error.response.data.error,{autoClose:1000})
    }
}
