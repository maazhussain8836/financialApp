import axios from "axios";

const instance = axios.create({
    baseURL: 'https://designprosusa.com/financial_app/api/'
})

export default instance;