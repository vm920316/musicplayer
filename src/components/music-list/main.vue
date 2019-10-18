<template>
  <div class="main">
    <div class="main-photo">
      <img :src="photo">
    </div>
    <div class="main-content">
      <div class="main-title">
        {{ title }}
      </div>
      <div class="main-type">
        <div class="person-photo">
          <img :src="author && author.photo">
        </div>
        <div class="person-name">
          -{{ author && author.name }}>
        </div>
      </div>
      <div class="main-details">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'music-list',
  props: {
    title: { type: String, default() { return '' } },
    photo: { type: String },
    description: { type: String, default() { return '' } },
    author: {
      type: Object,
      default() {
        return {
          name: '',
          photo: ''
        }
      }
    }
  }
}
</script>

<style scoped>
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
.main-photo img {
  width: 100%;
  height: 100%;
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
.main-content .main-type .person-photo img {
  width: 100%;
  height: 100%;
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
</style>
