<template>
  <div class="hello">
    <div>
      <h1>AutoBots</h1>
      <div v-if="loading">Loading...</div>
      <div v-if="error">{{ error }}</div>
      <ul v-if="data">
        <li v-for="item in data" :key="item.id">
          <router-link
            :to="{ name: 'AutoBotPosts', params: { id: item.id } }"
            >{{ item.name }}</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AutoBots",

  data() {
    return {
      data: null,
      loading: true,
      error: null,
    };
  },
  methods: {
    async fetchAutoBots() {
      this.loading = true;
      try {
        console.log("fetching");
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        this.data = res.data;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
    viewPosts(id) {
      this.$router.push({ name: "AutoBotPosts", params: { id } });
    },
  },
  mounted() {
    this.fetchAutoBots();
    // this.fetchAutoBotPosts();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
