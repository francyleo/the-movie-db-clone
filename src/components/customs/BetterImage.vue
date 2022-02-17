<template>
  <div ref="container" class="better-image-container mt-auto">
    <img ref="image" :src="image" :alt="alt" />
    <div ref="overlay" class="better-image-overlay"></div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: [String, Function],
      require: true,
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '100%',
    },
    alt: {
      type: String,
      default: '',
    },
    z_index: {
      type: Number,
      default: 0,
    },
    overlayColor: {
      type: String,
      default: 'var(--bs-primary)',
    },
    overlayOpacity: {
      type: Number,
      default: 0.75,
    },
  },
  mounted() {
    const img_ref = this.$refs['image'];
    const overlay_ref = this.$refs['overlay'];
    const container_ref = this.$refs['container'];

    container_ref.style.height = this.height;
    container_ref.style.width = this.width;
    img_ref.style.zIndex = this.z_index;
    overlay_ref.style.zIndex = this.z_index + 1;
    overlay_ref.style.backgroundColor = this.overlayColor;
    overlay_ref.style.opacity = this.overlayOpacity;
  },
};
</script>

<style lang="scss" scoped>
.better-image-container {
  position: relative;
  width: 100%;
  height: 100%;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 10px;
    object-fit: cover;
  }

  .better-image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
