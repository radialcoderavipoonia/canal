<script setup>
import NavBar from "./components/NavBar.vue";
import Hero from "./components/Hero.vue";
import SwimmingUpstream from "./components/SwimmingUpstream.vue";
import FightingFinance from "./components/FightingFinance.vue";
import TurnTheTide from "./components/TurnTheTide.vue";
import Footer from "./components/Footer.vue";
</script>

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

<style scoped></style>
