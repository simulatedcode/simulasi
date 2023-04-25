<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
const props = defineProps({
  accessToken: String,
  count: Number,
  pagination: Boolean,
});
const isLoading = ref(true);
const hasError = ref(false);
const instagramData = ref(null);
const usePagination = ref(false);
const showCaption = ref(false);
const paginationNextUrl = ref("");
const paginationPrevUrl = ref("");
const fetchInstaData = (url) => {
  axios
    .get(url)
    .then((response) => {
      if (response.hasOwnProperty("error")) {
        isLoading.value = false;
        hasError.value = true;
      } else {
        instagramData.value = response.data;
        if (instagramData !== null) {
          paginationNextUrl.value = instagramData._rawValue.paging.next;
          paginationPrevUrl.value = instagramData._rawValue.paging.previous;
        }
        isLoading.value = false;
      }
    })
    .then(() => {
      if (props.pagination) {
        usePagination.value = props.pagination;
      }
      if (props.caption) {
        showCaption.value = props.caption;
      }
    })
    .catch((error) => {
      console.log("Error:", error);
      hasError.value = true;
      isLoading.value = false;
    });
};
onMounted(() => {
  const url = `https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url,caption&limit=${props.count}&access_token=${props.accessToken}`;
  fetchInstaData(url);
});
const handlePaginationNext = () => {
  fetchInstaData(paginationNextUrl.value);
};
const handlePaginationPrev = () => {
  fetchInstaData(paginationPrevUrl.value);
};
</script>

<template>
  <div>
    <div class="max-w-7xl mx-auto">
      <div class="mb-2">
        <h1 class="font-semibold text-lg">Last Instagram Feed</h1>
      </div>
      <h1 v-if="isLoading">LOADING...</h1>
      <h1 v-else="hasError">Ooops, something went wrong.</h1>
      <div v-else class="flex justify-between items-center">
        <div v-for="image in instagramData.data" :key="image.id">
          <a
            :href="image.permalink"
            :key="image.id"
            target="_blank"
            rel="noreferrer"
          >
            <img
              v-if="
                image.media_type === 'IMAGE' ||
                image.media_type === 'CAROUSEL_ALBUM'
              "
              :src="image.media_url"
              :alt="image.caption"
              :key="image.id"
            />
            <video v-else :key="image.id">
              <source :src="image.media_url" type="video/mp4" />
            </video>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.instagram-wrapper {
  max-width: 93.5rem;
  margin: 0 auto;
  padding: 0 2rem;
}
</style>
