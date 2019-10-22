<template>
  <div
    class="carousel"
    @mouseenter="stop"
    @mouseleave="spin"
  >
    <transition-group
      class="carousel-container"
      name="list"
      tag="ul"
    >
      <li
        class="carousel-item"
        v-for="(image, i) in carouselImages"
        :key="i + '1'"
        v-show="currentIndex === i"
      >
        <img
          :src="image"
          alt=""
        >
      </li>
    </transition-group>
    <div class="dot-container">
      <span
        class="dot"
        v-for="(dot, i) in carouselImages.length"
        :key="i"
        :class="{ active: i === currentIndex}"
        @click="clickDot(i)"
        @mouseover="clickDot(i)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carouselImages: [
        'http://47.104.221.137/static/images/WechatIMG1042.jpeg',
        'http://47.104.221.137/static/images/WechatIMG1045.jpeg',
        'http://47.104.221.137/static/images/WechatIMG1048.jpeg',
        'http://47.104.221.137/static/images/WechatIMG1051.jpeg',
        'http://47.104.221.137/static/images/WechatIMG1046.jpeg'
      ],
      setIntervalInstance: null,
      currentIndex: 0
    }
  },
  methods: {
    stop() {
      clearInterval(this.setIntervalInstance)
      this.setIntervalInstance = null
    },
    spin() {
      this.setIntervalInstance = setInterval(() => {
        let ci = this.currentIndex + 1
        if (ci > this.carouselImages.length - 1) {
          ci = 0
        }
        this.currentIndex = ci
      }, 2000)
    },
    clickDot(i) {
      this.currentIndex = i
    }
  },
  mounted() {
    this.spin()
  }
}
</script>

<style>
.carousel {
  height: 150px;
  width: 100%;
  overflow: hidden;
  position: relative;
}
.carousel-container {
  width: 100%;
  height: 100%;
}
.carousel-item {
  position: absolute;
  width: 100%;
  height: 100%;
}
.carousel-item img {
  width: 100%;
  height: 100%;
}
.list-enter-to {
  transition: all 2s ease;
  transform: translateX(0);
}
.list-leave-active {
  transition: all 2s ease;
  transform: translateX(-100%);
}
.list-enter {
  transform: translateX(100%);
}
.list-leave {
  transform: translateX(0);
}
.dot-container {
  position: absolute;
  top: 120px;
  width: 100%;
  z-index: 10;
  margin: 0 auto;
  text-align: center;
}
.dot-container .dot {
  display: inline-block;
  width: 30px;
  height: 8px;
  margin: 0 3px;
  cursor: pointer;
  background-color: cadetblue;
}
.dot-container .dot.active {
  background-color: brown;
}
</style>
