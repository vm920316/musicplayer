<template>
  <div :style="{ width: width, 'border-bottom': `${borderBottomSize} solid ${borderBottomColor}`, 'margin-top': marginTop }"></div>
</template>

<script>
export default {
  name: 'horizontal-line',
  props: {
    width: {
      type: String,
      default() {
        return '100%'
      }
    },
    borderBottomColor: {
      type: String,
      default() {
        return 'rgb(240, 240, 240)'
      }
    },
    borderBottomSize: {
      type: String,
      default() {
        return '8px'
      }
    },
    marginTop: {
      type: String,
      default() {
        return '6px'
      }
    }
  }
}
</script>

<style scoped>
</style>
