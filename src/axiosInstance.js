import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://savingpro-6e70c.firebaseio.com/'
});

export default instance;