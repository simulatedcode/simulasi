import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import InstagramFeed from "vue3-instagram-feed";

import "./assets/index.css";

createApp(App).use(router, InstagramFeed).mount("#app");
