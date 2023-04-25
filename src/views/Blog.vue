<script>
import sanity from "../client";

const query = `*[_type == "post"]{
  _id,
  title,
  slug,
  excerpt
}[0...50]`;

export default {
  name: "blog",
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
    <div class="max-w-7xl mx-auto px-6 md:px-6 lg:px-0">
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

    </div>
    <div class="max-w-7xl mx-auto px-6 md:px-6 lg:px-0">
      <div class="mt-12">
        <h1 class="text-7xl font-bold">Articles</h1>
      </div>
      <div class="max-w-lg">
        <div class="mt-8">
          <div class="posts">
            <div class="loading" v-if="loading">Loading...</div>
            <div v-if="error" class="error">
              {{ error }}
            </div>
            <div class="container-lg space-y-6">
              <div v-for="post in posts" class="border-b border-b-purple-200 pb-6" :key="post._id">
                <router-link :to="`/blog/${post.slug.current}`">
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
