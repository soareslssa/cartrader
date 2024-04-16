<script lang="ts" setup>
const { required, email } = useRules();
</script>
<template>
  <div class="mt-10">
    <div class="flex flex-col w-full gap-2 justify-between">
      <UInput
        color="primary"
        size="xl"
        required
        variant="outline"
        placeholder="Name..."
      />
      <UInput
        color="primary"
        size="xl"
        required
        variant="outline"
        type="email"
        placeholder="Email..."
      />
      <UInput
        color="primary"
        size="xl"
        required
        variant="outline"
        type="phone"
        placeholder="Phone..."
      />

      <UTextarea v-model="value" />
      <div>
        <UButton size="xl" block>Submit</UButton>
      </div>
    </div>
  </div>
</template>