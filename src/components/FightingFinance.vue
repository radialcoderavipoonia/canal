<script setup>
import CheckingCashing from "../components/icons/CheckingCashing.vue";
import Remittance from "../components/icons/Remittance.vue";
import PrepaidCardReload from "../components/icons/PrepaidCardReload.vue";
</script>
<template>
  <div class="bg-lightBlue lg:pt-[130px] lg:pb-[132px] md:py-20 sm:py-16 py-14">
    <div class="container xl:max-w-[1344px] xl:px-0 px-3 mx-auto">
      <div
        class="flex lg:gap-24 gap-12 lg:flex-row flex-col items-center justify-center"
      >
        <div>
          <h2
            class="font-bold lg:text-[50px] md:text-[40px] sm:text-[30px] text-[28px] lg:text-start text-center leading-[120%] max-w-[644px]"
          >
            Fighting the Current with your Finances?
          </h2>
          <p
            class="sm:pt-[21px] pt-4 font-normal md:text-lg sm:text-base text-sm lg:text-start text-center leading-[140%] tracking-[0.2px] text-lightBlack mb-0"
          >
            You could be paying separate fees for each financial product you
            use.
          </p>
          <div class="md:pt-[50px] sm:pt-10 pt-8">
            <div
              class="bg-white flex justify-between items-center xl:px-[30px] sm:px-6 px-3 md:py-[25px] sm:py-6 py-4 hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <div class="flex items-center gap-5">
                <span><CheckingCashing /></span>
                <p
                  class="font-bold xl:text-2xl md:text-[20px] sm:text-lg text-base leading-[120%] text-black mb-0"
                >
                  Check Cashing
                </p>
              </div>
              <p
                class="mb-0 font-bold xl:text-2xl md:text-[20px] sm:text-lg text-base leading-[120%] text-darkPink"
              >
                4.5-9.9% Fee
              </p>
            </div>
          </div>
          <div class="md:pt-[30px] sm:pt-7 pt-6">
            <div
              class="bg-white flex justify-between items-center xl:px-[30px] sm:px-6 px-3 md:py-[25px] sm:py-6 py-4 hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <div class="flex items-center gap-5">
                <span><remittance /></span>
                <p
                  class="font-bold xl:text-2xl md:text-[20px] sm:text-lg text-base leading-[120%] text-black mb-0"
                >
                  Remittance
                </p>
              </div>
              <p
                class="mb-0 font-bold xl:text-2xl md:text-[20px] sm:text-lg text-base leading-[120%] text-darkPink"
              >
                4.-11.5% Fee
              </p>
            </div>
          </div>
          <div class="md:pt-[30px] sm:pt-7 pt-6">
            <div
              class="bg-white flex justify-between items-center xl:px-[30px] sm:px-6 px-3 md:py-[25px] sm:py-6 py-4 hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <div class="flex items-center gap-5">
                <span><PrepaidCardReload /></span>
                <p
                  class="font-bold xl:text-2xl md:text-[20px] sm:text-lg text-base leading-[120%] text-black mb-0"
                >
                  Prepaid Card Reload
                </p>
              </div>
              <p
                class="mb-0 font-bold xl:text-2xl md:text-[20px] sm:text-lg text-base leading-[120%] text-darkPink"
              >
                4.-11.5% Fee
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="../assets/images/fighting/finance.webp"
            class="lg:w-[618px] lg:h-[640px] sm:w-[500px] sm:h-[500px] h-[350px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>
