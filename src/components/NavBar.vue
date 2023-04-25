<script>
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <div class="py-2 ml-2 grid">
      <div class="py-6 grid grid-cols-2 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-x-8">
        <div class="col-span-2 md:col-span-3 lg:col-span-4">
          <h1 class="text-5xl md:text-3xl lg:text-4xl xl:text-2xl font-extrabold">
            <router-link to="/">Simulasi Studio</router-link>
          </h1>
          <p class="text-sm text-gray-500 mr-0 md:mr-12">Artist studio & handpulled screen printing services based on
            Yogyakarta,
            Indonesia</p>
        </div>
        <div class="col-span-1 md:col-start-4 lg:col-start-5 mt-12 md:mt-0">
          <ul>
            <li class="font-bold">Services</li>
            <li class="text-gray-600">
              <router-link to="/pricing" class="hover:text-purple-400">Pricing</router-link>
            </li>
            <li class="text-gray-600 hover:text-purple-400"><router-link to="/workshop">Workshop</router-link>
            </li>
          </ul>
        </div>
        <div class="col-span-2 md:col-span-1 mt-4 md:mt-0">
          <ul>
            <li class="font-bold">Article</li>
            <li class="text-gray-600">
              <router-link to="/blog" class="hover:text-purple-400">Blog</router-link>
            </li>
            <li class="text-gray-600">
              <router-link to="/resources" class="hover:text-purple-400">Resources</router-link>
            </li>
          </ul>
        </div>
        <div class="col-span-2 md:col-span-1 mt-4 md:mt-0">
          <ul>
            <li class="font-bold">Event</li>
            <li class="text-gray-600">Pop-up</li>
            <li class="text-gray-600">Exhibition</li>
          </ul>
        </div>

      </div>

    </div>
  </header>
</template>
