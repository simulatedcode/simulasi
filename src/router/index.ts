import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        reload: true,
      },
    },
    {
      path: "/publication",
      name: "publication",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Publication.vue"),
      meta: {
        reload: true,
      },
    },
    {
      path: "/opensources",
      name: "opensources",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/OpenSources.vue"),
      meta: {
        reload: true,
      },
    },
    {
      path: "/opensources/:slug",
      name: "singlepost",
      component: () => import("../views/SinglePost.vue"),
      meta: {
        reload: true,
      },
    },
    {
      path: "/zine",
      name: "zine",
      component: () => import("../views/ZinePages.vue"),
      meta: {
        reload: true,
      },
    },
  ],
});

export default router;
