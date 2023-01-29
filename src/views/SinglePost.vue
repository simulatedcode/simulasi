<script>
import { SanityBlocks } from "sanity-blocks-vue-component";
import sanity from "../client";
import imageUrlBuilder from "@sanity/image-url";

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
  <div class="h-screen backdrop-blur-md backdrop-brightness-200">
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
                  <router-link to="/opensource" class="hover:text-purple-400">
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

    <div class="py-8 bg-purple-100 h-screen px-5">
      <div class="max-w-7xl mx-auto">
        <div class="loading" v-if="loading">Loading...</div>

        <div v-if="error" class="error">
          {{ error }}
        </div>

        <article v-if="post" class="prose">
          <h1 class="font-semibold prose-h1">{{ post.title }}</h1>
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
