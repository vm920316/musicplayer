<template>
  <div class="comment-area">
    <div
      class="item"
      v-for="(item, i) in items"
      :key="i"
    >
      <img
        class="item-pho"
        :src="require('@/assets/' + item.icon)"
      >
      <div class="item-num">
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'function-bar',
  props: {
    reviews: { type: Number },
    shares: { type: Number }
  },
  computed: {
    items() {
      return [
        { content: this.reviews, icon: 'review-icon.png' },
        { content: this.shares, icon: 'share-icon.png' },
        { content: '下载', icon: 'download-icon.png' },
        { content: '多选', icon: 'list-icon.png' }
      ]
    }
  }
}
</script>

<style scoped>
.comment-area {
  width: 90%;
  text-align: center;
  margin: 15px auto 25px;
  height: 60px;
  display: flex;
  justify-content: space-between;
}

.comment-area .item {
  width: 60px;
  height: 60px;
}
.comment-area .item .item-pho {
  width: 40px;
  height: 40px;
  margin: auto 10px;
}
.comment-area .item .item-num {
  font-size: 14px;
  color: white;
}
</style>
