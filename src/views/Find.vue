<template>
  <div
    class="find"
    v-if="!showFindSearch"
  >
    <div class="head">
      <div class="head-MusicRecognition"></div>
      <input
        type="text"
        placeholder
        name="head-search"
        id="head-search"
        @click="openFindSearch"
      />
      <div class="head-MusicPlaying"></div>
    </div>

    <div class="find-content">
      <div class="navbar"></div>

      <NavItems :nav-items="navItems"></NavItems>

      <div style="width:100%;border-bottom:1px solid rgb(199, 199, 199);margin:0;"></div>

      <div class="main">
        <div class="main-title">
          <div class="main-title-name">
            <span class="letter-space">新碟</span>
            <span class="letter-split">|</span>
            <span class="letter-space">新歌</span>
          </div>
          <input
            type="button"
            value="更多新碟"
            id="main-button"
          />
        </div>
        <div class="main-content">
          <div class="main-content-item">
            <div class="main-content-item-pho"></div>
            <span class="main-content-item-music">童话</span>
            <span class="main-content-item-name">演唱者：光良</span>
          </div>
          <div class="main-content-item">
            <div class="main-content-item-pho"></div>
            <span class="main-content-item-music">逍遥叹（仙剑奇侠传）</span>
            <span class="main-content-item-name">演唱者：胡歌</span>
          </div>
          <div class="main-content-item">
            <div class="main-content-item-pho"></div>
            <span class="main-content-item-music">时光诛仙</span>
            <span class="main-content-item-name">演唱者：任贤齐</span>
          </div>
        </div>
      </div>

      <div style="width:100%;border-bottom:8px solid rgb(240, 240, 240);margin-top:6px;"></div>

      <div class="main">
        <div class="main-title">
          <!-- <div class="main-title-name"> -->
          <span class="letter-space">推荐歌单</span>
          <!-- </div> -->
          <input
            type="button"
            value="歌单广场"
            id="main-button"
          />
        </div>
        <div class="main-content">
          <div class="main-content-item">
            <div class="main-content-item-pho"></div>
            <span class="main-content-item-music">童话</span>
            <span class="main-content-item-name">演唱者：光良</span>
          </div>
          <div class="main-content-item">
            <div class="main-content-item-pho"></div>
            <span class="main-content-item-music">逍遥叹（仙剑奇侠传）</span>
            <span class="main-content-item-name">演唱者：胡歌</span>
          </div>
          <div class="main-content-item">
            <div class="main-content-item-pho"></div>
            <span class="main-content-item-music">时光诛仙</span>
            <span class="main-content-item-name">演唱者：任贤齐</span>
          </div>
        </div>
        <div class="main-content">
          <div class="main-content-item">
            <div class="main-content-item-pho"></div>
            <span class="main-content-item-music">童话</span>
            <span class="main-content-item-name">演唱者：光良</span>
          </div>
          <div class="main-content-item">
            <div class="main-content-item-pho"></div>
            <span class="main-content-item-music">逍遥叹（仙剑奇侠传）</span>
            <span class="main-content-item-name">演唱者：胡歌</span>
          </div>
          <div class="main-content-item">
            <div class="main-content-item-pho"></div>
            <span class="main-content-item-music">时光诛仙</span>
            <span class="main-content-item-name">演唱者：任贤齐</span>
          </div>
        </div>
      </div>

      <div style="width:100%;border-bottom:8px solid rgb(240, 240, 240);margin-top:6px;"></div>

      <div class="yuncun">
        <span class="yuncun-title">云村精选</span>
        <span class="yuncun-refresh">刷新内容</span>
      </div>

      <div class="select">
        <span class="select-introduction">原创精选：好听的古风歌曲</span>
        <div class="select-content">
          <div class="select-content-pho"></div>
          <div class="select-between">
            <span class="select-content-name">Lao-干妈-生死江湖</span>
            <div class="select-person-photo"></div>
          </div>
        </div>
        <div class="comment">
          <div class="select-comment-area">
            <span class="select-comment">点赞：3168</span>
            <span class="select-comment">评论：493</span>
          </div>
          <div class="select-comment-more">
            ...
          </div>
        </div>
      </div>

      <div style="width:100%;border-bottom:8px solid rgb(240, 240, 240);margin-top:6px;"></div>

      <div class="select">
        <span class="select-introduction">原创精选：好听的古风歌曲</span>
        <div class="select-content">
          <div class="select-content-pho"></div>
          <div class="select-between">
            <span class="select-content-name">Lao-干妈-生死江湖</span>
            <div class="select-person-photo"></div>
          </div>
        </div>
        <div class="comment">
          <div class="select-comment-area">
            <span class="select-comment">点赞：3168</span>
            <span class="select-comment">评论：493</span>
          </div>
          <div class="select-comment-more">
            ...
          </div>
        </div>
      </div>

      <div style="width:100%;border-bottom:8px solid rgb(240, 240, 240);margin-top:6px;"></div>
    </div>

    <div class="footer">
      <div class="footer-item">
        <div class="footer-pho"></div>
        <span class="footer-name">发现</span>
      </div>

      <div class="footer-item">
        <div class="footer-pho"></div>
        <span class="footer-name">视频</span>
      </div>
      <div class="footer-item">
        <div class="footer-pho"></div>
        <span class="footer-name">我的</span>
      </div>
      <div class="footer-item">
        <div class="footer-pho"></div>
        <span class="footer-name">云村</span>
      </div>
      <div class="footer-item">
        <div class="footer-pho"></div>
        <span class="footer-name">账号</span>
      </div>
    </div>
  </div>
  <find-search
    v-else
    @close="closeFindSearch"
  ></find-search>
