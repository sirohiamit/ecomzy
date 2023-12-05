import { api_url } from "./config";
import axios from 'axios';

const instance = axios.create({
    baseURL: api_url,
    headers: {},
    method: 'get'
})

instance.interceptors.response.use((res)=> res.data)

export default instance;