<template>
  <!-- Main container with turn tide background -->
  <div class="turn_tide_bg">
    <!-- Container for content -->
    <div
      class="container xl:max-w-[1344px] px-3 mx-auto lg:py-[150px] md:py-20 sm:py-16 py-14"
    >
      <!-- Main heading -->
      <h2
        class="text-center font-bold lg:text-[50px] md:text-[40px] sm:text-[30px] text-[28px] leading-[120%] text-lightBlack"
        data-aos="fade-down"
      >
        Turn The Tide In Minutes
      </h2>
      <!-- Images section -->
      <div class="pt-[50px] relative">
        <!-- Flex container for images -->
        <div
          class="relative z-30 flex md:flex-row flex-col items-center xl:gap-[88px] lg:gap-16 gap-10"
        >
          <!-- Left box image -->
          <div class="md:w-full sm:w-[60%] w-[70%]" data-aos="fade-right">
            <img
              src="../assets/images/turn-tide/phone-left-box.webp"
              alt="left box canal"
            />
          </div>
          <!-- Canal phone image -->
          <div class="md:w-full sm:w-[60%] w-[70%]" data-aos="zoom-out">
            <img
              src="../assets/images/turn-tide/canal-phone.webp"
              alt="canal phone"
              class="object-cover"
            />
          </div>
          <!-- Right box image -->
          <div class="md:w-full sm:w-[60%] w-[70%]" data-aos="fade-left">
            <!-- Displayed only on larger screens -->
            <img
              src="../assets/images/turn-tide/phone-right-box.webp"
              alt="right box canal"
              class="md:block hidden"
            />
            <!-- Displayed only on smaller screens -->
            <img
              src="../assets/images/turn-tide/canal-bottom.webp"
              alt="bottom box canal"
              class="md:hidden block"
            />
          </div>
        </div>
        <!-- Canal arrow image - displayed on larger screens -->
        <div
          class="absolute md:block hidden top-[65%] left-[58%] w-full translate-x-[-50%] translate-y-[-50%]"
        >
          <img
            src="../assets/images/turn-tide/canal-arrow.webp"
            alt="canal arrow"
            class="xl:w-[998px] lg:w-[800px] w-[600px] xl:h-[372px] lg:h-[300px] h-[220px]"
          />
        </div>
        <!-- Canal arrow image - displayed on smaller screens -->
        <div
          class="absolute top-[8%] sm:left-[-6%] left-[-25%] md:hidden block"
        >
          <img
            src="../assets/images/turn-tide/canal-arrow-small.webp"
            alt="canal arrow small screen"
            class="sm:w-[390px] sm:h-[1300px] w-[300px] h-[900px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>
