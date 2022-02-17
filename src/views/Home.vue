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
        <Tab title="On TV" class="d-flex">
          <CardBanner
            v-for="(movie, index) in popularMovies"
            :key="index"
            :title="movie.title"
            :description="movie.release_date"
            :image="movie.poster_path"
            :rate="movie.vote_average * 10"
          />
        </Tab>
        <Tab title="For Rent" class="d-flex">
          <CardBanner
            v-for="(movie, index) in popularMovies"
            :key="index"
            :title="movie.title"
            :description="movie.release_date"
            :image="movie.poster_path"
            :rate="movie.vote_average * 10"
          />
        </Tab>
        <Tab title="In Theaters" class="d-flex">
          <CardBanner
            v-for="(movie, index) in popularMovies"
            :key="index"
            :title="movie.title"
            :description="movie.release_date"
            :image="movie.poster_path"
            :rate="movie.vote_average * 10"
          />
        </Tab>
      </TabSwitcher>
    </section>
    <section class="mt-5">
      <TabSwitcher title="Free For Watch">
        <Tab title="Movies" class="d-flex" selected>
          <CardBanner
            v-for="(movie, index) in popularMovies"
            :key="index"
            :title="movie.title"
            :description="movie.release_date"
            :image="movie.poster_path"
            :rate="movie.vote_average * 10"
          />
        </Tab>
        <Tab title="TV" class="d-flex">
          <CardBanner
            v-for="(movie, index) in popularMovies"
            :key="index"
            :title="movie.title"
            :description="movie.release_date"
            :image="movie.poster_path"
            :rate="movie.vote_average * 10"
          />
        </Tab>
      </TabSwitcher>
    </section>
    <section class="mt-5">
      <TabSwitcher title="Last Trailers" :background="banner.jpg" invertColors>
        <Tab title="Streaming" class="d-flex" selected> </Tab>
        <Tab title="On TV" class="d-flex"> </Tab>
        <Tab title="For Rent" class="d-flex"> </Tab>
        <Tab title="In Theaters" class="d-flex"> </Tab>
      </TabSwitcher>
    </section>
    <section class="mt-5">
      <TabSwitcher title="Tendencies" :background="banner.svg">
        <Tab title="Now" class="d-flex" selected>
          <CardBanner
            v-for="(movie, index) in popularMovies"
            :key="index"
            :title="movie.title"
            :description="movie.release_date"
            :image="movie.poster_path"
            :rate="movie.vote_average * 10"
          />
        </Tab>
        <Tab title="This Week" class="d-flex">
          <CardBanner
            v-for="(movie, index) in popularMovies"
            :key="index"
            :title="movie.title"
            :description="movie.release_date"
            :image="movie.poster_path"
            :rate="movie.vote_average * 10"
          />
        </Tab>
        <template #background="{ background }">
          <BetterImage :image="background" height="55%" :overlayOpacity="0" />
        </template>
      </TabSwitcher>
    </section>
  </div>
</template>

<script>
import layout from '@/mixins/layout';
import customs from '@/mixins/customs';
import cards from '@/mixins/cards';
import persons_banner from '@assets/banner/jpg/persons_banner.jpg';
import sond_wave_banner from '@assets/banner/svg/sond_wave_banner.svg';

export default {
  mixins: [layout, customs, cards],
  computed: {
    popularMovies() {
      return this.$store.getters['movies/popular'];
    },
    banner() {
      return {
        jpg: persons_banner,
        svg: sond_wave_banner,
      };
    },
  },
  mounted() {
    this.$store.dispatch('movies/getPopular');
  },
};
</script>
