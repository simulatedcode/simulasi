<script setup>
import RegisterBar from "./RegisterBar.vue";
</script>
<template>
  <div class="h-screen">
    <div class="p-8">
      <RegisterBar class="fixed" />
      <h1 class="fixed items-center ml-10">Simulasi</h1>
      <RegisterBar class="fixed right-6" />
      <RegisterBar class="fixed bottom-6" />
      <RegisterBar class="fixed bottom-6 right-6" />
      <div class="fixed flex justify-center">
        <img
          src="../assets/layer1.png"
          alt="layer 1"
          class="max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto mt-14"
        />
      </div>
    </div>
  </div>
</template>
