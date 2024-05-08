<script setup>
import Facebook from "../components/icons/Facebook.vue";
import Twitter from "../components/icons/Twitter.vue";
import Instagram from "../components/icons/Instagram.vue";
import linkedIn from "../components/icons/LinkedIn.vue";
</script>
<template>
  <div class="bg-lightBlack lg:pt-[104px] md:pt-20 sm:pt-16 pt-14">
    <div
      class="container xl:max-w-[1344px] px-3 mx-auto lg:pb-[84px] md:pb-20 sm:pb-16 pb-14"
    >
      <div class="flex justify-between flex-wrap md:gap-20 gap-14">
        <div>
          <a href="#"
            ><img
              src="../assets/images/footer/footer-logo.png"
              class="w-[128px] h-[50px]"
          /></a>
          <p
            class="md:pt-[50px] sm:pt-10 pt-7 text-white mb-0 uppercase ff_inter font-bold md:text-[22px] sm:text-[20px] text-lg leading-[170%] tracking-[-0.11px]"
          >
            Follow Us
          </p>
          <div class="flex gap-3 items-center md:pt-5 sm:pt-4 pt-3">
            <a
              href="https://www.facebook.com/"
              target="blank"
              class="social_icon"
              ><Facebook
            /></a>
            <a href="https://twitter.com/" target="blank" class="social_icon"
              ><Twitter
            /></a>
            <a
              href="https://www.instagram.com/"
              target="blank"
              class="social_icon"
              ><Instagram
            /></a>
            <a
              href="https://www.linkedin.com/"
              target="blank"
              class="social_icon"
              ><linkedIn
            /></a>
          </div>
        </div>
        <ul>
          <li
            class="sm:pb-3 text-white font-bold xl:text-2xl md:text-[20px] sm:text-lg text-base leading-[120%]"
          >
            Links
          </li>
          <li
            class="sm:pt-[17px] pt-3 text-white font-normal leading-[140%] tracking-[0.2px] md:text-lg sm:text-base text-sm hover:opacity-60 transition-all duration-300 ease-in-out"
          >
            <a href="#">Home</a>
          </li>
          <li
            class="sm:pt-[17px] pt-3 text-white font-normal leading-[140%] tracking-[0.2px] md:text-lg sm:text-base text-sm hover:opacity-60 transition-all duration-300 ease-in-out"
          >
            <a href="#">About us</a>
          </li>
          <li
            class="sm:pt-[17px] pt-3 text-white font-normal leading-[140%] tracking-[0.2px] md:text-lg sm:text-base text-sm hover:opacity-60 transition-all duration-300 ease-in-out"
          >
            <a href="#">Bookings</a>
          </li>
          <li
            class="sm:pt-[17px] pt-3 text-white font-normal leading-[140%] tracking-[0.2px] md:text-lg sm:text-base text-sm hover:opacity-60 transition-all duration-300 ease-in-out"
          >
            <a href="#">Blog</a>
          </li>
        </ul>
        <ul>
          <li
            class="sm:pb-3 text-white font-bold xl:text-2xl md:text-[20px] sm:text-lg text-base leading-[120%]"
          >
            Legal
          </li>
          <li
            class="sm:pt-[17px] pt-3 text-white font-normal leading-[140%] tracking-[0.2px] md:text-lg sm:text-base text-sm hover:opacity-60 transition-all duration-300 ease-in-out"
          >
            <a href="#">Terms of use</a>
          </li>
          <li
            class="sm:pt-[17px] pt-3 text-white font-normal leading-[140%] tracking-[0.2px] md:text-lg sm:text-base text-sm hover:opacity-60 transition-all duration-300 ease-in-out"
          >
            <a href="#">Privacy policy</a>
          </li>
          <li
            class="sm:pt-[17px] pt-3 text-white font-normal leading-[140%] tracking-[0.2px] md:text-lg sm:text-base text-sm hover:opacity-60 transition-all duration-300 ease-in-out"
          >
            <a href="#">Cookie policy</a>
          </li>
        </ul>
        <ul>
          <li
            class="md:pb-3 text-white font-bold xl:text-2xl md:text-[20px] sm:text-lg text-base leading-[120%]"
          >
            Product
          </li>
          <li
            class="sm:pt-[17px] pt-3 text-white font-normal leading-[140%] tracking-[0.2px] md:text-lg sm:text-base text-sm hover:opacity-60 transition-all duration-300 ease-in-out"
          >
            <a href="#">Take tour</a>
          </li>
          <li
            class="sm:pt-[17px] pt-3 text-white font-normal leading-[140%] tracking-[0.2px] md:text-lg sm:text-base text-sm hover:opacity-60 transition-all duration-300 ease-in-out"
          >
            <a href="#">Live chat</a>
          </li>
          <li
            class="sm:pt-[17px] pt-3 text-white font-normal leading-[140%] tracking-[0.2px] md:text-lg sm:text-base text-sm hover:opacity-60 transition-all duration-300 ease-in-out"
          >
            <a href="#">Reveiws</a>
          </li>
        </ul>
        <div>
          <p
            class="font-bold xl:text-2xl md:text-[20px] sm:text-lg text-base leading-[120%] text-white"
          >
            Subscribe to Our Newsletter
          </p>
          <p
            class="text-white pt-[10px] font-normal md:text-lg sm:text-base text-sm leading-[140%] tracking-[0.2px]"
          >
            <a herf="#">Stay up to date</a>
          </p>

          <div
            class="md:mt-9 sm:mt-8 mt-6 bg-white p-[5px] flex lg:w-[419px] w-[350px]"
          >
            <input
              class="md:ps-6 md:pe-3 sm:px-4 px-3 md:py-4 sm:py-3 py-2 outline-none font-semibold md:text-lg sm:text-base text-sm leading-[140%] w-full tracking-[0.2px] text-gunsmoke"
              placeholder="Your email "
            />
            <button
              class="bg-Prime hover:bg-yellow transition-all duration-300 sm:block hidden px-[30px] py-[18px] text-white font-normal md:text-lg sm:text-base text-sm leading-[140%] tracking-[0.2px]"
            >
              Subscribe
            </button>
          </div>
          <button
            class="bg-Prime hover:bg-yellow transition-all duration-300 ease-in-out sm:hidden mt-3 w-full block md:px-[30px] px-5 md:py-[18px] sm:py-3 py-2 text-white font-normal md:text-lg sm:text-base text-sm leading-[140%] tracking-[0.2px]"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
    <div class="bg-white w-full h-[1px]"></div>
    <div class="md:py-5 sm:py-4 py-3">
      <p
        class="text-white text-center font-normal md:text-lg sm:text-base text-sm leading-[140%] tracking-[0.2px]"
      >
        Copyright 2022 uifry.com all rights reserved
      </p>
    </div>
  </div>
</template>
