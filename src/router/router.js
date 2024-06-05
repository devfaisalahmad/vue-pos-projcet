import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../pages/Home.vue");
const Shop = () => import("../pages/Shop.vue");
const Drawar = () => import("../pages/Drawar.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/shop",
    name: "shop",
    component: Shop,
  },
  {
    path: "/drawar",
    name: "drawar",
    component: Drawar,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
