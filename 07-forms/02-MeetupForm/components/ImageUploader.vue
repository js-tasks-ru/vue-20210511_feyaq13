<template>
  <div @click.stop="fileSelected">
    <p v-if="value">Selected ImageId = {{ value }}</p>
    <p v-else>Image is not selected</p>
    <input type="file" @click.prevent />
  </div>
</template>

<script>
export default {
  name: 'ImageUploader',

  model: {
    prop: 'value',
    event: 'change',
  },

  props: {
    value: Number,
  },

  methods: {
    fileSelected() {
      this.$emit('change', Math.round(Math.random() * 10) || null);
    },
  },
};
</script>

<style scoped></style>
