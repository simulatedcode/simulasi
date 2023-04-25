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
      path: "/pricing",
      name: "pricing",
      component: () => import("../views/Pricing.vue"),
      meta: {
        reload: true,
      },
    },
    {
      path: "/workshop",
      name: "workshop",
      component: () => import("../views/Workshop.vue"),
      meta: {
        reload: true,
      },
    },


    {
      path: "/blog",
      name: "blog",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Blog.vue"),
      meta: {
        reload: true,
      },
    },
    {
      path: "/resources",
      name: "resources",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ReSources.vue"),
      meta: {
        reload: true,
      },
    },
    {
      path: "/blog/:slug",
      name: "singlepost",
      component: () => import("../views/SinglePost.vue"),
      meta: {
        reload: true,
      },
    },
  ],
});

export default router;
