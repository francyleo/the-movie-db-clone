<template>
  <div class="container text-white">
    <Banner
      title="Welcome."
      description="Millions of movies, TV shows and people to discover. Explore now."
      hasSearch
    />
  </div>
</template>

<script>
import layout from '@/mixins/layout';

export default {
  mixins: [layout],
};
</script>

<style lang="scss" scoped></style>
