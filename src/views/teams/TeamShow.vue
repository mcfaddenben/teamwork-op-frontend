<template>
  <div class="team-show">
    <h2>{{ team.name }}</h2>
    <h3>{{ team.about }}</h3>

    <div v-for="membership in team.memberships" v-bind:key="membership">
      <h2>{{ membership.assigned_role }}:</h2>
      <h3>{{ membership.user.summoner_name }}</h3>
      <h3>Primary role: {{ membership.primary_role }}</h3>
      <h3>Secondary role: {{ membership.secondary_role }}</h3>
      <h3>Willing to fill: {{ membership.fill }}</h3>
      <router-link v-bind:to="`/users/${membership.user.id}`">View Profile</router-link>
    </div>

    <router-link v-bind:to="`/teams/${team.id}/edit`">Edit team info</router-link>
    <br />
    <router-link to="/">back to Home</router-link>
    <br />
    <button v-on:click="destroyTeam(team)">Delete team</button>
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
    destroyTeam: function (team) {
      axios.delete("/teams/" + team.id).then((response) => {
        console.log("team destroy", response);
        this.$router.push("/");
      });
    },
  },
};
</script>
