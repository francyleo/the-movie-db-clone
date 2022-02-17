<template>
  <b-navbar class="px-5 py-4" toggleable="lg" variant="primary">
    <div class="container">
      <b-navbar-brand tag="div" :to="{ name: 'Home' }">
        <div class="d-flex flex-grow-1 align-items-center">
          <img :src="logo" class="logo" alt="TMDB Logo" />
        </div>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" class="justify-content-between" is-nav>
        <b-navbar-nav class="align-items-lg-center">
          <b-nav-item :to="{ name: 'Home' }">
            <span class="nav-link-ancor">Movies</span>
          </b-nav-item>
          <b-nav-item :to="{ name: 'Home' }">
            <span class="nav-link-ancor">TV Shows</span>
          </b-nav-item>
          <b-nav-item :to="{ name: 'Home' }">
            <span class="nav-link-ancor">People</span>
          </b-nav-item>
          <b-nav-item :to="{ name: 'Home' }">
            <span class="nav-link-ancor">More</span>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="align-items-lg-center">
          <li class="text-white mx-3">
            <BIconPlus font-scale="1.2" scale="4" />
          </li>
          <b-nav-item :to="{ name: 'Home' }">
            <b-button variant="outline-secondary">PT</b-button>
          </b-nav-item>
          <b-nav-item :to="{ name: 'Home' }">
            <span class="nav-link-ancor">Login</span>
          </b-nav-item>
          <b-nav-item :to="{ name: 'Home' }">
            <span class="nav-link-ancor">Join TMDB</span>
          </b-nav-item>
          <b-nav-item :to="{ name: 'Home' }">
            <BIconSearch variant="secondary" font-scale="1.5" />
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
import Logo from '@assets/logos/svg/tmdb_logo.svg';

export default {
  data: () => ({
    logo: Logo,
  }),
};
</script>

<style lang="scss" scoped>
.logo {
  width: 100%;
  height: 24px;
  aspect-ratio: auto 154 / 24;
}

.nav-link-ancor {
  padding: 8px;
}
</style>
