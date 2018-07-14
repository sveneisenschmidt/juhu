
<template>
  <div id="app">
    <div id="nav">
      <ul class="list-reset flex py-2 px-4">
        <li class="mr-6">
          <router-link class="text-blue hover:text-blue-darker" to="/">Leaderboard</router-link>
        </li>
        <li class="mr-6">
          <router-link class="text-blue hover:text-blue-darker" to="/achievements">Achievements</router-link>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>
