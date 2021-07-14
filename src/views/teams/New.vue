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
        <label>About:</label>
        <input type="text" class="form-control" v-model="newTeamParams.about" />
      </div>
      <div class="custom-control custom-checkbox mb-3">
        <input
          type="checkbox"
          v-model="newTeamParams.private"
          true-value="true"
          false-value="false"
          class="custom-control-input"
          id="customCheck1"
        />
        <label class="custom-control-label" for="customCheck1">Private?</label>
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
