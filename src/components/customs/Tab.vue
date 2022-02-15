<template>
  <div v-show="isActive">
    <slot />
  </div>
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
  mounted() {
    this.isActive = this.selected;
  },
};
</script>
