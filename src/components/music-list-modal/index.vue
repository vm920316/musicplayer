<template>
  <div
    @click="close"
    v-if="innerOpen"
    class="m-modal"
  >
    <div class="modal-baffle"></div>
    <div class="modal-content">
      <slot>
      </slot>
    </div>
    <div class="modal-footer">
      <input
        type="button"
        class="close"
        :value="$t('close')"
        @click="close"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'm-modal',
  props: {
    open: {
      type: Boolean
    }
  },
  data() {
    return {
      innerOpen: false
    }
  },
  methods: {
    close() {
      this.innerOpen = false
      this.$emit('close')
    }
  },
  watch: {
    open: {
      immediate: true,
      handler(val) {
        this.innerOpen = val
      }
    }
  }
}
</script>

<style>
.m-modal {
  z-index: 2;
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 100%;
}
.modal-baffle {
  height: 20%;
}
.modal-content {
  background-color: white;
  margin: 0px auto;
  width: 100%;
  height: 70%;
  overflow-y: scroll;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
}
.modal-footer {
  position: fixed;
  bottom: 50px;
  width: 100%;
  text-align: center;
  height: 100px;
  background-color: white;
}
.modal-footer .close {
  font-size: 30px;
  font-weight: 100;
  border: none;
  width: 100%;
  background-color: white;
}
</style>
