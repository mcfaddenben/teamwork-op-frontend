<template>
  <div class="user-show">
    <body>
      <div class="py-4">
        <div class="container">
          <div class="row">
            <!-- Main Content -->
            <aside class="col col-xl-3 order-xl-1 col-lg-12 order-lg-1 col-12">
              <div class="box mb-3 shadow-sm border rounded bg-white profile-box text-center">
                <div class="py-4 px-3 border-bottom">
                  <img
                    :src="`/img/profileicon/${user.summoner_info.profileIconId}.png`"
                    class="img-fluid mt-2 rounded-circle"
                    alt="Responsive image"
                  />
                  <h5 class="font-weight-bold text-dark mb-1 mt-4">{{ user.summoner_name }}</h5>
                </div>

                <div class="overflow-hidden border-top">
                  <router-link class="font-weight-bold p-3 d-block" to="/teams/new">Create a Team</router-link>
                </div>
              </div>

              <div class="box shadow-sm mb-3 rounded bg-white ads-box text-center overflow-hidden"></div>
              <div class="box shadow-sm border rounded bg-white mb-3">
                <div class="box-title border-bottom p-3">
                  <h6 class="m-0">Player Owned teams</h6>
                </div>
                <div class="box-body p-3">
                  <div
                    v-for="team in user.teams"
                    v-bind:key="team"
                    class="d-flex align-items-center osahan-post-header mb-3 people-list"
                  >
                    <div class="dropdown-list-image mr-3">
                      <img class="rounded-circle" src="/img/p4.png" alt="" />
                    </div>
                    <div class="font-weight-bold mr-2">
                      <div class="text-truncate">{{ team.name }}</div>
                      <div class="small text-gray-500"></div>
                    </div>
                    <span class="ml-auto">
                      <router-link class="btn btn-light btn-sm" :to="`/teams/${team.id}`">Team Info</router-link>
                    </span>
                  </div>
                </div>
              </div>
              <div class="box shadow-sm border rounded bg-white mb-3">
                <div class="box-title border-bottom p-3">
                  <h6 class="m-0">Active Membership</h6>
                </div>
                <div class="box-body p-3">
                  <div
                    v-for="active_team in user.active_teams"
                    v-bind:key="active_team"
                    class="d-flex align-items-center osahan-post-header mb-3 people-list"
                  >
                    <div class="dropdown-list-image mr-3">
                      <img class="rounded-circle" src="/img/p4.png" alt="" />
                    </div>
                    <div class="font-weight-bold mr-2">
                      <div class="text-truncate">{{ active_team.name }}</div>
                      <div class="small text-gray-500"></div>
                    </div>
                    <span class="ml-auto">
                      <router-link class="btn btn-light btn-sm" :to="`/teams/${active_team.id}`">Team Info</router-link>
                    </span>
                  </div>
                </div>
              </div>
            </aside>
            <main class="col col-xl-6 order-xl-2 col-lg-12 order-lg-2 col-md-12 col-sm-12 col-12">
              <div class="box shadow-sm border rounded bg-white mb-3">
                <div class="box-title border-bottom p-3">
                  <h6 class="m-0">Bio</h6>
                </div>
                <div class="box-body p-3">
                  <p v-if="user.bio">{{ user.bio }}</p>
                  <p class="mb-0"></p>
                </div>
              </div>
              <div class="box shadow-sm border rounded bg-white mb-3">
                <div class="box-title border-bottom p-3">
                  <div v-if="user.rank_data.length == 0">
                    <h6 class="m-0">Unranked</h6>
                  </div>
                  <div v-else>
                    <h6 class="m-0">Player rank</h6>
                  </div>
                </div>
                <div v-for="rank_data in user.rank_data" v-bind:key="rank_data" class="box-body p-3 border-bottom">
                  <div class="d-flex align-items-top job-item-header pb-2">
                    <div class="mr-2">
                      <div v-if="rank_data.queueType === 'RANKED_FLEX_SR'">
                        <h3>Ranked Flex</h3>
                      </div>
                      <div v-else-if="rank_data.queueType === 'RANKED_SOLO_5x5'">
                        <h3>Solo Queue</h3>
                      </div>
                      <p>{{ rank_data.length }}</p>

                      <h6 class="font-weight-bold text-dark mb-0">{{ rank_data.tier }}</h6>
                      <h6 class="font-weight-bold text-dark mb-0">{{ rank_data.rank }}</h6>
                    </div>
                    <img
                      v-if="rank_data.tier == 'BRONZE'"
                      class="img-fluid ml-auto mb-auto"
                      src="/img/ranked-emblems/Emblem_Bronze.png"
                      alt=""
                      style="height: 150px; width: 150px"
                    />
                    <img
                      v-if="rank_data.tier == 'CHALLENGER'"
                      class="img-fluid ml-auto mb-auto"
                      src="/img/ranked-emblems/Emblem_Challenger.png"
                      alt=""
                      style="height: 150px; width: 150px"
                    />
                    <img
                      v-if="rank_data.tier == 'DIAMOND'"
                      class="img-fluid ml-auto mb-auto"
                      src="/img/ranked-emblems/Emblem_Diamond.png"
                      alt=""
                      style="height: 150px; width: 150px"
                    />
                    <img
                      v-if="rank_data.tier == 'GOLD'"
                      class="img-fluid ml-auto mb-auto"
                      src="/img/ranked-emblems/Emblem_Gold.png"
                      alt=""
                      style="height: 150px; width: 150px"
                    />
                    <img
                      v-if="rank_data.tier == 'GRANDMASTER'"
                      class="img-fluid ml-auto mb-auto"
                      src="/img/ranked-emblems/Emblem_Grandmaster.png"
                      alt=""
                      style="height: 150px; width: 150px"
                    />
                    <img
                      v-if="rank_data.tier == 'IRON'"
                      class="img-fluid ml-auto mb-auto"
                      src="/img/ranked-emblems/Emblem_Iron.png"
                      alt=""
                      style="height: 150px; width: 150px"
                    />
                    <img
                      v-if="rank_data.tier == 'MASTER'"
                      class="img-fluid ml-auto mb-auto"
                      src="/img/ranked-emblems/Emblem_Master.png"
                      alt=""
                      style="height: 150px; width: 150px"
                    />
                    <img
                      v-if="rank_data.tier == 'PLATINUM'"
                      class="img-fluid ml-auto mb-auto"
                      src="/img/ranked-emblems/Emblem_Platinum.png"
                      alt=""
                      style="height: 150px; width: 150px"
                    />
                    <img
                      v-if="rank_data.tier == 'SILVER'"
                      class="img-fluid ml-auto mb-auto"
                      src="/img/ranked-emblems/Emblem_Silver.png"
                      alt=""
                      style="height: 150px; width: 150px"
                    />
                  </div>
                  <p class="mb-0"></p>
                </div>
              </div>
              <!-- <div class="box shadow-sm border rounded bg-white mb-3">
                <div class="box-title border-bottom p-3">
                  <h6 class="m-0">Education</h6>
                </div>
                <div class="box-body p-3 border-bottom">
                  <div class="d-flex align-items-top job-item-header pb-2">
                    <div class="mr-2">
                      <h6 class="font-weight-bold text-dark mb-0">Stanford University</h6>
                      <div class="text-truncate text-primary">Master’s programmes</div>
                      <div class="small text-gray-500">Oct 2020 - Present (4 year 7 month)</div>
                    </div>
                    <img class="img-fluid ml-auto mb-auto" src="img/e1.png" alt="" />
                  </div>
                  <p class="mb-0">
                    Find the most qualified people in the most unexpected places. Information for applicants to consider
                    when applying for local positions.
                  </p>
                </div>
                <div class="box-body p-3">
                  <div class="d-flex align-items-top job-item-header pb-2">
                    <div class="mr-2">
                      <h6 class="font-weight-bold text-dark mb-0">Harvard University</h6>
                      <div class="text-truncate text-primary">Maths and science education</div>
                      <div class="small text-gray-500">Oct 2020 - Present (4 year 7 month)</div>
                    </div>
                    <img class="img-fluid ml-auto mb-auto" src="img/e2.png" alt="" />
                  </div>
                  <p class="mb-0">
                    Wualified people in the most unexpected places. Information for applicants to consider when applying
                    for local positions.
                  </p>
                </div>
              </div> -->
            </main>
          </div>
        </div>
      </div>
    </body>
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
