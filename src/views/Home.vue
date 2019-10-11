<template>
  <div class="home">
    我的页面
    <br>
    <input
      type="button"
      :value="$t(&quot;logout-button-content&quot;)"
      @click="logout"
    >
  </div>
</template>

<script>
import { TOKEN_KEY } from '@/utils/contants'
export default {
  name: 'home',
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
