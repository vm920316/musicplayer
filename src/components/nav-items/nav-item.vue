<template>
  <div class="nav-item">
    <!-- <div class="item-pho"> -->

    <img
      class="item-pho"
      :src="require('@/assets/' + url)"
    >
    <!-- </div> -->
    <span class="item-name">{{ name }}</span>
    <!-- <span class="item-name">meirituijian</span> -->
  </div>
</template>

<script>
export default {
  name: 'nav-item',
  props: {
    url: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
</style>
