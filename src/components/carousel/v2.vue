<template>
  <div
    class="carousel"
    @mouseover="mouseover"
    @mouseout="mouseout"
  >
    <div
      class="carousel-container"
      :style="{ left: leftPx + '%' }"
    >
      <img
        v-for="(image, i) in carouselImages"
        :key="i"
        :data-index="i"
        :src="image"
        alt=""
      >
    </div>
    <div
      class="dot-container"
      @click="clickDot"
    >
      <span
        class="dot"
        v-for="(dot, i) in dots"
        :key="i"
        :class="{ active: dot.isActive}"
        :data-index="i"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leftPx: 0,
      carouselImages: [
        'http://47.104.221.137/static/images/WechatIMG1042.jpeg',
        'http://47.104.221.137/static/images/WechatIMG1045.jpeg',
        'http://47.104.221.137/static/images/WechatIMG1048.jpeg',
        'http://47.104.221.137/static/images/WechatIMG1051.jpeg',
        'http://47.104.221.137/static/images/WechatIMG1046.jpeg'
      ],
      intervarinstance: null,
      currentIndex: 0
    }
  },
  mounted() {
    this.spin()
  },
  computed: {
    dots() {
      return this.carouselImages.map((item, i) => {
        return {
          index: i,
          isActive: this.currentIndex === i
        }
      })
    }
  },
  methods: {
    mouseover(e) {
      // const i = e.target.dataset.index
      clearInterval(this.intervarinstance)
      this.intervarinstance = null
    },
    mouseout() {
      this.spin()
    },
    spin() {
      this.intervarinstance = setInterval(() => {
        let leftPx = this.leftPx - 100
        if (leftPx <= -500) {
          leftPx = 0
        }
        this.leftPx = leftPx
        this.$nextTick(() => {
          this.currentIndex = Math.abs(leftPx / 100)
        })
      }, 2000)
    },
    clickDot(e) {
      const target = e.target
      if (target.tagName === 'SPAN' && [].indexOf.call(target.classList, 'dot') > -1) {
        const i = +target.dataset.index
        this.currentIndex = i
        this.leftPx = -(100 * i)
      }
    }
  }
}
</script>

<style scoped>
.carousel {
  height: 150px;
  width: 100%;
  overflow-x: hidden;
  position: relative;
  overflow-x: scroll;
}

.carousel-container {
  position: absolute;
  height: 150px;
  width: 500%;
  text-align: left;
}
.carousel-container img {
  height: 100%;
  width: 20%;
}
.carousel .dot-container {
  position: relative;
  margin: 125px auto 0px;
  width: 30%;
  display: flex;
  justify-content: space-between;
}
.dot-container .dot {
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: gray;
}
.dot-container .dot.active {
  background-color: red;
}
</style>
