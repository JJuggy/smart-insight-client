import { createRouter, createWebHistory } from "vue-router";
import AutoBots from "@/components/AutoBots.vue";
import AutoBotsPosts from "@/components/AutoBotsPosts.vue";

const routes = [
  {
    path: "/",
    name: "AutoBots",
    component: AutoBots,
  },
  {
    path: "/autobots/:id/posts",
    name: "AutoBotPosts",
    component: AutoBotsPosts,
    props: true,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
