<template>
  <div class="Team-index">
    <h1>{{ message }}</h1>
    <div v-for="team in teams" v-bind:key="team.id">
      <h2>{{ team.name }}</h2>
      <router-link v-bind:to="`/teams/${team.id}`">More details</router-link>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Public teams",
      teams: [],
    };
  },
  created: function () {
    this.indexTeams();
  },
  methods: {
    indexTeams: function () {
      axios.get("/teams").then((response) => {
        console.log("teams index", response);
        this.teams = response.data;
      });
    },
  },
};
</script>
