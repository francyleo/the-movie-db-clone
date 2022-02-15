<template>
  <div class="container text-white">
    <Banner
      title="Welcome."
      description="Millions of movies, TV shows and people to discover. Explore now."
      hasSearch
    />
    <section class="mt-5">
      <tab-switcher
        title="What's Popular"
        :tabs="['Streaming', 'On TV', 'For Rent', 'In Theaters']"
      >
        <template v-slot:tabs>
          <CardBanner
            v-for="index in 10"
            :key="index"
            title="The Walking Dead"
            description="Oct 31, 2021"
            image="https://via.placeholder.com/150x225"
          />
        </template>
      </tab-switcher>
    </section>
  </div>
</template>

<script>
import layout from '@/mixins/layout';
import customs from '@/mixins/customs';
import cards from '@/mixins/cards';

export default {
  mixins: [layout, customs, cards],
};
</script>

<style lang="scss" scoped></style>
