<template>
  <div class="nav-items">
    <div
      class="nav-item"
      v-for="(item, index) in navItems"
      :key="index"
    >
      <!-- <div class="item-pho"> -->

      <img
        class="item-pho"
        :src="require('@/assets/' + item.url)"
      >
      <!-- </div> -->
      <span class="item-name">{{ item.name }}</span>
      <!-- <span class="item-name">meirituijian</span> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-items',
  props: {
    navItems: {
      type: Array
    }
  }
}
</script>

<style scoped>
.nav-items {
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
  padding-bottom: 20px;
  /* border-bottom: 1px solid rgb(199, 199, 199); */
}
.nav-items .nav-item {
  width: 60px;
  /* height: 100px;
  background-color: pink; */
}

.nav-items .nav-item .item-pho {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-image: linear-gradient(rgb(250, 146, 177), rgb(250, 166, 117));
  margin: 0 auto 5px;
}
.nav-items .nav-item .item-name {
  font-size: 12px;
}
</style>
