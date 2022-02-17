<template>
  <div class="tab-switcher-container">
    <div class="tab-switcher-header">
      <h2 :class="{ 'title-in-background': invertColors }">{{ title }}</h2>
      <TabSelector
        :tabs="tabsNormalized"
        :initialTab="activeTab"
        :invertColors="invertColors"
        @onChange="onChangeTab"
      />
    </div>
    <div class="tab-switcher-content">
      <slot />
    </div>
    <div class="tab-switcher-background">
      <slot name="background" v-bind="{ background }">
        <BetterImage v-if="background" :image="background" />
      </slot>
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
    background: {
      type: [String, Function],
      default: '',
    },
    invertColors: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    TabSelector: () => import('@components/customs/inputs/TabSelector'),
    BetterImage: () => import('@components/customs/BetterImage'),
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
    onChangeTab(tabSelected) {
      this.tabs.forEach(tab => {
        tab.isActive = tab.title === tabSelected;
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
  padding-top: 24px;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 60px;
    background-image: linear-gradient(to right, rgba(#fff, 0), rgba(#fff, 1));
    z-index: 4;
  }

  .tab-switcher-header {
    display: flex;
    align-items: center;
    padding-left: 40px;
    z-index: 3;

    h2 {
      color: var(--bs-black);
      font-size: 2.5rem;

      &.title-in-background {
        color: var(--bs-white);
      }
    }

    > div {
      margin-left: 20px;
    }
  }

  .tab-switcher-content {
    position: relative;
    padding: 20px 0 0 16px;
    margin: 0;
    width: 100%;
    height: 100%;
    min-height: 200px;
    overflow-y: hidden;
    overflow-x: scroll;
    z-index: 1;
  }

  .tab-switcher-background {
    position: absolute;
    display: flex;
    align-items: flex-end;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
}
</style>
