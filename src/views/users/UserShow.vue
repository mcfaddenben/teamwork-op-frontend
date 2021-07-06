<template>
  <div class="user-show">
    <h2>{{ user.summoner_name }}</h2>
    <h3>{{ user.region }}</h3>
    <h3>{{ user.bio }}</h3>
    <h3>{{ user.rank }}</h3>
    <h3>{{ user.champ_mastery }}</h3>
    <router-link v-bind:to="`/users/${user.id}/edit`">Edit user profile</router-link>
    <br />
    <router-link to="/">back to Home</router-link>
    <br />
    <button v-on:click="destroyUser()">Delete User Profile</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      user: {},
    };
  },
  created: function () {
    axios.get("/users/" + this.$route.params.id).then((response) => {
      console.log("user show", response);
      this.user = response.data;
    });
  },
  methods: {
    destroyUser: function () {
      axios.delete(`/users/${this.user.id}`).then((response) => {
        console.log("user destroy", response);
        this.$router.push("/logout");
      });
    },
  },
};
</script>
