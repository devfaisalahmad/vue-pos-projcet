<script setup>
  import { onMounted } from 'vue';

import { IStaticMethods } from "preline/preline";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

onMounted(() => {
  setTimeout(() => {
    window.HSStaticMethods.autoInit();
  }, 100)
});
</script>

<template>
  <router-view></router-view>
</template>
