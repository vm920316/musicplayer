<template>
  <div class="home">
    我的页面
    <br>
    <input
      type="button"
      class="log-out"
      :value="$t('logout-button-content')"
      @click="logout"
    >
    <gl-footer></gl-footer>
  </div>
</template>

<script>
import { TOKEN_KEY } from '@/utils/contants'
import Footer from '@/components/footer'
export default {
  name: 'home',
  components: {
    GlFooter: Footer
  },
  methods: {
    logout () {
      this.$ls.remove(TOKEN_KEY)
      this.$router.push({
        name: 'login'
      })
    }
  }
}
</script>

<style scoped>
.home {
  text-align: center;
}
.log-out {
  background-color: slategray;
  color: red;
  width: 90%;
  margin: 30px auto;
  height: 35px;
  font-size: 20px;
  display: block;
  border-radius: 15px;
  border-style: none;
}
</style>
