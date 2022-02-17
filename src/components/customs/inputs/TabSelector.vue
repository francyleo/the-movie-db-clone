<template>
  <div class="tab-selector-container">
    <div
      class="tab-selector-horizontal"
      :class="{ 'container-invert-color': invertColors }"
    >
      <span
        v-for="(tab, index) in tabs"
        :key="index"
        ref="tabs"
        class="tab-selector-tab no-select"
        :class="{ active: tab === tabActive, 'tab-invert-color': invertColors }"
        @click="activeTab(tab)"
      >
        {{ tab }}
      </span>
      <div
        ref="slider"
        class="tab-selector-slider"
        :class="{ 'slider-invert-color': invertColors }"
      ></div>
    </div>
    <div class="tab-selector-dropdown">
      <button @click="dropdown_is_open = !dropdown_is_open">
        {{ tabActive }}
      </button>
      <div class="dropdown-options" v-if="dropdown_is_open">
        <span
          v-for="(tab, index) in tabs_without_selected"
          :key="index"
          class="no-select"
          @click="dropdownActiveTab(tab)"
        >
          {{ tab }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    initialTab: {
      type: String,
      default: '',
    },
    invertColors: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    tabActive: null,
    dropdown_is_open: false,
  }),
  computed: {
    tabs_without_selected() {
      return this.tabs.filter(tab => tab !== this.tabActive);
    },
  },
  methods: {
    activeTab(tab) {
      this.tabActive = tab;

      if (!this.$refs['tabs']) return;
      const activeTabIndex = this.getTabIndex(tab);
      this.setSliderPosition(activeTabIndex);

      this.$emit('onChange', tab);
    },
    dropdownActiveTab(tab) {
      this.dropdown_is_open = false;
      this.tabActive = tab;
      this.activeTab(tab);
    },
    setSliderPosition(tabIndex) {
      const threshold = 1;
      const currentTab = this.$refs['tabs'][tabIndex];
      const { offsetLeft, offsetWidth } = currentTab;
      this.$refs['slider'].style.left = `${offsetLeft}px`;
      this.$refs['slider'].style.width = `${offsetWidth + threshold}px`;
    },
    getTabIndex(tab) {
      return this.tabs.findIndex(_tab => _tab === tab);
    },
  },
  mounted() {
    this.activeTab(this.initialTab);
  },
};
</script>

<style lang="scss" scoped>
$border-radius: 50px;

.tab-selector-container {
  position: relative;
  color: var(--bs-white);
  font-size: 1.6rem;
  font-weight: 600;

  .tab-selector-horizontal {
    position: relative;
    display: flex;
    justify-content: stretch;
    align-items: stretch;

    min-height: 25px;
    border: 1px solid var(--bs-primary);
    border-radius: $border-radius;

    @include media-breakpoint-down(md) {
      display: none;
    }

    &.container-invert-color {
      border: 1px solid var(--bs-green);
    }

    .tab-selector-tab {
      color: var(--bs-primary);
      padding: 3px 15px;
      z-index: 1;
      cursor: pointer;

      font-size: 1.6rem;
      font-weight: 600;
      text-decoration: none;
      transition: color 300ms ease-in;

      &.active:not(.tab-invert-color) {
        background: linear-gradient(
          to right,
          var(--bs-green-light) 0%,
          var(--bs-green) 100%
        );
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      &.tab-invert-color:not(.active) {
        color: var(--bs-white);
      }
    }

    .tab-selector-slider {
      position: absolute;
      height: 100%;
      left: 0%;
      bottom: 0;
      border-radius: $border-radius;
      background: var(--bs-primary);
      transition: all 400ms ease-in-out;

      &.slider-invert-color {
        background: linear-gradient(
          to right,
          var(--bs-green-light) 0%,
          var(--bs-green) 100%
        );
      }
    }
  }

  .tab-selector-dropdown {
    @include media-breakpoint-up(md) {
      display: none;
    }

    button {
      min-width: 110px;
      padding: 8px 16px;
      border-radius: 15px;
      background: var(--bs-primary);
      color: var(--bs-white);
      font-weight: 600;
      border: none;
      outline: none;
    }

    .dropdown-options {
      display: flex;
      position: absolute;
      width: 100%;
      border-radius: 15px;
      top: calc(100% + 4px);
      text-align: center;
      left: 0;
      flex-direction: column;
      color: var(--bs-primary);
      background: linear-gradient(
        to right,
        var(--bs-green-light) 0%,
        var(--bs-green) 100%
      );

      span {
        border-radius: 15px;
        padding: 8px;
        &:hover {
          color: var(--bs-white);
          background: var(--bs-primary);
        }
      }
    }
  }
}
</style>