</template>

<script>
import FindSearch from '@/components/find-search'
import NavItems from '@/components/nav-items/index'
export default {
  name: 'find',
  components: {
    NavItems: NavItems,
    FindSearch: FindSearch
  },
  data () {
    return {
      navItems: [
        {
          url: '@/assets/logo.png',
          name: '每日推荐'
        },
        {
          url: '',
          name: '歌单'
        },
        {
          url: '',
          name: '排行榜'
        },
        {
          url: '',
          name: '电台'
        },
        {
          url: '',
          name: '直播'
        }
      ],
      showFindSearch: false
    }
  },
  methods: {
    openFindSearch() {
      this.showFindSearch = true
    },
    closeFindSearch() {
      this.showFindSearch = false
    }
  }
}
</script>

<style scoped>
/* .find {
  width: 100%;
  height: 100%;
  text-align: center;
  margin: 10px auto 0px;
} */
.find-content {
  margin: 70px auto;
}
.find-content > div {
  width: 90%;
  text-align: center;
  margin: 15px auto 0px;
}

.head {
  width: 100%;
  height: 40px;
  display: flex;
  padding: 15px 0 5px;
  position: fixed;
  top: 0px;
  background-color: white;
}

.head-MusicRecognition,
.head-MusicPlaying {
  width: 40px;
  height: 40px;
  background-color: pink;
  flex-shrink: 0;
}

#head-search {
  height: 40px;
  width: 100%;
  border-radius: 20px;
  background-color: rgb(240, 240, 240);
  border: 0px solid red;
  margin: 0px 10px;
}

.navbar {
  width: 100%;
  height: 150px;
  background-color: pink;
  border-radius: 10px;
  top: 45px;
}

.main-title {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
}
/* .main-title-name{display:flex;width: 50%;} */
.letter-space {
  letter-spacing: 2px;
  font-size: 12px;
  line-height: 30px;
}
.letter-split {
  margin: 0 10px;
  line-height: 30px;
}
#main-button {
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
  justify-content: space-between;
  margin-top: 15px;
}
.main-content-item {
  width: 106px;
  height: 160px;
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
.footer {
  width: 100%;
  height: 70px;
  background-color: rgb(240, 240, 240);
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: space-between;
}
.footer-item {
  width: 20%;
}
.footer-pho {
  width: 30px;
  height: 30px;
  background-color: pink;
  border-radius: 15px;
  text-align: center;
  margin: 5px auto;
}
.footer-name {
  display: block;
  font-size: 11px;
  text-align: center;
}
</style>
