<template>
  <div class="select">
    <span class="select-introduction">原创精选：{{ title }}</span>
    <div class="select-content">
      <div class="select-content-pho">
        <img
          :src="image"
          alt="loading"
        >
      </div>
      <div class="select-between">
        <span class="select-content-name">{{ content }}</span>
        <div class="select-person-photo"></div>
      </div>
    </div>
    <div class="comment">
      <div class="select-comment-area">
        <span class="select-comment">点赞：{{ likes }}</span>
        <span class="select-comment">评论：{{ reviews }}</span>
      </div>
      <div class="select-comment-more">
        ...
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cloud-counrty-selected',
  props: {
    title: {
      type: String
    },
    content: {
      type: String
    },
    likes: {
      type: Number
    },
    reviews: {
      type: Number
    },
    image: {
      type: String
    }
  }
}
</script>

<style scoped>
/* .select {
  margin: 0px;
} */
.select-introduction {
  display: block;
  height: 40px;
  line-height: 40px;
  color: rgb(199, 199, 199);
  text-align: left;
  font-size: 14px;
  margin-top: -15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.select-content {
  height: 200px;
  background-color: rgb(240, 240, 240);
  border-radius: 10px;
}
.select-content-pho {
  height: 160px;
  background-color: pink;
  border-radius: 10px 10px 0 0;
}
.select-content-pho img {
  height: 100%;
  width: 100%;
  border-radius: 10px 10px 0 0;
}
.select-between {
  display: flex;
  justify-content: space-between;
}
.select-content-name {
  display: block;
  font-size: 16px;
  width: 70%;
  line-height: 40px;
  text-align: left;
  margin-left: 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.select-person-photo {
  width: 30px;
  height: 30px;
  background-color: pink;
  border-radius: 15px;
  line-height: 40px;
  margin: 5px 10px 5px 0px;
}

.comment {
  height: 40px;
  display: flex;
  justify-content: space-between;
}
.select-comment-area {
  display: flex;
  justify-content: space-between;
  width: 60%;
}
.select-comment {
  line-height: 40px;
  font-size: 14px;
  color: rgb(199, 199, 199);
  display: block;
  width: 50%;
  text-align: left;
}
.select-comment-more {
  font-size: 20px;
  color: rgb(199, 199, 199);
  display: block;
  transform: rotate(90deg);
  -ms-transform: rotate(90deg); /* IE 9 */
  -moz-transform: rotate(90deg); /* Firefox */
  -webkit-transform: rotate(90deg); /* Safari 和 Chrome */
  -o-transform: rotate(90deg); /* Opera */
}
</style>
