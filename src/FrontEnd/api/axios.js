import axios from 'axios';

export default axios.create({
    baseURL: 'https://doorstep-services-website-liard.vercel.app/api'
});