import { createWebHistory, createRouter } from "vue-router";

import DashboardView from "../views/DashboardView.vue";
import OrderManagementView from "../views/OrderManagementView.vue";
import BrandView from "../views/BrandView.vue";
import AddProductsView from "../views/AddProductsView.vue";
import ProductListView from "../views/ProductListView.vue";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: DashboardView,
    meta: { title: "JoBins | Dashboard" },
  },
  {
    path: "/order-management",
    name: "order-management",
    component: OrderManagementView,
    meta: {
      title: "JoBins | Order Management",
    },
  },
  {
    path: "/brand",
    name: "brand",
    component: BrandView,
    meta: { title: "JoBins | Brand" },
  },
  {
    path: "/add-products",
    name: "add-products",
    component: AddProductsView,
    meta: { title: "JoBins | Add Products" },
  },
  {
    path: "/product-list",
    name: "product-list",
    component: ProductListView,
    meta: { title: "JoBins | Product List" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  document.title = to.meta?.title ?? "JoBins";
});

export default router;
