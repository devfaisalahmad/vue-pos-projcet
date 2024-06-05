<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="w-full bg-center bg-cover bg-[url('/image/start-page.webp')]">
    <div class="container">
      <div
        class="flex min-h-screen md:w-[350px] sm:w-[370px] w-full justify-center flex-col"
      >
        <p class="sm:text-[15px] text-sm uppercase text-[#323232] font-medium">
          100% Healthy & Affordable
        </p>
        <div class="pb-2">
          <h2
            class="md:text-[63px] text-[40px] leading-[45px] sm:leading-[63px] text-[#323232] capitalize font-[400]"
          >
            Organic Vegetables
          </h2>
        </div>

        <p
          class="sm:text-[18px] text-[16px] font-medium capitalize text-[#323232]"
        >
          Small Changes Big Difference
        </p>
        <div class="sm:pt-4 pt-4">
          <RouterLink
            to="/shop"
            class="sm:py-3 py-2 sm:px-8 px-6 text-sm sm:text-[16px] rounded-full border border-[#323232] bg-[#323232] text-[white] uppercase outline-none hover:bg-[transparent] hover:text-[#323232] duration-200"
          >
            Shop Now
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
