import { createMemoryHistory, createRouter } from "vue-router";

import DashboardView from "../views/DashboardView.vue";
import OrderManagementView from "../views/OrderManagementView.vue";
import BrandView from "../views/BrandView.vue";
import AddProductsView from "../views/AddProductsView.vue";
import ProductListView from "../views/ProductListView.vue";

const routes = [
  { path: "/", name: "dashboard", component: DashboardView },
  {
    path: "/order-management",
    name: "order-management",
    component: OrderManagementView,
  },
  { path: "/brand", name: "brand", component: BrandView },
  { path: "/add-products", name: "add-products", component: AddProductsView },
  { path: "/product-list", name: "product-list", component: ProductListView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
