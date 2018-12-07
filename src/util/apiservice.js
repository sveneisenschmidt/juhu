import axios from 'axios';

const API_BASE_URL = 'http://localhost:50080/api/';

function getPlayers(username = '') {
    return axios.get(`${API_BASE_URL}players/${username}`);
}

function getLeaderboard() {
    return axios.get(`${API_BASE_URL}leaderboard/`);
}

function getAchievements() {
    return axios.get(`${API_BASE_URL}achievements/`);
}

function postAchievements(){
    return axios.post(`${API_BASE_URL}progress/`);
}
export default {
    getPlayers,
    getLeaderboard,
    getAchievements,
    postAchievements
};
