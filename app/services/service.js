import axios from 'axios';
import serverConfig from '../../server/config';

const baseURL = `http://${serverConfig.HOST}:${serverConfig.PORT}/`;

export const fetchItems = (offset, limit) => axios.get(baseURL + 'data', {
    params: {
        start: offset,
        limit: limit
    }
});

export const fetchItem = (id) => axios.get(`${baseURL}item/${id}/data`);
