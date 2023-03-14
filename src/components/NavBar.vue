<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <div>
      <div class="max-w-7xl mx-auto items-center px-5">
        <div class="grid grid-cols-6 gap-y-2 py-1 md:py-6">
          <div class="col-span-6 lg:col-span-2 mr-20 mb-4">
            <router-link to="/">
              <h1 class="text-7xl font-bold">Simulasi Studio</h1>
            </router-link>

            <p class="text-2xl mt-4">
              Handpulled screen printing services and artist studio based in
              Yogyakarta, Indonesia.
            </p>
          </div>

          <div class="col-span-6 md:col-span-3 lg:col-span-1">
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
          <div class="col-span-6 md:col-span-3 lg:col-span-1">
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
          <div class="col-span-6 md:col-span-2 lg:col-span-1">
            <ul>
              <li class="font-semibold">Download</li>
              <li class="text-gray-600">
                <router-link to="/" class="hover:text-purple-400"
                  >Zine</router-link
                >
              </li>
              <li class="text-gray-600">
                <router-link to="/" class="hover:text-purple-400"
                  >Upload</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
