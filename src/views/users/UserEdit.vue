<template>
  <div class="user-edit">
    <h1>Edit Profile</h1>
    <form v-on:submit.prevent="updateUser(user)">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      Summoner Name:
      <input type="text" v-model="user.summoner_name" />
      region:
      <input type="text" v-model="user.region" />
      Bio:
      <input type="text" v-model="user.bio" />
      email:
      <input type="text" v-model="user.email" />
      <input type="submit" value="Update" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      user: {},
      errors: [],
    };
  },
  created: function () {
    axios.get("/users/" + this.$route.params.id).then((response) => {
      console.log("user show", response);
      this.photo = response.data;
    });
  },
  methods: {
    updateUser: function (user) {
      var params = {
        summoner_name: user.summoner_name,
        region: user.region,
        email: user.email,
        bio: user.bio,
      };
      axios
        .patch("/users/" + user.id, params)
        .then((response) => {
          console.log("user update", response);
          this.$router.push("/users");
        })
        .catch((error) => {
          console.log("user update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
