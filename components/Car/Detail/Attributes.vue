<script setup lang="ts">
const props = defineProps({
  features: Array,
});
</script>
<template>
  <div class="py-2 border-b">
    <UBadge v-for="(feature, index) in features" :key="index" variant="subtle" class="rounded-full">
      {{ feature }}
    </UBadge>
  </div>
</template>