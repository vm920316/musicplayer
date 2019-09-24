<template>
  <div class="home">
    我的页面
    <br>
    <input type="button" value="退出登录" @click="logout">
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    logout() {
      this.$ls.remove('token')
      this.$router.push({
        name: 'login'
      })
    }
  }
}
</script>
