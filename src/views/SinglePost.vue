<script>
import { SanityBlocks } from "sanity-blocks-vue-component";
import sanity from "../client";
import imageUrlBuilder from "@sanity/image-url";
import NavBar from "../components/NavBar.vue";

const imageBuilder = imageUrlBuilder(sanity);

const query = `*[slug.current == $slug] {
  _id,
  title,
  slug,
  body, 
 "image": mainImage{
  asset->{
  _id,
  url
}
},
"name":author->name,
"authorImage":author->image
}[0]
`;

export default {
  name: "SinglePost",
  components: { SanityBlocks },
  data() {
    return {
      loading: true,
      post: [],
      blocks: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    imageUrlFor(source) {
      return imageBuilder.image(source);
    },
    fetchData() {
      this.error = this.post = null;
      this.loading = true;

      sanity.fetch(query, { slug: this.$route.params.slug }).then(
        (post) => {
          this.loading = false;
          this.post = post;
          this.blocks = post.body;
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
  <div class="h-min-screen backdrop-blur-md backdrop-brightness-200">
    <div class="max-w-7xl mx-auto px-6 md:px-6 lg:px-0">
      <header>
        <div class="py-2 ml-2 grid">
          <div class="py-6 grid grid-cols-2 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-x-8">
            <div class="col-span-2 md:col-span-3 lg:col-span-4">
              <h1 class="text-5xl md:text-3xl lg:text-4xl xl:text-2xl font-extrabold">Simulasi Studio</h1>
              <p class="text-sm text-gray-500 mr-0 md:mr-12">Artist studio & handpulled screen printing services based on
                Yogyakarta,
                Indonesia</p>
            </div>
            <div class="col-span-1 md:col-start-4 lg:col-start-5 mt-12 md:mt-0">
              <ul>
                <li class="font-bold">Services</li>
                <li class="text-gray-600">Pricing</li>
                <li class="text-gray-600">Workshop</li>
              </ul>
            </div>
            <div class="col-span-2 md:col-span-1 mt-4 md:mt-0">
              <ul>
                <li class="font-bold">Articles</li>
                <li class="text-gray-600">
                  <router-link to="/blog" class="hover:text-purple-400">Blog</router-link>
                </li>
                <li class="text-gray-600">
                  <router-link to="/resources">Resources</router-link>
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
    <div class="py-8 max-w-7xl mx-auto px-6 md:px-6 lg:px-0">
      <div class="max-w-2xl">
        <div class="loading" v-if="loading">Loading...</div>

        <div v-if="error" class="error">
          {{ error }}
        </div>

        <article v-if="post" class="prose">
          <h1 class="font-semibold text-3xl">{{ post.title }}</h1>
          <img v-if="post.image" :src="imageUrlFor(post.image).width(480)" />

          <h6 class="text-sm text-gray-600 mt-2 mb-6">
            Posted: {{ post.name }}
          </h6>
          <div class="leading-relaxed text-justify">
            <SanityBlocks :blocks="blocks" />
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
