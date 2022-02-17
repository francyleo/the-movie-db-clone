<template>
  <div class="container text-white">
    <Banner
      title="Welcome."
      description="Millions of movies, TV shows and people to discover. Explore now."
      hasSearch
    />
    <section class="mt-5">
      <TabSwitcher title="What's Popular">
        <Tab title="Action" class="d-flex" selected>
          <CardBanner
            v-for="(movie, index) in movies.action"
            :key="index"
            :title="movie.title"
            :description="movie.release_date"
            :image="movie.poster_path"
            :rate="movie.vote_average * 10"
          />
        </Tab>
        <Tab title="Adventure" class="d-flex">
          <CardBanner
            v-for="(movie, index) in movies.adventure"
            :key="index"
            :title="movie.title"
            :description="movie.release_date"
            :image="movie.poster_path"
            :rate="movie.vote_average * 10"
          />
        </Tab>
        <Tab title="Horror" class="d-flex">
          <CardBanner
            v-for="(movie, index) in movies.horror"
            :key="index"
            :title="movie.title"
            :description="movie.release_date"
            :image="movie.poster_path"
            :rate="movie.vote_average * 10"
          />
        </Tab>
        <Tab title="Comedy" class="d-flex">
          <CardBanner
            v-for="(movie, index) in movies.comedy"
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
        <Tab title="War" class="d-flex" selected>
          <CardBanner
            v-for="(movie, index) in movies.war"
            :key="index"
            :title="movie.title"
            :description="movie.release_date"
            :image="movie.poster_path"
            :rate="movie.vote_average * 10"
          />
        </Tab>
        <Tab title="TV" class="d-flex">
          <CardBanner
            v-for="(movie, index) in movies.family"
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
        <Tab title="Streaming" class="d-flex" selected>
          <CardBanner
            v-for="(movie, index) in movies.fantasy"
            :key="index"
            :title="movie.title"
            :description="movie.release_date"
            :image="movie.poster_path"
            :rate="movie.vote_average * 10"
            class="text-white"
          />
        </Tab>
        <Tab title="On TV" class="d-flex">
          <CardBanner
            v-for="(movie, index) in movies.horror"
            :key="index"
            :title="movie.title"
            :description="movie.release_date"
            :image="movie.poster_path"
            :rate="movie.vote_average * 10"
            class="text-white"
          />
        </Tab>
        <Tab title="For Rent" class="d-flex">
          <CardBanner
            v-for="(movie, index) in movies.comedy"
            :key="index"
            :title="movie.title"
            :description="movie.release_date"
            :image="movie.poster_path"
            :rate="movie.vote_average * 10"
            class="text-white"
          />
        </Tab>
      </TabSwitcher>
    </section>
    <section class="mt-5">
      <TabSwitcher title="Tendencies" :background="banner.svg">
        <Tab title="Now" class="d-flex" selected>
          <CardBanner
            v-for="(movie, index) in movies.family"
            :key="index"
            :title="movie.title"
            :description="movie.release_date"
            :image="movie.poster_path"
            :rate="movie.vote_average * 10"
            class="text-white"
          />
        </Tab>
        <Tab title="This Week" class="d-flex">
          <CardBanner
            v-for="(movie, index) in movies.action"
            :key="index"
            :title="movie.title"
            :description="movie.release_date"
            :image="movie.poster_path"
            :rate="movie.vote_average * 10"
            class="text-white"
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
    movies() {
      return this.$store.getters['movies/movies'];
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
