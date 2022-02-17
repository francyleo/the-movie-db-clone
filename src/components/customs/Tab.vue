<template>
  <transition name="fade">
    <div v-if="isActive">
      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    isActive: false,
  }),
  created() {
    this.isActive = this.selected;
    this.$parent.registerTab(this);
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease-in-out;
}

.fade-enter-to {
  position: absolute;
  opacity: 0;
  z-index: 0;
}
.fade-leave-to {
  position: relative;
  opacity: 1;
  z-index: 1;
}
.fade-enter-from {
  position: relative;
  opacity: 1;
  z-index: 1;
}
.fade-leave-from {
  position: absolute;
  opacity: 0;
  z-index: 0;
}
</style>
