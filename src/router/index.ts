import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/publication",
      name: "publication",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Publication.vue"),
    },
    {
      path: "/opensources",
      name: "opensources",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/OpenSources.vue"),
    },
    {
      path: "/opensources/:slug",
      name: "singlepost",
      component: () => import("../views/SinglePost.vue"),
    },
  ],
});

export default router;
