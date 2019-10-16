<template>
  <div class="yuncun">
    <span class="yuncun-title">{{ title }}</span>
    <span class="yuncun-refresh">刷新内容</span>
  </div>
</template>

<script>
export default {
  name: 'cloud-country-header',
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style>
.yuncun {
  display: flex;
  justify-content: space-between;
  height: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(199, 199, 199);
}
.yuncun-title {
  display: block;
  font-size: 14px;
  line-height: 20px;
}
.yuncun-refresh {
  display: block;
  font-size: 14px;
  line-height: 20px;
}
</style>
