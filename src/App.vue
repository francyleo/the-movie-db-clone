<template>
  <div id="main-wrapper" class="d-flex flex-column">
    <header>
      <NavBar />
    </header>
    <main class="d-flex flex-grow-1">
      <router-view />
    </main>
    <footer class="text-white">
      <Footer />
    </footer>
  </div>
</template>

<script>
import layout from '@/mixins/layout';

export default {
  mixins: [layout],
};
</script>

<style lang="scss">
body {
  font-family: 'Source Sans Pro', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#main-wrapper {
  min-height: 100vh;
}

footer {
  background: radial-gradient(at 30% top, #031d33 0%, var(--bs-primary) 70%);
  box-sizing: border-box;
}
</style>
