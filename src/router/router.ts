import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../pages/Home.vue");
const Shop = () => import("../pages/Shop.vue");
const Products = () => import("../pages/Products.vue");

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
    path: "/products",
    name: "products",
    component: Products,
  },
];

import { type IStaticMethods } from "preline/preline";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to, from, failure) => {
  if (!failure) {
    setTimeout(() => {
      window.HSStaticMethods.autoInit();
    }, 100);
  }
});

export default router;
