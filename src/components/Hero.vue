<script setup>
import InputMessage from "../components/icons/InputMessage.vue";
</script>

<template>
    <div
      class="container xl:max-w-[1354px] px-3 mx-auto lg:pt-[85px] lg:pb-[142px] md:py-20 sm:py-16 py-14"
    >
      <div
        class="flex items-center justify-between xl:gap-0 gap-10 lg:flex-row flex-col"
      >
        <div class="w-full xl:max-w-[664px]">
          <h1
            class="font-bold lg:text-[64px] md:text-5xl sm:text-4xl text-3xl lg:text-start text-center leading-[120%] text-lightBlack"
          >
            The Route to Upward Financial Mobility is Open
          </h1>
          <p
            class="md:pt-[30px] sm:pt-6 pt-4 max-w-[533px] lg:mx-0 mx-auto lg:text-start text-center xl:text-2xl md:text-[20px] sm:text-lg text-base leading-[140%] text-greyscale"
          >
            Turn fees of check cashing and remittances into increased saving and
            spending.
          </p>
          <p
            class="md:pt-[50px] sm:pt-8 pt-6 xl:text-2xl md:text-[20px] sm:text-lg text-base leading-[140%] lg:text-start text-center text-Prime font-bold"
          >
            Join the Waitlist
          </p>
          <div class="xl:max-w-[533px] flex gap-5 items-center mt-[15px]">
            <div
              class="w-full bg-softPeach border flex gap-[10px] md:px-5 px-2 border-lavender"
            >
              <span class="py-[18px]"><InputMessage /></span>
              <input
                placeholder="Enter Your Email Address"
                class="bg-transparent outline-none py-[18px] placeholder:text-greyscale font-normal md:text-lg sm:text-base text-sm leading-[140%] tracking-[0.2px]"
              />
            </div>
            <button
              class="font-normal md:text-lg sm:text-base text-sm leading-[140%] tracking-[0.2px] px-3 max-w-[122px] w-full h-[61px] text-white bg-Prime hover:bg-yellow transition-all duration-300"
            >
              Join Now
            </button>
          </div>
        </div>
        <div class="w-full xl:max-w-[546px] max-w-[450px]">
          <img
            src="../assets/images/hero/phones.png"
            class="xl:h-[657px] xl:w-[546px] w-[450px] md:h-[600px] sm:h-[500px] h-[400px]"
          />
        </div>
      </div>
    </div>
</template>
