import Vue from 'vue';
import Router from 'vue-router';

import Leaderboard from './views/Leaderboard.vue';
import Achievements from './views/Achievements.vue';
import Player from './views/Player.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'leaderboard',
      component: Leaderboard,
    },
    {
      path: '/achievements',
      name: 'achievements',
      component: Achievements,
    },
    {
      path: '/player/:name',
      name: 'player',
      component: Player,
    },
  ],
});
