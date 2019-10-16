<template>
  <div class="find-search">
    <div class="head">
      <input
        type="text"
        placeholder="我还想她-林俊杰"
        id="head-input"
        name="head-input"
      >
      <span
        @click="close"
        id="cancel-bt"
      >取消</span>
      <!-- <div id="pho"></div> -->
      <img
        id="pho"
        src="~@/assets/person-icon.png"
      >
    </div>
    <div class="main">
      <div class="advertising"></div>

      <div class="history">
        <div class="history-title">
          <span class="history-text">搜索历史</span>
          <!-- <div class="history-del"></div> -->
          <img
            class="history-del"
            src="~@/assets/delete-icon.png"
          >
        </div>
        <div class="history-items">
          <div class="history-item">
            童话
          </div>
          <div class="history-item">
            I love you 3000
          </div>
          <div class="history-item">
            胡歌：天长地久-敢不敢爱
          </div>
          <div class="history-item">
            马步摇~网络歌曲
          </div>
        </div>
      </div>

      <div>
        <div class="hot-title">
          热搜版
        </div>
        <div class="hot-item">
          <div class="hot-item-num">
            1
          </div>
          <div class="hot-item-content">
            <div class="content-title">
              <strong>桃子</strong>
            </div>
            <div class="content-text">
              这是IU写给雪梨的歌啊
            </div>
          </div>
          <div class="hot-item-like">
            3841530
          </div>
        </div>
        <div class="hot-item">
          <div class="hot-item-num">
            1
          </div>
          <div class="hot-item-content">
            <div class="content-title">
              <strong>桃子</strong>
            </div>
            <div class="content-text">
              这是IU写给雪梨的歌啊
            </div>
          </div>
          <div class="hot-item-like">
            3841530
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.find-search {
  width: 90%;
  text-align: center;
  margin: 0px auto;
}
.head {
  display: flex;
  position: fixed;
  padding: 15px 0px;
  justify-content: space-between;
  background-color: white;
  width: 90%;
}
#head-input {
  height: 40px;
  width: 200px;
  border-radius: 20px;
  background-color: rgb(240, 240, 240);
  border: 0px solid red;
  padding: 0px 0px 0px 35px;
  background-image: url("~@/assets/search-icon.png");
  background-position: 10px 10px;
  background-repeat: no-repeat;
}
#cancel-bt {
  display: block;
  font-size: 18px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  flex-shrink: 0;
}
#pho {
  width: 40px;
  height: 40px;
  /* background-color: pink; */
  flex-shrink: 0;
}

.main {
  position: relative;
  top: 70px;
}
.advertising {
  width: 100%;
  height: 60px;
  background-color: pink;
  border-radius: 15px;
}

.history {
  margin: 20px auto 40px;
}
.history-title {
  display: flex;
  justify-content: space-between;
}
.history-text {
  display: block;
  line-height: 30px;
}
.history-del {
  width: 30px;
  height: 30px;
}
.history-items {
  -ms-overflow-style: none; /* 兼容IE10+ */
  scrollbar-width: none; /* 兼容火狐 */
  overflow-x: scroll;
  white-space: nowrap;
  margin-top: 20px;
}
.history-items::-webkit-scrollbar {
  display: none; /* 兼容Safari和Chrome */
}
.history-item {
  display: inline-block; /*DIV不换行 */
  height: 30px;
  max-width: 150px;
  min-width: 60px;
  border-radius: 15px;
  line-height: 30px;
  background-color: rgb(240, 240, 240);
  margin-right: 20px;
  text-overflow: ellipsis;
  overflow: hidden; /* 隐藏过长的文本 */
  padding: 0px 10px;
}

.hot-title {
  text-align: left;
  height: 20px;
  line-height: 20px;
  margin-bottom: 25px;
}
.hot-item {
  display: flex;
  justify-content: space-between;
  height: 60px;
}
.hot-item-num {
  width: 10%;
  line-height: 60px;
  font-size: 20px;
  color: rgb(255, 0, 0);
  text-align: left;
}
.hot-item-content {
  width: 65%;
}

.content-title {
  text-align: left;
  height: 30px;
  font-size: 18px;
}
.content-text {
  text-align: left;
  height: 30px;
  color: rgb(134, 134, 134);
}
.hot-item-like {
  width: 25%;
  line-height: 60px;
  text-align: right;
}
</style>
