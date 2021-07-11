<template>
  <div class="team-new">
    <form v-on:submit.prevent="submit()">
      <h1>New Team</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Team name:</label>
        <input type="text" class="form-control" v-model="newTeamParams.name" />
      </div>
      <div class="form-group">
        <label>Private?:</label>
        <input type="boolean" class="form-control" v-model="newTeamParams.private" />
      </div>
      <div class="form-group">
        <label>About:</label>
        <input type="text" class="form-control" v-model="newTeamParams.about" />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newTeamParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/teams", this.newTeamParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/teams");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
