<template>
  <div class="component-player">
    <h1>Player</h1>
  </div>
</template>

<script>
export default {
  name: 'Player',
  data () {
    return {
      loading: false,
      player: null,
      error: null
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      console.log(this.$route.params.name)
      console.log(Vue.http.get)
    },
  },
}
</script>