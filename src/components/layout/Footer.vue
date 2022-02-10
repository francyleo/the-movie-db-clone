<template>
  <nav>
    <div class="container">
      <div class="d-flex justify-content-center p-80">
        <div
          class="d-flex flex-column justify-content-between align-items-end me-5"
        >
          <img :src="logo_footer" class="logo_footer" alt="TMDB Logo" />
          <b-button class="btn-white text-secondary btn-custom-footer rounded">
            JOIN THE COMMUNITY
          </b-button>
        </div>
        <div class="footer-list me-5">
          <h3 class="text-uppercase m-0">THE BASICS</h3>
          <ul>
            <li>
              <router-link to="/" class="text-white text-decoration-none">
                About TMDB
              </router-link>
            </li>
            <li>
              <router-link to="/" class="text-white text-decoration-none">
                Contact Us
              </router-link>
            </li>
            <li>
              <router-link to="/" class="text-white text-decoration-none">
                Support Forums
              </router-link>
            </li>
            <li>
              <router-link to="/" class="text-white text-decoration-none">
                API
              </router-link>
            </li>
            <li>
              <router-link to="/" class="text-white text-decoration-none">
                System Status
              </router-link>
            </li>
          </ul>
        </div>
        <div class="footer-list me-5">
          <h3 class="text-uppercase m-0">GET INVOLVED</h3>
          <ul>
            <li>
              <router-link to="/" class="text-white text-decoration-none">
                Contribution Bible
              </router-link>
            </li>
            <li>
              <router-link to="/" class="text-white text-decoration-none">
                Add New Movie
              </router-link>
            </li>
            <li>
              <router-link to="/" class="text-white text-decoration-none">
                Add New TV Show
              </router-link>
            </li>
          </ul>
        </div>
        <div class="footer-list me-5">
          <h3 class="text-uppercase m-0">Community</h3>
          <ul>
            <li>
              <router-link to="/" class="text-white text-decoration-none">
                Guidelines
              </router-link>
            </li>
            <li>
              <router-link to="/" class="text-white text-decoration-none">
                Discussions
              </router-link>
            </li>
            <li>
              <router-link to="/" class="text-white text-decoration-none">
                Leaderboard
              </router-link>
            </li>
            <li>
              <router-link to="/" class="text-white text-decoration-none">
                Twitter
              </router-link>
            </li>
          </ul>
        </div>
        <div class="footer-list">
          <h3 class="text-uppercase m-0">Legal</h3>
          <ul>
            <li>
              <router-link to="/" class="text-white text-decoration-none">
                Terms of Use
              </router-link>
            </li>
            <li>
              <router-link to="/" class="text-white text-decoration-none">
                API Terms of Use
              </router-link>
            </li>
            <li>
              <router-link to="/" class="text-white text-decoration-none">
                Privacy Policy
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <small class="d-flex justify-content-center">
      Build {{ app_version }}
    </small>
  </nav>
</template>

<script>
import LogoFooter from '@assets/logos/tmdb_footer_logo.svg';

export default {
  data: () => ({
    logo_footer: LogoFooter,
  }),
  computed: {
    app_version() {
      return `v1.0.0 (clone)`;
    },
  },
};
</script>

<style lang="scss" scoped>
.p-80 {
  padding-top: 80px;
  padding-bottom: 80px;
}

.logo_footer {
  position: relative;
  top: -30px;
  width: 130px;
  height: 94px;
  aspect-ratio: auto 130 / 94;
}

.btn-custom-footer {
  font-size: 1.87rem;
  padding: 8px 16px;
  font-weight: bold;
}

.footer-list {
  h3 {
    font-weight: bold;
    font-size: 2.1rem;
    line-height: 3rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      font-size: 2rem;
      line-height: 2.6rem;
    }
  }
}

small {
  font-size: 1.12rem;
  opacity: 0.1;
}
</style>
