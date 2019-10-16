<template>
  <div :class="{ 'main-content-item-margin': needMargin }">
    <div class="main-content-item-pho"></div>
    <span class="main-content-item-music">{{ song.name }}</span>
    <span class="main-content-item-name">演唱者：{{ song.author }}</span>
  </div>
</template>

<script>
export default {
  name: 'content-item',
  props: {
    song: {
      type: Object,
      default() {
        return {
          name: '',
          author: ''
        }
      }
    },
    index: {
      type: Number
    }
  },
  computed: {
    needMargin() {
      return (this.index + 1) % 3 !== 0
    }
  }
}
</script>

<style>
.main-content-item-margin {
  margin-right: 7px;
}
.main-content-item-pho {
  width: 106px;
  height: 106px;
  background-color: pink;
  border-radius: 10px;
}
.main-content-item-music {
  display: block;
  font-size: 14px;
  font-family: "微软雅黑";
  text-align: left;
  margin-top: 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.main-content-item-name {
  display: block;
  font-size: 12px;
  color: rgb(199, 199, 199);
  font-family: "微软雅黑";
  text-align: left;
  margin-top: 3px;
}
</style>
