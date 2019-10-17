<template>
  <div id="musiclist">
    <div class="head">
      <img
        class="back"
        src="~@/assets/back-icon.png"
      >
      <div class="title">歌单</div>
      <div>
        <img
          class="more"
          src="~@/assets/more-icon.png"
        >
        <img
          class="playwhite"
          src="~@/assets/playwhite-icon.png"
        >
      </div>
    </div>
    <div class="main">
      <div class="main-photo"></div>
      <div class="main-content">
        <div class="main-title">韩语治愈|IU窝在耳朵里的阳光</div>
        <div class="main-type">
          <div class="person-photo"></div>
          <div class="person-name">-不落静修></div>
        </div>
        <div class="main-details">在模仿人类嗓音的美妙与细微方面，没有乐器能和小提琴相比较</div>
      </div>
    </div>
    <div class="comment-area">
      <div class="item">
        <div class="item-pho"></div>
        <div class="item-num">35</div>
      </div>
      <div class="item">
        <div class="item-pho"></div>
        <div class="item-num">146</div>
      </div>
      <div class="item">
        <div class="item-pho"></div>
        <div class="item-num">下载</div>
      </div>
      <div class="item">
        <div class="item-pho"></div>
        <div class="item-num">多选</div>
      </div>
    </div>
    <div class="list">
      <div>
        <div class="list-head">
          <div class="list-icon"></div>
          <div class="list-title">
            播放全部
          </div>
          <div class="list-collection">
            +收藏
          </div>
        </div>
        <div class="list-item"></div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#musiclist {
  background: linear-gradient(rgb(250, 146, 177), rgb(250, 166, 117));
  position: absolute;
  height: 100%;
  width: 100%;
}
.head {
  width: 90%;
  text-align: center;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  padding: 15px 0px;
}
.back,
.more,
.playwhite {
  width: 40px;
  height: 40px;
}
.title {
  width: 60%;
  height: 40px;
  line-height: 40px;
  letter-spacing: 1px;
  font-size: 20px;
  color: white;
  padding-left: 13px;
}
.main {
  width: 90%;
  height: 140px;
  text-align: center;
  margin: 15px auto 30px;
  display: flex;
  justify-content: space-between;
}
.main-photo {
  width: 140px;
  height: 140px;
  background-color: pink;
  border-radius: 15px;
}
.main-content {
  width: 53%;
  height: 140px;
  margin-bottom: 10px;
}
.main-content .main-title {
  height: 50px;
  font-size: 18px;
  color: white;
  text-align: left;
  letter-spacing: 2px;
  margin-bottom: 10px;
}
.main-content .main-type {
  display: flex;
  margin-bottom: 5px;
}
.main-content .main-type .person-photo {
  width: 35px;
  height: 35px;
  background-color: white;
  border-radius: 20px;
}
.main-content .main-type .person-name {
  width: 60%;
  line-height: 35px;
  letter-spacing: 2px;
  color: rgb(235, 235, 235);
}
.main-content .main-details {
  height: 40px;
  color: rgb(235, 235, 235);
  font-size: 14px;
  letter-spacing: 2px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
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
  background-color: blue;
  margin: auto 10px;
}
.comment-area .item .item-num {
  font-size: 14px;
  color: white;
}
.list {
  height: 100%;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.list > div {
  width: 90%;
  text-align: center;
  margin: 0px auto;
}
.list-head {
  display: flex;
  justify-content: space-between;
  height: 60px;
  padding-top: 5px;
}
.list-head .list-icon {
  width: 30px;
  height: 30px;
  border-radius: 20px;
  background-color: pink;
  margin-top: 5px;
}
.list-head .list-title {
  width: 50%;
  height: 30px;
  line-height: 30px;
  margin-top: 5px;
  font-size: 18px;
  letter-spacing: 2px;
  text-align: left;
}
.list-head .list-collection {
  width: 30%;
  height: 40px;
  border-radius: 20px;
  background: linear-gradient(rgb(250, 146, 177), rgb(250, 166, 117));
  line-height: 40px;
  color: white;
  font-size: 17px;
  letter-spacing: 2px;
}
.list-item {
  height: 50px;
  background-color: turquoise;
}
</style>
