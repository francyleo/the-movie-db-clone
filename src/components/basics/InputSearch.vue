<template>
  <div class="input-container">
    <input v-bind="$props" />
    <button>Search</button>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.input-container {
  position: relative;
  display: flex;
  justify-items: center;
  align-items: stretch;
  width: 100%;
  background: $white;
  border-radius: 30px;
  padding-left: 24px;

  input {
    width: 100%;
    height: 46px;
    line-height: 45px;
    border: none;
    outline: none;
    background: transparent;
    font-size: 2rem;
  }

  button {
    min-width: 100px;
    border-radius: 30px;
    border: none;
    color: $white;
    background: linear-gradient(
      to right,
      var(--bs-green) 0%,
      var(--bs-secondary) 100%
    );

    font-size: 2rem;
    font-weight: 700;
  }
}
</style>
