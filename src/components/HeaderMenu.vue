<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div>
    <header>
      <div>
        <div class="max-w-7xl mx-auto items-center px-5">
          <div class="grid grid-cols-6 md:gap-x-4 gap-y-6 py-12">
            <div class="col-span-4 lg:col-span-2 mr-20">
              <router-link to="/">
                <h1 class="text-4xl font-semibold">Simulasi Studio</h1>
              </router-link>

              <p class="text-xs text-gray-600 mt-2">
                Handpulled screen printing services & studio Based in
                Yogyakarta, Indonesia
              </p>
            </div>
            <div class="col-span-4 md:col-span-2 lg:col-span-1"></div>
            <div class="col-span-4 md:col-span-2 lg:col-span-1">
              <ul>
                <li class="font-semibold">Research</li>
                <li class="text-gray-600">
                  <router-link to="/publication" class="hover:text-purple-400"
                    >Publication</router-link
                  >
                </li>
                <li class="text-gray-600">
                  <router-link to="/opensources" class="hover:text-purple-400">
                    Opensource
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="col-span-4 md:col-span-2 lg:col-span-1">
              <ul>
                <li class="font-semibold">Events</li>
                <li class="text-gray-600">
                  <router-link to="/" class="hover:text-purple-400">
                    Exhibition
                  </router-link>
                </li>
                <li class="text-gray-600">
                  <router-link to="/" class="hover:text-purple-400">
                    Pop-up Market
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="col-span-4 md:col-span-2 lg:col-span-1">
              <ul>
                <li class="font-semibold">Download</li>
                <li class="text-gray-600">
                  <router-link to="/" class="hover:text-purple-400"
                    >Zine</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
