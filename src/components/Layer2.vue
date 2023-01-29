<script setup>
import RegisterTL from "./RegisterTL.vue";
import RegisterTR from "./RegisterTR.vue";
import RegisterBL from "./RegisterBL.vue";
import RegisterBR from "./RegisterBR.vue";
</script>
<template>
  <div class="snap-start h-screen backdrop-blur-[2px]">
    <div class="flex p-8 gap-20">
      <RegisterTL />
      <div><h1 class="flex ml-24">Studio</h1></div>
      <RegisterTR />
    </div>
    <RegisterBR />
    <RegisterBL class="px-8" />
    <div class="flex justify-center">
      <div class="fixed">
        <img
          src="../assets/layer2.png"
          alt="layer 2"
          class="max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto"
        />
      </div>
    </div>
  </div>
</template>
