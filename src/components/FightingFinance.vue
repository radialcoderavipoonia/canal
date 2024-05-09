<!-- eslint-disable vue/no-deprecated-html-element-is -->

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
            class="sm:pt-[21px] pt-4 font-normal md:text-lg sm:text-base text-sm lg:text-start text-center leading-[140%] tracking-[0.2px] text-lightBlack mb-0 sm:pb-5 pb-2"
          >
            You could be paying separate fees for each financial product you
            use.
          </p>
          <div
            v-for="(card, index) in cards"
            :key="index"
            data-aos="fade-up"
            :data-aos-delay="index * 200"
          >
            <div
              class="bg-white flex md:mt-[30px] sm:mt-6 mt-4 justify-between items-center xl:px-[30px] sm:px-6 px-3 md:py-[25px] sm:py-6 py-4 hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <div class="flex items-center gap-5">
            
                <component :is="card.icon" />
                <p
                  class="font-bold xl:text-2xl md:text-[20px] sm:text-lg text-base leading-[120%] text-black mb-0"
                >
                  {{ card.title }}
                </p>
              </div>
              <p
                class="mb-0 font-bold xl:text-2xl md:text-[20px] sm:text-lg text-base leading-[120%] text-darkPink"
              >
                {{ card.fee }}
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-left">
          <img
            src="../assets/images/fighting/finance.webp"
            class="lg:w-[618px] lg:h-[640px] sm:w-[500px] sm:h-[500px] h-[350px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import CheckingCashing from "../components/icons/CheckingCashing.vue";
import Remittance from "../components/icons/Remittance.vue";
import PrepaidCardReload from "../components/icons/PrepaidCardReload.vue";

const cards = [
  { icon: CheckingCashing, title: "Check Cashing", fee: "4.5-9.9% Fee" },
  { icon: Remittance, title: "Remittance", fee: "4.5-11.5% Fee" },
  {
    icon: PrepaidCardReload,
    title: "Prepaid Card Reload",
    fee: "4.5-11.5% Fee",
  },
];
</script>
