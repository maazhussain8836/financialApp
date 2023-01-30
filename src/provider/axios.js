import axios from "axios";

const instance = axios.create({
    baseURL: 'https://mrfapp.com/admin/api/'
})

export default instance;