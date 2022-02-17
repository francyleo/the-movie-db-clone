<template>
  <section class="banner-section bg-primary">
    <img :src="banner" alt="Banner" class="banner-image" />
    <div class="d-flex flex-column justify-content-center w-100 h-100 p-5">
      <h2 v-if="title" class="fw-bold">{{ title }}</h2>
      <h3 v-if="description" class="fw-bold">
        {{ description }}
      </h3>
      <InputSearch
        v-if="hasSearch"
        type="text"
        placeholder="Search for a movie, tv show, person..."
        class="mt-5"
      />
    </div>
  </section>
</template>

<script>
import basics from '@/mixins/basics';

import Banner from '@assets/banner/jpg/soul_banner.jpg';

export default {
  mixins: [basics],
  props: {
    title: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    hasSearch: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    banner: Banner,
  }),
};
</script>

<style lang="scss" scoped>
.banner-section {
  position: relative;
  min-height: 300px;
  max-height: 360px;
  overflow: hidden;

  > div {
    position: absolute;
    top: 0;
    left: 0;
  }
}

.banner-image {
  position: relative;
  top: 50%;
  width: 100%;
  height: 100%;
}
</style>
