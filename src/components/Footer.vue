<template>
  <!-- Main footer section -->
  <div class="bg-lightBlack lg:pt-[104px] md:pt-20 sm:pt-16 pt-14">
    <!-- Footer container -->
    <div
      class="container xl:max-w-[1344px] px-3 mx-auto lg:pb-[84px] md:pb-20 sm:pb-16 pb-14"
    >
      <!-- Footer content -->
      <div class="flex justify-between flex-wrap md:gap-20 gap-14">
        <!-- Company logo and social media links -->
        <div>
          <a href="#">
            <img
              src="../assets/images/footer/footer-logo.png"
              class="w-[128px] h-[50px]"
            />
          </a>
          <p
            class="md:pt-[50px] sm:pt-10 pt-7 text-white mb-0 uppercase ff_inter font-bold md:text-[22px] sm:text-[20px] text-lg leading-[170%] tracking-[-0.11px]"
          >
            Follow Us
          </p>
          <!-- Social media icons -->
          <div class="flex gap-3 items-center md:pt-5 sm:pt-4 pt-3">
            <a
              v-for="(item, index) in socialMediaIcons"
              :key="index"
              :href="item.url"
              target="blank"
              class="social_icon"
            >
              <component :is="item.icon" />
            </a>
          </div>
        </div>
        <!-- Navigation links -->
        <ul>
          <li
            class="text-white font-bold sm:pb-3 xl:text-2xl md:text-[20px] sm:text-lg text-base leading-[120%]"
          >
            Links
          </li>
          <li
            v-for="(link, index) in links1"
            :key="index + '1'"
            class="sm:pt-[17px] pt-3"
          >
            <a
              :href="link.url"
              class="text-white font-normal leading-[140%] tracking-[0.2px] md:text-lg sm:text-base text-sm hover:opacity-60 transition-all duration-300 ease-in-out"
              >{{ link.text }}</a
            >
          </li>
        </ul>
        <!-- Legal links -->
        <ul>
          <li
            class="text-white font-bold sm:pb-3 xl:text-2xl md:text-[20px] sm:text-lg text-base leading-[120%]"
          >
            Legal
          </li>
          <li
            v-for="(link, index) in links2"
            :key="index + '2'"
            class="sm:pt-[17px] pt-3"
          >
            <a
              :href="link.url"
              class="text-white font-normal leading-[140%] tracking-[0.2px] md:text-lg sm:text-base text-sm hover:opacity-60 transition-all duration-300 ease-in-out"
              >{{ link.text }}</a
            >
          </li>
        </ul>
        <!-- Product links -->
        <ul>
          <li
            class="text-white font-bold sm:pb-3 xl:text-2xl md:text-[20px] sm:text-lg text-base leading-[120%]"
          >
            Product
          </li>
          <li
            v-for="(link, index) in links3"
            :key="index + '3'"
            class="sm:pt-[17px] pt-3"
          >
            <a
              :href="link.url"
              class="text-white font-normal leading-[140%] tracking-[0.2px] md:text-lg sm:text-base text-sm hover:opacity-60 transition-all duration-300 ease-in-out"
              >{{ link.text }}</a
            >
          </li>
        </ul>
        <!-- Newsletter subscription -->
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
    <!-- Divider line -->
    <div class="bg-white w-full h-[1px]"></div>
    <!-- Copyright information -->
    <div class="md:py-5 sm:py-4 py-3">
      <p
        class="text-white text-center font-normal md:text-lg sm:text-base text-sm leading-[140%] tracking-[0.2px]"
      >
        Copyright 2022 uifry.com all rights reserved
      </p>
    </div>
  </div>
</template>

<script setup>
import Facebook from "../components/icons/Facebook.vue";
import Twitter from "../components/icons/Twitter.vue";
import Instagram from "../components/icons/Instagram.vue";
import LinkedIn from "../components/icons/LinkedIn.vue";

// Social media icons data
const socialMediaIcons = [
  { icon: Facebook, url: "https://www.facebook.com/" },
  { icon: Twitter, url: "https://twitter.com/" },
  { icon: Instagram, url: "https://www.instagram.com/" },
  { icon: LinkedIn, url: "https://www.linkedin.com/" },
];

// Navigation links data
const links1 = [
  { url: "#", text: "Home" },
  { title: "", url: "#", text: "About us" },
  { title: "", url: "#", text: "Bookings" },
  { title: "", url: "#", text: "Blog" },
];

// Legal links data
const links2 = [
  { url: "#", text: "Terms of use" },
  { title: "", url: "#", text: "Privacy policy" },
  { title: "", url: "#", text: "Cookie policy" },
];

// Product links data
const links3 = [
  { url: "#", text: "Take tour" },
  { title: "", url: "#", text: "Live chat" },
  { title: "", url: "#", text: "Reviews" },
];
</script>

<style scoped>
/* Add any scoped styles here */
</style>
