<script setup>
import RegisterBar from "./RegisterBar.vue";
</script>
<template>
  <div class="p-8">
    <RegisterBar class="fixed" />
    <h1 class="fixed items-center ml-10">Simulasi</h1>
    <RegisterBar class="fixed right-6" />
    <RegisterBar class="fixed bottom-6" />
    <RegisterBar class="fixed bottom-6 right-6" />
    <div class="flex justify-center">
      <div class="fixed p-14">
        <img
          src="../assets/layer1.png"
          alt="layer 1"
          class="max-w-2xl md:max-w-4xl lg:max-w-6xl"
        />
      </div>
    </div>
  </div>
</template>
