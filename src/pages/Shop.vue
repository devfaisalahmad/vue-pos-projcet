<script setup>
import FacebookICon from "../components/icons/FacebookIcon.vue";
import InstagramICon from "../components/icons/InstagramIcon.vue";
import WhatsAppIcon from "../components/icons/WhatsAppIcon.vue";

</script>

<template>
  <div class="w-full bg-center bg-cover bg-[url('/image/cate.png')] relative">
    <div class="w-full flex min-h-screen flex-col justify-between">
      <nav class="w-full z-40 py-6">
        <div class="xl:container mx-auto">
          <div class="w-full flex items-center gap-3 justify-between">
            <div>
              <h2 class="text-3xl font-semibold text-primary">Logo</h2>
            </div>
            <ul class="flex items-center gap-3">
              <li>
                <div
                  class="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-primary"
                >
                  <FacebookICon class="text-[white] text-xl" />
                </div>
              </li>
              <li>
                <div
                  class="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-primary"
                >
                  <InstagramICon class="text-[white] text-xl"/>
                </div>
              </li>
              <li>
                <div
                  class="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-primary"
                >
                  <WhatsAppIcon class="text-[white] text-xl" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <!-- drowar -->
      <div
        class="w-full bg-[#f5f5f5] h-[350px] rounded-tl-[40px] rounded-tr-[40px] z-30 border-t border-[#f0f0f0] py-4"
      >
        <div class="container">
          <div class="w-full flex flex-col gap-3">
            <div class="text-center">
              <h2 class="text-[24px] text-center font-semibold">
                TOUCH OR SCAN
              </h2>
            </div>
            
            <div class="grid grid-cols-4 gap-3 w-[65%] mx-auto">
              <div
                class="h-[170px] w-[170px] shadow-lg rounded-xl bg-center bg-cover bg-[url('/image/pic-1.png')] relative flex justify-center items-end px-2 py-4"
              >
                <span
                  class="text-2xl font-medium capitalize text-[white] text-shadow z-20"
                >
                  Kantine
                </span>
                <div
                  class="absolute shadow-lg rounded-xl z-10 bottom-0 gradient-color left-0 w-full h-[170px]"
                ></div>
              </div>
              <div
                class="h-[170px] w-[170px] shadow-lg rounded-xl bg-center bg-cover bg-[url('/image/pic-1.png')] relative flex justify-center items-end px-2 py-4"
              >
                <span
                  class="text-2xl font-medium capitalize text-[white] text-shadow z-20"
                >
                  Kantine
                </span>
                <div
                  class="absolute shadow-lg rounded-xl z-10 bottom-0 gradient-color left-0 w-full h-[170px]"
                ></div>
              </div>
              <div
                class="h-[170px] w-[170px] shadow-lg rounded-xl bg-center bg-cover bg-[url('/image/pic-1.png')] relative flex justify-center items-end px-2 py-4"
              >
                <span
                  class="text-2xl font-medium capitalize text-[white] text-shadow z-20"
                >
                  Kantine
                </span>
                <div
                  class="absolute shadow-lg rounded-xl z-10 bottom-0 gradient-color left-0 w-full h-[170px]"
                ></div>
              </div>
              <div
                class="h-[170px] w-[170px] shadow-lg rounded-xl bg-center bg-cover bg-[url('/image/pic-1.png')] relative flex justify-center items-end px-2 py-4"
              >
                <span
                  class="text-2xl font-medium capitalize text-[white] text-shadow z-20"
                >
                  Kantine
                </span>
                <div
                  class="absolute shadow-lg rounded-xl z-10 bottom-0 gradient-color left-0 w-full h-[170px]"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute z-20 top-0 w-full h-full bg-[#00000065]"></div>
  </div>
</template>
