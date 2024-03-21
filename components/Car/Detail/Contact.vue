<script lang="ts" setup>
const { required, email } = useRules();
</script>
<template>
  <div class="mt-10">
    <div class="flex flex-col w-100 sm:w-50 justify-between">
      <v-text-field
        label="Name"
        :rules="[required]"
        variant="outlined"
      ></v-text-field>
      <v-text-field
        label="Email"
        :rules="[required, email]"
        variant="outlined"
      ></v-text-field>
      <v-text-field
        label="Phone"
        :rules="[required]"
        variant="outlined"
      ></v-text-field>
     <v-textarea
          label="Message"
          row-height="25"
          rows="3"
          variant="outlined"
          auto-grow
          shaped
        ></v-textarea>
      <div>
        <v-btn color="primary">Submit</v-btn>
      </div>
    </div>
  </div>
</template>