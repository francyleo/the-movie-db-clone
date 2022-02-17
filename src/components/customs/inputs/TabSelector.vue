<template>
  <div class="tab-selector-container">
    <span
      v-for="(tab, index) in tabs"
      :key="index"
      ref="tabs"
      class="tab-selector-tab no-select"
      @click="activeTab(tab)"
    >
      {{ tab }}
    </span>
    <div ref="slider" class="tab-selector-slider"></div>
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
  },
  methods: {
    activeTab(tab) {
      if (!this.$refs['tabs']) return;
      const activeTabIndex = this.getTabIndex(tab);
      this.setSliderPosition(activeTabIndex);

      this.$refs['tabs'].forEach((_tab, index) => {
        if (index === activeTabIndex) {
          _tab.classList.add('active');
          return;
        }

        _tab.classList.remove('active');
      });

      this.$emit('onChange', tab);
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
  display: flex;
  justify-content: stretch;
  align-items: stretch;

  min-height: 25px;
  border: 1px solid var(--bs-primary);
  border-radius: $border-radius;

  .tab-selector-tab {
    color: var(--bs-primary);
    padding: 3px 15px;
    z-index: 1;
    cursor: pointer;

    font-size: 1.6rem;
    font-weight: 600;
    text-decoration: none;
    transition: color 300ms ease-in;

    &.active {
      color: var(--bs-white);
      background: linear-gradient(
        to right,
        var(--bs-green-light) 0%,
        var(--bs-green) 100%
      );
      background-clip: text;
      -webkit-text-fill-color: transparent;
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
  }
}
</style>
