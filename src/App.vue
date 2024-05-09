<template>
  <div class="overflow-x-hidden">
    <div class="hero_bg">
      <NavBar />
      <Hero />
    </div>
    <SwimmingUpstream />
    <FightingFinance />
    <TurnTheTide />
    <Footer />
  </div>
</template>
<script setup>
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "./components/NavBar.vue";
import Hero from "./components/Hero.vue";
import SwimmingUpstream from "./components/SwimmingUpstream.vue";
import FightingFinance from "./components/FightingFinance.vue";
import TurnTheTide from "./components/TurnTheTide.vue";
import Footer from "./components/Footer.vue";
</script>
<script>
export default {
  mounted() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true, // whether animation should only happen once - while scrolling down
    });
  },
};
</script>
<style scoped></style>
