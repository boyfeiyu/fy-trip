<script setup>
const props = defineProps({
  item: {
    type: Object
  }
})
</script>

<template>
  <div class="house-item-v3">
    v3-{item.houseName}
  </div>
</template>

<style scoped>

</style>