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
              <router-link
                class="text-white text-decoration-none"
                to="/"
                v-slot="{ href, navigate }"
                custom
              >
                <a :href="href" @click="navigate">About TMDB</a>
              </router-link>
            </li>
            <li>
              <router-link
                class="text-white text-decoration-none"
                to="/"
                v-slot="{ href, navigate }"
                custom
              >
                <a :href="href" @click="navigate">Contact Us</a>
              </router-link>
            </li>
            <li>
              <router-link
                class="text-white text-decoration-none"
                to="/"
                v-slot="{ href, navigate }"
                custom
              >
                <a :href="href" @click="navigate">Support Forums</a>
              </router-link>
            </li>
            <li>
              <router-link
                class="text-white text-decoration-none"
                to="/"
                v-slot="{ href, navigate }"
                custom
              >
                <a :href="href" @click="navigate">API</a>
              </router-link>
            </li>
            <li>
              <router-link
                class="text-white text-decoration-none"
                to="/"
                v-slot="{ href, navigate }"
                custom
              >
                <a :href="href" @click="navigate">System Status</a>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="footer-list me-5">
          <h3 class="text-uppercase m-0">GET INVOLVED</h3>
          <ul>
            <li>
              <router-link
                class="text-white text-decoration-none"
                to="/"
                v-slot="{ href, navigate }"
                custom
              >
                <a :href="href" @click="navigate">Contribution Bible</a>
              </router-link>
            </li>
            <li>
              <router-link
                class="text-white text-decoration-none"
                to="/"
                v-slot="{ href, navigate }"
                custom
              >
                <a :href="href" @click="navigate">Add New Movie</a>
              </router-link>
            </li>
            <li>
              <router-link
                class="text-white text-decoration-none"
                to="/"
                v-slot="{ href, navigate }"
                custom
              >
                <a :href="href" @click="navigate">Add New TV Show</a>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="footer-list me-5">
          <h3 class="text-uppercase m-0">Community</h3>
          <ul>
            <li>
              <router-link
                class="text-white text-decoration-none"
                to="/"
                v-slot="{ href, navigate }"
                custom
              >
                <a :href="href" @click="navigate">Guidelines</a>
              </router-link>
            </li>
            <li>
              <router-link
                class="text-white text-decoration-none"
                to="/"
                v-slot="{ href, navigate }"
                custom
              >
                <a :href="href" @click="navigate">Discussions</a>
              </router-link>
            </li>
            <li>
              <router-link
                class="text-white text-decoration-none"
                to="/"
                v-slot="{ href, navigate }"
                custom
              >
                <a :href="href" @click="navigate">Leaderboard</a>
              </router-link>
            </li>
            <li>
              <router-link
                class="text-white text-decoration-none"
                to="/"
                v-slot="{ href, navigate }"
                custom
              >
                <a :href="href" @click="navigate">Twitter</a>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="footer-list">
          <h3 class="text-uppercase m-0">Legal</h3>
          <ul>
            <li>
              <router-link
                class="text-white text-decoration-none"
                to="/"
                v-slot="{ href, navigate }"
                custom
              >
                <a :href="href" @click="navigate">Terms of Use</a>
              </router-link>
            </li>
            <li>
              <router-link
                class="text-white text-decoration-none"
                to="/"
                v-slot="{ href, navigate }"
                custom
              >
                <a :href="href" @click="navigate">API Terms of Use</a>
              </router-link>
            </li>
            <li>
              <router-link
                class="text-white text-decoration-none"
                to="/"
                v-slot="{ href, navigate }"
                custom
              >
                <a :href="href" @click="navigate">Privacy Policy</a>
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
