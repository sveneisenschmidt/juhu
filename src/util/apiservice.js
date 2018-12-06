import axios from 'axios';

const API_BASE_URL = 'http://70c755fc.ngrok.io/api/';

function getPlayers(username = '') {
    return axios.get(`${API_BASE_URL}players/${username}`);
}

function getLeaderboard() {
    return axios.get(`${API_BASE_URL}leaderboard/`);
}

function getAchievements() {
    return axios.get(`${API_BASE_URL}achievements/`);
}

export default {
    getPlayers,
    getLeaderboard,
    getAchievements
};
