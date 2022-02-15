<template>
  <div class="container text-white">
    <Banner
      title="Welcome."
      description="Millions of movies, TV shows and people to discover. Explore now."
      hasSearch
    />
    <section class="mt-5">
      <TabSwitcher title="What's Popular">
        <Tab title="Streaming" class="d-flex" selected>
          <CardBanner
            v-for="(movie, index) in popularMovies"
            :key="index"
            :title="movie.title"
            :description="movie.release_date"
            :image="movie.poster_path"
            :rate="movie.vote_average * 10"
          />
        </Tab>
        <Tab title="On TV">
          <h1 class="text-black">On TV</h1>
        </Tab>
        <Tab title="For Rent">
          <h1 class="text-black">For Rent</h1>
        </Tab>
        <Tab title="In Theaters">
          <h1 class="text-black">In Theaters</h1>
        </Tab>
      </TabSwitcher>
    </section>
  </div>
</template>

<script>
import layout from '@/mixins/layout';
import customs from '@/mixins/customs';
import cards from '@/mixins/cards';

export default {
  mixins: [layout, customs, cards],
  computed: {
    popularMovies() {
      return this.$store.getters['movies/popular'];
    },
  },
  mounted() {
    this.$store.dispatch('movies/getPopular');
  },
};
</script>
