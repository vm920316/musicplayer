<template>
  <div class="footer">
    <div
      class="footer-item"
      v-for="(nav, index) in navList"
      :key="index"
      @click="redirect(nav)"
    >
      <div class="footer-pho"></div>
      <span class="footer-name">{{ nav.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gl-footer',
  data() {
    return {
      navList: [{
        name: '发现',
        url: '/find'
      }, {
        name: '视频'
      }, {
        name: '我的',
        url: '/'
      }, {
        name: '云村'
      }, {
        name: '账号'
      }]
    }
  },
  methods: {
    redirect(nav) {
      if (nav.url && this.$route.path !== nav.url) {
        this.$router.push(nav.url)
      }
    }
  }
}
</script>

<style scoped>
.footer {
  width: 100%;
  height: 70px;
  background-color: rgb(240, 240, 240);
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: space-between;
}
.footer-item {
  width: 20%;
}
.footer-pho {
  width: 30px;
  height: 30px;
  background-color: pink;
  border-radius: 15px;
  text-align: center;
  margin: 5px auto;
}
.footer-name {
  display: block;
  font-size: 11px;
  text-align: center;
}
</style>
