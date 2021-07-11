<template>
  <div class="team-show">
    <h2>{{ team.name }}</h2>
    <h3>{{ team.about }}</h3>
    <h1>want to join?</h1>
    <div>
      Primary Role:
      <input type="text" v-model="newMembership.primary_role" />
      Secondary Role:
      <input type="text" v-model="newMembership.secondary_role" />
      Willing to fill?:
      <input type="checkbox" v-model="newMembership.fill" true-value="true" false-value="false" />
      Assigned role:
      <input type="text" v-model="newMembership.assigned_role" />
      <button v-on:click="createMembership()">Join Up</button>
    </div>

    <div v-for="membership in team.memberships" v-bind:key="membership">
      <h2>{{ membership.assigned_role }}:</h2>
      <h3>{{ membership.user.summoner_name }}</h3>
      <h3>Primary role: {{ membership.primary_role }}</h3>
      <h3>Secondary role: {{ membership.secondary_role }}</h3>
      <h3>Willing to fill: {{ membership.fill }}</h3>
      <div v-if="membership.user.rank_data.length > 0">
        <div v-for="rank in membership.user.rank_data" v-bind:key="rank.queueType">
          <div v-if="rank.queueType == 'RANKED_FLEX_SR'">
            <p>Ranked Flex</p>
          </div>
          <div v-if="rank.queueType == 'RANKED_SOLO_5x5'">
            <p>Solo/Duo</p>
          </div>
          <p>{{ rank.tier }}</p>
          <p>{{ rank.rank }}</p>
        </div>
      </div>
      <div v-else>Unranked</div>
      <router-link v-bind:to="`/users/${membership.user.id}`">View Profile</router-link>

      <button v-on:click="destroyMembership(membership)">Delete Role</button>
    </div>
    <br />
    <br />
    <div v-if="team.user_id == $parent.getUserId()" v-bind:to="`/teams/${team.id}/edit`">
      <router-link :to="`/teams/${team.id}/edit`">Edit team info</router-link>
    </div>
    <br />
    <router-link to="/">back to Home</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      team: {},
      newMembership: {},
      membership: {},
    };
  },
  created: function () {
    axios.get("/teams/" + this.$route.params.id).then((response) => {
      console.log("team show", response);
      this.team = response.data;
    });
  },
  methods: {
    createMembership: function () {
      var params = {
        team_id: this.$route.params.id,
        primary_role: this.newMembership.primary_role,
        secondary_role: this.newMembership.secondary_role,
        fill: this.newMembership.fill,
        assigned_role: this.newMembership.assigned_role,
      };
      axios.post("/memberships", params).then((response) => {
        console.log(response.data);
        this.team.memberships.push(response.data);
        this.newMembership = {};
      });
    },
    destroyMembership: function (membership) {
      axios.delete("/memberships/" + membership.id).then((response) => {
        console.log("memberships destroy", response);
        var index = this.team.memberships.indexOf(membership);
        this.team.memberships.splice(index, 1);
      });
    },
  },
};
</script>
