<template>
  <div
    class="navbar"
    @click="openMusicListPage"
  ></div>
</template>

<script>
export default {

}
</script>

<style>
.navbar {
  width: 100%;
  height: 150px;
  border-radius: 10px;
  top: 45px;
  display: flex;
  overflow-x: scroll;
  animation: loop 12s infinite linear;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  animation-direction: alternate;
}
@keyframes loop {
  0% {
    background-image: url("http://47.104.221.137/static/images/WechatIMG1042.jpeg");
  }

  4% {
    background-image: url("http://47.104.221.137/static/images/WechatIMG1045.jpeg");
  }

  36% {
    background-image: url("http://47.104.221.137/static/images/WechatIMG1048.jpeg");
  }

  68% {
    background-image: url("http://47.104.221.137/static/images/WechatIMG1051.jpeg");
  }

  100% {
    background-image: url("http://47.104.221.137/static/images/WechatIMG1046.jpeg");
  }
}
</style>
