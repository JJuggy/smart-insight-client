<template>
  <div>
    <h1>AutoBot Comments</h1>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <ul v-if="posts">
      <router-link :to="{ name: 'AutoBotComments', params: { id: item.id } }">{{
        item.name
      }}</router-link>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AutoBotComments",
  props: ["id"],
  data() {
    return {
      comments: null,
      loading: true,
      error: null,
    };
  },
  methods: {
    async fetchComments() {
      this.loading = true;
      try {
        console.log("fetching comments");
        const res = await axios.get(
          `http://localhost:3004/posts/${this.id}/comments`
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
    this.fetchComments();
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
