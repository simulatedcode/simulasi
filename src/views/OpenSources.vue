<script>
import sanity from "../client";

const query = `*[_type == "post"]{
  _id,
  title,
  slug,
  excerpt
}[0...50]`;

export default {
  name: "OpenSources",
  data() {
    return {
      loading: true,
      posts: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.error = this.post = null;
      this.loading = true;
      sanity.fetch(query).then(
        (posts) => {
          this.loading = false;
          this.posts = posts;
        },
        (error) => {
          this.error = error;
        }
      );
    },
  },
};
</script>

<template>
  <main class="h-screen backdrop-blur-md backdrop-brightness-200">
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
    <div class="py-8 max-w-7xl mx-auto px-5">
      <div class="max-w-lg">
        <div class="mt-8">
          <div class="posts">
            <div class="loading" v-if="loading">Loading...</div>
            <div v-if="error" class="error">
              {{ error }}
            </div>
            <div class="container-lg space-y-6">
              <div
                v-for="post in posts"
                class="border-b border-b-purple-200 pb-6"
                :key="post._id"
              >
                <router-link :to="`/opensources/${post.slug.current}`">
                  <h2 class="text-lg font-semibold mt-4">{{ post.title }}</h2>
                </router-link>
                <p class="text-xs max-w-sm">{{ post.excerpt }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
