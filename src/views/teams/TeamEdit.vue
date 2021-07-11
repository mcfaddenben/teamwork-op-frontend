<template>
  <div class="team-edit">
    <h1>Edit Team</h1>
    <form v-on:submit.prevent="updateTeam(team)">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      Name:
      <input type="text" v-model="team.name" />
      about:
      <input type="text" v-model="team.about" />
      private:
      <input type="checkbox" v-model="team.private" true-value="true" false-value="false" />
      <input type="submit" value="Update" />
    </form>
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
      errors: [],
    };
  },
  created: function () {
    axios.get("/teams/" + this.$route.params.id).then((response) => {
      console.log("teams show", response);
      this.team = response.data;
    });
  },
  methods: {
    updateTeam: function (team) {
      var params = {
        name: team.name,
        about: team.about,
        private: team.private,
      };
      axios
        .patch("/teams/" + team.id, params)
        .then((response) => {
          console.log("teams update", response);
          this.$router.push("/teams");
        })
        .catch((error) => {
          console.log("teams update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
    destroyTeam: function (team) {
      axios.delete("/teams/" + team.id).then((response) => {
        console.log("team destroy", response);
        this.$router.push("/teams");
      });
    },
  },
};
</script>
