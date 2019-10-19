<template>
  <div id="app">
    <template v-if="!openPlayDialog">
      <router-view />
    </template>
    <transition name="slide-fade">
      <play-dialog v-show="openPlayDialog"></play-dialog>
    </transition>
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
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
