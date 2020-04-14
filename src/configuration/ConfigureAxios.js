import axios from 'axios';

const configureAxios = () => {
    axios.defaults.headers.common['x-app-id'] = process.env.REACT_APP_ID;
    axios.defaults.headers.common['x-app-key'] = process.env.REACT_APP_KEY;
    axios.defaults.headers.common['x-remote-user-id'] = 0

}


export default configureAxios;