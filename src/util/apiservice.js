import axios from 'axios';

const API_BASE_URL = 'http://localhost:50080/api/';

function getPlayer(username) {
    return axios.get(`${API_BASE_URL}players/${username}`);
}

function getTransientAchievements(username) {
    return axios.get(`${API_BASE_URL}players/${username}/transient-achievements/`);
}

function getPersonalAchievements(username) {
    return axios.get(`${API_BASE_URL}players/${username}/personal-achievements/`);
}

function getPersonalActivities(username) {
    return axios.get(`${API_BASE_URL}players/${username}/personal-activities/`);
}

function getPlayers() {
    return axios.get(`${API_BASE_URL}players/`);
}

function getLeaderboard() {
    return axios.get(`${API_BASE_URL}leaderboard/`);
}

function getAchievements() {
    return axios.get(`${API_BASE_URL}achievements/`);
}

function sendAction(username, action){
    return axios.get(`${API_BASE_URL}progress/?username=${username}&action=${action}`);
}

function getRandomQuote() {
    return axios.get('https://talaikis.com/api/quotes/random/');
}

export default {
    getPlayer,
    getPlayers,
    getLeaderboard,
    getAchievements,
    sendAction,
    getRandomQuote,
    getTransientAchievements,
    getPersonalActivities,
    getPersonalAchievements
};
