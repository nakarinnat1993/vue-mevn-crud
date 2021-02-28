import { createWebHistory, createRouter } from "vue-router";
import CreateComponent from "@/components/CreateComponent.vue";
import EditComponent from "@/components/EditComponent.vue";
import ListComponent from "@/components/ListComponent.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: CreateComponent,
  },
  {
    path: "/view",
    name: "View",
    component: ListComponent,
  },
  {
    path: "/edit/:id",
    name: "Edit",
    component: EditComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;