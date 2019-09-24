<template>
  <div class="find">
    <div class="head">
      <div class="head-MusicRecognition"></div>
      <input type="text" placeholder name="head-search" id="head-search" />
      <div class="head-MusicPlaying"></div>
    </div>

    <div class="navbar"></div>

    <div class="nav-items">
      <div class="nav-item">
        <div class="item-pho"></div>
        <span class="item-name">每日推荐</span>
      </div>
      <div class="nav-item"></div>
      <div class="nav-item"></div>
      <div class="nav-item"></div>
      <div class="nav-item"></div>
    </div>

    <div></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
}

.find {
  width: 90%;
  height: 100%;
  text-align: center;
  margin: 10px auto 0px;
}

.head {
  width: 100%;
  height: 40px;
  display: flex;
  margin-bottom: 10px;
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
}

.nav-items {
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(199, 199, 199);
}
.nav-items .nav-item {
  width: 60px;
  height: 100px;
  background-color: pink;
}

.nav-items .nav-item .item-pho{
    width: 50px;
    height:50px;
    border-radius: 25px;
    background-color: green;
}
.nav-items .nav-item .item-name{font-size: 12px;}
</style>