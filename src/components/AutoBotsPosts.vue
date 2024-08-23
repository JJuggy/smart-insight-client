<template>
  <div>
    <h1>AutoBot Posts</h1>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <ul v-if="posts">
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AutoBotPosts",
  props: ["id"],
  data() {
    return {
      posts: null,
      loading: true,
      error: null,
    };
  },
  methods: {
    async fetchPosts() {
      this.loading = true;
      try {
        console.log("fetching posts");
        const res = await axios.get(
          `http://localhost:3004/autobots/${this.id}/posts`
        );
        this.posts = res.data;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
