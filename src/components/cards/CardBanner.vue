<template>
  <div class="card-banner-container">
    <div class="card-banner-banner">
      <img :src="image" :alt="`Banner ${title}`" />
    </div>
    <div class="card-banner-rate">
      <svg>
        <circle cx="21" cy="21" r="21"></circle>
        <circle ref="percent" cx="21" cy="21" r="21"></circle>
      </svg>
      <span>{{ rate }}</span>
    </div>
    <div class="card-banner-description">
      <a href="#">{{ title }}</a>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    rate: {
      type: Number,
      default: 0,
    },
  },
  data: () => ({
    colors: ['#01d277', '#d29001'],
  }),
  watch: {
    rate(rate) {
      if (!this.$refs['percent']) return;
      this.setRate(rate);
    },
  },
  methods: {
    setRate(rate) {
      this.$refs['percent'].style.strokeDashoffset = 132 - (132 * rate) / 100;
      this.$refs['percent'].style.stroke = this.colors[rate > 69 ? 0 : 1];
    },
  },
  mounted() {
    this.setRate(this.rate);
  },
};
</script>

<style lang="scss" scoped>
.card-banner-container {
  position: relative;
  display: flex;
  flex-direction: column;

  & + & {
    margin-left: 20px;
  }

  .card-banner-banner {
    position: relative;
    width: 150px;
    height: 225px;
    overflow: hidden;
    border-radius: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .card-banner-rate {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 200px;
    left: 15px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: #fff;
    font-size: 1.5rem;
    text-align: center;
    line-height: 50px;
    background: var(--bs-primary);
    z-index: 1;

    span::after {
      content: '%';
      font-size: 0.7rem;
    }

    svg {
      width: 50px;
      height: 50px;
      position: absolute;
      padding: 4px;
      border-radius: 50%;

      circle {
        width: 100%;
        height: 100%;
        fill: transparent;
        stroke-width: 4px;
        stroke-linecap: round;
        stroke-dasharray: 132;
      }

      circle:nth-child(1) {
        stroke: rgba(#000, 0.5);
      }
    }
  }

  .card-banner-description {
    margin: 26px auto 0;
    font-size: 1.6rem;

    a {
      color: var(--bs-black);
      text-decoration: none;
      font-weight: bold;
    }

    p {
      margin-bottom: 0;
      color: var(--bs-black);
      opacity: 0.5;
    }
  }
}
</style>
