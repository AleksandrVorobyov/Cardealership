import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/techCenter",
    name: "TechCenter",
    component: () => import("../views/TechCenter.vue"),
  },
  {
    path: "/reviews",
    name: "Reviews",
    component: () => import("../views/Reviews.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/404",
    name: "404",
    component: () => import("../views/NotFound.vue"),
  },
  {
    path: "/:catchAll(.*)",
    redirect: "404",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
