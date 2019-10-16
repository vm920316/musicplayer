<template>
  <div class="main">
    <div class="main-title">
      <slot></slot>
    </div>
    <div class="main-content">
      <content-item
        class="main-content-item"
        v-for="(item, i) in contentList"
        :key="i"
        :index="i"
        :song="item"
      ></content-item>
    </div>
  </div>
</template>

<script>
import ContentItem from './content-item'
export default {
  name: 'song-list',
  components: {
    ContentItem: ContentItem
  },
  props: {
    contentList: {
      type: Array,
      default() {
        return [{
          name: '',
          author: ''
        }]
      }
    }
  },
  methods: {
    needMargin(i) {
      if ((i + 1) % 3 === 0) {
        return false
      }
      if (i === this.contentList.length - 1) {
        return false
      }
      return true
    }
  }
}
</script>

<style>
.main-title {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
}
.main-button {
  border-radius: 13px;
  border: 1px solid rgb(199, 199, 199);
  width: 100px;
  height: 26px;
  background-color: transparent;
  margin: 2px 0;
  font-family: "微软雅黑";
}

.main-content {
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
}

.main-content-item {
  width: 106px;
  height: 160px;
}
</style>
