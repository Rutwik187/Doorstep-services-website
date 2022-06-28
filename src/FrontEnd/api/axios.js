import axios from 'axios';

export default axios.create({
    baseURL: 'https://door-step-services.herokuapp.com/api'
});