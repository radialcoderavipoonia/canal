<template>
  <!-- Main container -->
  <div class="container xl:max-w-[1320px] px-3 xl:px-0 mx-auto">
    <!-- Navbar content -->
    <div class="md:py-[30px] sm:py-6 py-5 flex justify-between xl:pe-8">
      <!-- Logo -->
      <a href="#">
        <img
          src="../assets/images/navbar/page-logo.png"
          class="md:w-[128px] sm:w-[108px] w-[88px] md:h-[50px] sm:h-[45px] h-[40px]"
        />
      </a>
      <!-- Navbar links and buttons -->
      <div class="flex gap-[100px] items-center">
        <!-- Desktop navbar links -->
        <ul class="sm:flex gap-[30px] items-center hidden">
          <li
            class="font-semibold md:text-lg sm:text-base text-sm leading-[140%] tracking-[0.2px] text-lightBlack hover:text-Prime transition-all duration-300 ease-in-out"
          >
            <a href="#">Product</a>
          </li>
          <li
            class="font-semibold md:text-lg sm:text-base text-sm leading-[140%] tracking-[0.2px] text-lightBlack hover:text-Prime transition-all duration-300 ease-in-out"
          >
            <a href="#">Mission</a>
          </li>
        </ul>
        <!-- Mobile navbar menu -->
        <div
          :class="[
            { 'left-0': !isleft0, '-left-full': isleft0 },
            'sm:hidden h-screen flex flex-col justify-center items-center w-full absolute top-0 transition-all duration-300 ease-in-out bg-white',
          ]"
        >
          <ul class="flex flex-col sm:hidden gap-6 items-center">
            <li
              class="font-semibold md:text-lg sm:text-base text-sm leading-[140%] tracking-[0.2px] text-lightBlack hover:text-Prime transition-all duration-300 ease-in-out"
            >
              <a href="#">Product</a>
            </li>
            <li
              class="font-semibold md:text-lg sm:text-base text-sm leading-[140%] tracking-[0.2px] text-lightBlack hover:text-Prime transition-all duration-300 ease-in-out"
            >
              <a href="#">Mission</a>
            </li>
          </ul>
          <button
            class="flex gap-1 mt-6 items-center border-[1.5px] border-Prime md:px-5 sm:px-4 px-3 md:py-[13px] sm:py-[10px] py-2 text-Prime md:text-lg sm:text-base text-sm leading-[140%] tracking-[0.2px] font-semibold"
          >
            <BlackPlus />
            Join
          </button>
        </div>
        <!-- Mobile menu icon -->
        <div class="flex md:gap-8 sm:gap-6 gap-4 items-center">
          <span>
            <WorldNet />
          </span>
          <div
            @click="menuposition"
            class="flex sm:hidden flex-col h-[20px] justify-between relative z-50"
          >
            <span class="w-[25px] h-[3px] bg-black"></span>
            <span class="w-[25px] h-[3px] bg-black"></span>
            <span class="w-[25px] h-[3px] bg-black"></span>
          </div>
          <!-- Join button for mobile -->
          <button
            class="sm:flex gap-1 hidden items-center border-[1.5px] border-Prime bg-transparent hover:border-transparent hover:text-white join_btn hover:bg-yellow transition-all duration-300 md:px-5 sm:px-4 px-3 md:py-[13px] sm:py-[10px] py-2 text-Prime md:text-lg sm:text-base text-sm leading-[140%] tracking-[0.2px] font-semibold"
          >
            <BlackPlus />
            Join
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import WorldNet from "../components/icons/WorldNet.vue";
import BlackPlus from "../components/icons/BlackPlus.vue";

// Reactive variable to control mobile menu visibility
const isleft0 = ref(true);

// Function to toggle mobile menu visibility
const menuposition = () => {
  isleft0.value = !isleft0.value;
  document.body.classList.toggle("overflow-hidden"); // Toggle overflow hidden on body
};
</script>
