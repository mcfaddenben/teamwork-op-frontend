<template>
  <div class="user-show">
    <h2>{{ user.summoner_name }}</h2>
    <router-link to="/teams/new">create a new team</router-link>
    <h3>{{ user.region }}</h3>
    <h3>{{ user.bio }}</h3>
    <div v-for="rank_data in user.rank_data" v-bind:key="rank_data">
      <div v-if="rank_data.queueType === 'RANKED_FLEX_SR'">
        <h3>Ranked Flex</h3>
      </div>
      <div v-else-if="rank_data.queueType === 'RANKED_SOLO_5x5'">
        <h3>Solo Queue</h3>
      </div>
      <h3>{{ rank_data.tier }}</h3>
      <h3>{{ rank_data.rank }}</h3>
    </div>
    <h2>PLayer created teams</h2>
    <div v-for="team in user.teams" v-bind:key="team">
      <h3>{{ team.name }}</h3>
      <router-link v-bind:to="`/teams/${team.id}`">Team details</router-link>
    </div>
    <h2>Active team member status</h2>
    <div v-for="active_team in user.active_teams" v-bind:key="active_team">
      <h3>{{ active_team.name }}</h3>
      <router-link v-bind:to="`/teams/${active_team.id}`">Team details</router-link>
    </div>
    <!-- this section is the champion mastery, but it will require either definitions for ids or champion pictures from dragontail -->
    <!-- <div v-for="champ_mastery in user.champ_mastery" v-bind:key="champ_mastery">
      <h3>{{ champ_mastery.id }}, level {{ champ_mastery.level }}</h3>
    </div> -->

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
