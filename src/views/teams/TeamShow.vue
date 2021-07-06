<template>
  <div class="team-show">
    <h2>{{ team.name }}</h2>
    <h3>{{ team.about }}</h3>
    <router-link v-bind:to="`/teams/${team.id}/edit`">Edit team profile</router-link>
    <br />
    <router-link to="/">back to Home</router-link>
    <br />
    <button v-on:click="destroyUser(team)">Delete User Profile</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      team: {},
    };
  },
  created: function () {
    axios.get("/teams/" + this.$route.params.id).then((response) => {
      console.log("team show", response);
      this.team = response.data;
    });
  },
  methods: {
    destroyUser: function (team) {
      axios.delete("/teams/" + team.id).then((response) => {
        console.log("team destroy", response);
        this.$router.push("/");
      });
    },
  },
};
</script>
