import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burgerbuilder-77120.firebaseio.com/'
})

export default instance;