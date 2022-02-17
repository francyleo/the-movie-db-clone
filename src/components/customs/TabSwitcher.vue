<template>
  <div class="tab-switcher-container">
    <div class="tab-switcher-header">
      <h2 class="text-black">{{ title }}</h2>
      <TabSelector
        :tabs="tabsNormalized"
        :defaultActiveTab="activeTab"
        @onChange="onChangeTab"
      />
    </div>
    <div class="tab-switcher-content">
      <slot />
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
  },
  components: {
    TabSelector: () => import('@components/customs/inputs/TabSelector'),
  },
  data: () => ({
    tabs: [],
  }),
  computed: {
    tabsNormalized() {
      return this.tabs.map(tab => tab.title);
    },
    activeTab() {
      return this.tabs.find(tab => tab.isActive)?.title;
    },
  },
  methods: {
    onChangeTab(index) {
      this.tabs.forEach((tab, tabIndex) => {
        tab.isActive = tabIndex === index;
      });
    },
    registerTab(tab) {
      this.tabs.push(tab);
  },
  },
};
</script>

<style lang="scss" scope>
.tab-switcher-container {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 40px;

  .tab-switcher-header {
    display: flex;
    align-items: center;

    h2 {
      font-size: 2.5rem;
    }

    > div {
      margin-left: 20px;
    }
  }

  .tab-switcher-content {
    position: relative;
    /* display: flex;
    align-items: stretch; */
    padding: 20px 0;
    margin: 0;
    width: 100%;
    height: 100%;
    overflow-y: hidden;
    overflow-x: scroll;
  }
}
</style>
