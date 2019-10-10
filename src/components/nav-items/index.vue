<template>
  <div class="nav-items">
      <NavItem v-for="(item, index) in navItems" :key="index" v-bind:url="item.url" v-bind:name="item.name"></NavItem>

      <!-- <template v-for="(item, index) in navItems">
        <NavItem  :key="index" v-bind:url="item.url" v-bind:name="item.name"></NavItem>
      </template> -->

      <!-- <div class="nav-item">
        <div class="item-pho"></div>
        <span class="item-name">每日推荐</span>
      </div>
      <div class="nav-item">
        <div class="item-pho"></div>
        <span class="item-name">歌单</span>
      </div>
      <div class="nav-item">
        <div class="item-pho"></div>
        <span class="item-name">排行榜</span>
      </div>
      <div class="nav-item">
        <div class="item-pho"></div>
        <span class="item-name">电台</span>
      </div>
      <div class="nav-item">
        <div class="item-pho"></div>
        <span class="item-name">直播</span>
      </div> -->
    </div>
</template>

<script>
import NavItem1 from '@/components/nav-items/nav-item'
export default {
    components: {
        NavItem: NavItem1
    },
    props: {
        navItems: {
            type: Array
        }
    }
}
</script>

<style>
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
  background-color: pink;
  margin: 0 auto 5px;
}
.nav-items .nav-item .item-name {
  font-size: 12px;
}
</style>