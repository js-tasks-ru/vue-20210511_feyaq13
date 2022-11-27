<script>
export default {
  name: 'NodesPagination',

  props: {
    page: {
      type: Number,
      default: 1,
    },

    perPage: {
      type: Number,
    },
  },

  render(h) {
    let content = [];
    if (this.$slots.default) {
      content = this.$slots.default.slice(this.perPage * (this.page - 1), this.perPage * this.page);
    }

    return h('div', content);
  },
};
</script>
