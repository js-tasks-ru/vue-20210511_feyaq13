<template>
  <div>
    <slot v-for="item in localPageItems" :item="item" />
  </div>
</template>

<script>
export default {
  name: 'AppPagination',
  props: {
    page: {
      type: Number,
      default: 1,
    },

    perPage: {
      type: Number,
      default: 5,
    },

    items: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    localPageItems() {
      return this.items.slice(this.perPage * (this.page - 1), this.perPage * this.page);
    },
  },
};
</script>

<style></style>
