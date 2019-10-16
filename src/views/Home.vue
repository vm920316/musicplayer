<template>
  <div class="home">
    我的页面
    <br>
    <input
      type="button"
      :value="$t(&quot;logout-button-content&quot;)"
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
