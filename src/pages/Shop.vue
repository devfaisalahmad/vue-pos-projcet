<script setup>
import { RouterLink } from "vue-router";
import FacebookICon from "../components/icons/FacebookIcon.vue";
import InstagramICon from "../components/icons/InstagramIcon.vue";
import WhatsAppIcon from "../components/icons/WhatsAppIcon.vue";
</script>

<template>
  <div class="w-full bg-center bg-cover bg-[url('/image/cate.png')] relative">
    <div class="w-full flex min-h-screen flex-col">
      <!-- navbar -->
      <nav class="w-full z-40 py-6 px-2">
        <div class="container mx-auto">
          <div class="w-full flex items-center gap-3 justify-between">
            <div>
              <RouterLink
                to="/shop"
                class="md:text-3xl text-2xl font-semibold text-white"
                >Logo</RouterLink
              >
            </div>
            <ul class="flex items-center gap-0">
              <li>
                <div
                  class="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-primary"
                >
                  <FacebookICon class="text-[white] text-xl cursor-pointer" />
                </div>
              </li>
              <li>
                <div
                  class="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-primary"
                >
                  <InstagramICon class="text-[white] text-xl cursor-pointer" />
                </div>
              </li>
              <li>
                <div
                  class="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-primary"
                >
                  <WhatsAppIcon class="text-[white] text-xl cursor-pointer" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <!-- drowar -->
    <div class="fixed custom animate-bottom">
      <div
        class="bg-[#f5f5f5] min-h-[330px] rounded-[14px] border-[#f0f0f0] py-4 container"
      >
        <div class="container">
          <div class="w-full flex flex-col gap-3">
            <div class="flex items-center flex-col justify-center gap-3 mb-4 pt-[10px] ">
              <h2
                class="md:text-[30px] text-[20px] text-center text-gray-900 font-semibold capitalize"
              >
                Featured Category
              </h2>
              <div class="flex items-center gap-3 justify-end">
                <button
                  class="text-[11px] py-2 px-4 bg-[#6fd943] rounded-md hover:text-[#6fd943] text-white duration-200 border hover:bg-transparent border-[#6fd943]"
                >
                  All Category
                </button>
                <button
                  class="text-[11px] py-2 px-4 bg-[#6fd943] rounded-md hover:text-[#6fd943] duration-200 text-white border hover:bg-transparent border-[#6fd943]"
                >
                  All Featured Category
                </button>
              </div>
            </div>

            <div class="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 md:gap-5 sm:gap-4 gap-3 w-[90%] mx-auto pb-[20px]" >
              <!-- single category -->
              <div v-for="i in 5" class="w-full h-[200px] shadow-lg rounded-xl bg-center bg-cover bg-[url('/image/starting.webp')] relative flex justify-center items-end px-2 py-4" >
                <span
                  class="sm:text-2xl text-xl font-medium capitalize text-[white] text-shadow z-20"
                >
                  Kantine
                </span>

                <div
                  class="absolute shadow-lg rounded-xl z-10 bottom-0 gradient-color left-0 w-full h-full">
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute z-20 top-0 w-full h-full bg-[#00000065]"></div>
  </div>
</template>
<style scoped>
@keyframes slideUp {
  0% {
    bottom: -100%;
  }
  50% {
    bottom: -135px;
  }
  100% {
    bottom: -145px;
  }
}

.animate-bottom {
  animation: slideUp 1.5s ease-in-out forwards;
}
</style>
