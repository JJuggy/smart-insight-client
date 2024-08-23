import { createRouter, createWebHistory } from "vue-router";
import AutoBots from "@/components/AutoBots.vue";
import AutoBotsPosts from "@/components/AutoBotsPosts.vue";
import AutoBotsComments from "@/components/AutoBotsComments.vue";

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
  {
    path: "/posts/:id/comments",
    name: "AutoBotComments",
    component: AutoBotsComments,
    props: true,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
