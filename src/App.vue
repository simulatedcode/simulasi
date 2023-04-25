<script setup >
import { RouterView } from "vue-router";
import Lenis from "@studio-freight/lenis";

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: "vertical", // vertical, horizontal
  gestureDirection: "vertical", // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: true,
  touchMultiplier: 2,
  infinite: false,
});
//get scroll value
lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {
  console.log({ scroll, limit, velocity, direction, progress });
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
</script>

<template>
  <div class="snap-mandatory w-full mx-auto ">
    <div class="h-screen">
      <Layer1 />
    </div>
    <div class="snap-start w-full m-auto h-screen backdrop-blur-[2px]">
      <Layer2 />
    </div>
  </div>
  <div class="h-screen bg-white">
    <RouterView />
  </div>
</template>
