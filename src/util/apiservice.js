import axios from 'axios';

const API_BASE_URL = 'http://70c755fc.ngrok.io/api/';

function getPlayers() {
    return axios.get(`${API_BASE_URL}players/`);
}

export default {
    getPlayers
};
