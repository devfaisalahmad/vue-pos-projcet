<script setup>
import { RouterLink } from "vue-router";
import LeftArrowIcon from "../components/icons/LeftArrowIcon.vue";
import SearchIcon from "../components/icons/SearchIcon.vue";
import Category from "../components/icons/Category.vue";
import RightArrowIcon from "../components/icons/RightArrowIcon.vue";
import PlusIcon from "../components/icons/PlusIcon.vue";
import MinusIcon from "../components/icons/MinusIcon.vue";
import DeleteIcon from "../components/icons/DeleteIcon.vue";
</script>

<template>
  <div class="w-full p-2">
    <div class="flex min-h-screen justify-between w-full">
      <div class="w-full flex pr-2 flex-col gap-2">
        <!-- top back and input search bar -->
        <div class="flex justify-between items-center gap-5">
          <RouterLink to="/shop">
            <button>
              <LeftArrowIcon
                class="text-2xl text-white bg-[gray] pl-2 rounded-full w-[30px] h-[30px] flex justify-center items-center"
              />
            </button>
          </RouterLink>
          <div class="flex items-center w-[500px] gap-2">
            <div class="w-full relative">
              <input
                class="py-2 w-full px-4 border-none outline-none rounded-full bg-[#0000000a]"
                placeholder="Search"
                type="text"
                name=""
                id=""
              />
              <div class="absolute top-[8px] cursor-pointer right-[12px]">
                <SearchIcon class="text-2xl" />
              </div>
            </div>
            <div>
              <button
                class="w-[30px] bg-[#202020] rounded-full flex justify-center items-center h-[30px]"
              >
                <Category class="text-lg text-white" />
              </button>
            </div>
          </div>
        </div>
        <!-- category button -->
        <div>
          <button
            class="py-[5px] text-[11px] capitalize pr-[8px] pl-[10px] text-white rounded-full bg-[#202020] flex items-center"
          >
            <span> Discontinued Products </span>
            <span>
              <RightArrowIcon class="text-sm text-white" />
            </span>
          </button>
        </div>
        <!-- products -->
        <div
          class="w-full grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-3"
        >
          <div
            class="shadow-sm border duration-200 border-[#f0f0f0] hover:shadow-lg cursor-pointer py-3 px-2 rounded-md"
            v-for="i in 20"
          >
            <img
              class="h-[100px] mx-auto object-cover"
              src="/image/apple.webp"
              alt=""
            />
            <div class="font-medium text-sm mt-2 text-gray-700 truncate">
              Fuze Tea Peach Lorem ipsum dolor sit amet.
            </div>
            <div class="text-[15px]">$40</div>
          </div>
        </div>
      </div>

      <!-- basket design -->
      <div class="w-[300px] border-l border-[gray] p-2">
        <div class="capitalize font-semibold text-center py-3 bg-white mb-2">
          Basket
        </div>
        <div class="w-full flex flex-col gap-3">
          <div class="flex gap-3" v-for="i in 3">
            <div
              class="shadow-sm border duration-200 border-[#f0f0f0] hover:shadow-lg min-w-[100px] h-[100px] cursor-pointer py-3 px-2 rounded-md relative group"
            >
              <img
                class="w-full h-full mx-auto object-cover"
                src="/image/apple.webp"
                alt=""
              />
              <button
                class="w-full hidden group-hover:flex absolute rounded-md top-0 left-0 h-full bg-black/60 justify-center items-center"
              >
                <DeleteIcon class="text-[22px] text-white" />
              </button>
            </div>

            <div class="flex flex-col gap-3 overflow-hidden">
              <div class="overflow-hidden flex flex-col">
                <div class="font-medium text-xs text-gray-700 truncate">
                  Fuze Tea Peach Lorem ipsum dolor sit amet.
                </div>
                <div class="text-[15px]">$40</div>
              </div>

              <!-- optional -->
              <div class="flex items-center justify-start gap-3">
                <button
                  class="w-[30px] flex justify-center items-center h-[30px] rounded-full shadow-md"
                >
                  <MinusIcon />
                </button>

                <div>3</div>
                <button
                  class="w-[30px] flex justify-center items-center h-[30px] rounded-full shadow-md"
                >
                  <PlusIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- checkout button -->
        <div class="capitalize font-semibold text-center py-3 bg-white mb-2">
          checkout
        </div>
      </div>
    </div>
  </div>
</template>
