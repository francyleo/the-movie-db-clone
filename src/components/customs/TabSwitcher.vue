<template>
  <div class="tab-switcher-container">
    <div class="tab-switcher-header">
      <h2 class="text-black">{{ title }}</h2>
      <TabSelector :tabs="tabs" @onChange="onChangeTab" />
    </div>
    <div class="tab-switcher-content">
      <template v-for="(tab, index) in tabs">
        <slot v-if="activeTab == index" name="tabs" v-bind="{ index, tab }" />
      </template>
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
    tabs: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    TabSelector: () => import('@components/customs/inputs/TabSelector'),
  },
  data: () => ({
    activeTab: 0,
  }),
  methods: {
    onChangeTab(index) {
      this.activeTab = index;
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
    display: flex;
    align-items: center;
    padding: 20px 0;
    margin: 0;
    width: 100%;
    height: 100%;
    overflow-y: hidden;
    overflow-x: scroll;
  }
}
</style>
