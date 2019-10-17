<template>
  <div id="app">
    <template v-if="!openPlayDialog">
      <router-view />
    </template>
    <play-dialog v-show="openPlayDialog"></play-dialog>
  </div>
</template>

<script>
import PlayDialog from '@/components/play'
export default {
  name: 'app',
  components: {
    PlayDialog: PlayDialog
  },
  computed: {
    openPlayDialog() {
      return this.$store.state.Play.open
    }
  }
}
</script>
<style>
* {
  margin: 0px;
  padding: 0px;
}
</style>
