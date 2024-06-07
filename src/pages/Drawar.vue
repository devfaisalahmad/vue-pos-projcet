<script setup></script>

<template>
  <!-- <div class="w-full h-screen flex justify-center items-center bg-gree-200">
    <div class="relative w-64 h-64 bg-blue-400">
        <div class="absolute bottom-0 left-0 w-full h-16 bg-blue-500 animate-bottom">
          Hello
        </div>
    </div>
  </div> -->
  <div class="relative">
    <div class="name">name</div>
  </div>
</template>
<style scoped>
@keyframes slideUp {
  0% {
    bottom: 0;
  }
  100% {
    bottom: 100px;
  }
}

.animate-bottom {
  animation: slideUp 0.6s ease-in-out forwards;
}
</style>
