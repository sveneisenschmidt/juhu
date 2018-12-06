<template>
  <div class="view-profile">
    <ComponentPlayer/>
  </div>
</template>

<script>
import ComponentPlayer from './../components/Player.vue'

export default {
  name: 'Player',
  components: {
    ComponentPlayer,
  },
};
</script>
