<template>
  <div class="Team-index">
    <div class="py-5 bg-primary">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mx-auto">
            <h1 class="text-white font-weight-light">
              <span class="font-weight-bold">Public</span>
              Teams
            </h1>
            <p class="mb-2 text-white-50">Looking for some jolly cooperation? Hop in a team!</p>
          </div>
        </div>
      </div>
    </div>
    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="row">
              <div v-for="team in teams" v-bind:key="team.id" class="col-lg-4 col-md-4">
                <div class="box shadow-sm rounded bg-white mb-3 blog-card border-0">
                  <a href="#">
                    <img class="card-img-top" src="img/blog/1.png" alt="Card image cap" />
                    <div class="card-body">
                      <h6 class="text-dark">{{ team.name }}</h6>
                      <p class="mb-0">
                        {{ team.about }}
                      </p>
                    </div>
                    <div class="card-footer border-0">
                      <p class="mb-0">
                        <strong>Members:</strong>
                        {{ team.memberships.length }}
                        <router-link class="btn btn-light btn-sm" margin-right="50px" :to="`/teams/${team.id}`">
                          Team Info
                        </router-link>
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <!-- 
            <div class="row">
              <div class="col-lg-4 col-md-4">
                <div class="box shadow-sm rounded bg-white mb-3 blog-card border-0">
                  <a href="#">
                    <img class="card-img-top" src="img/blog/4.png" alt="Card image cap" />
                    <div class="card-body">
                      <span class="badge badge-white">House/Villa</span>
                      <h6 class="text-dark">Possimus aut mollitia eum ipsum</h6>
                      <p class="mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat
                        odio officiis odit.
                      </p>
                    </div>
                    <div class="card-footer border-0">
                      <p class="mb-0">
                        <img class="rounded-circle" src="img/user/4.jpg" alt="Card image cap" />
                        <strong>Rahul Yadav</strong>
                        On October 03, 2020
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="box shadow-sm rounded bg-white mb-3 blog-card border-0">
                  <a href="#">
                    <img class="card-img-top" src="img/blog/5.png" alt="Card image cap" />
                    <div class="card-body">
                      <span class="badge badge-info">Shop/Showroom</span>
                      <h6 class="text-dark">Consectetur adipisicing elit</h6>
                      <p class="mb-0">
                        Cnsectetur ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum
                        fugiat odio officiis odit.
                      </p>
                    </div>
                    <div class="card-footer border-0">
                      <p class="mb-0">
                        <img class="rounded-circle" src="img/user/5.jpg" alt="Card image cap" />
                        <strong>Rahul Yadav</strong>
                        On October 05, 2020
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="box shadow-sm rounded bg-white mb-3 blog-card border-0">
                  <a href="#">
                    <img class="card-img-top" src="img/blog/6.png" alt="Card image cap" />
                    <div class="card-body">
                      <span class="badge badge-dark">Industrial Building</span>
                      <h6 class="text-dark">Fugiat odio officiis odit</h6>
                      <p class="mb-0">
                        Mollitia ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum
                        fugiat odio officiis odit.
                      </p>
                    </div>
                    <div class="card-footer border-0">
                      <p class="mb-0">
                        <img class="rounded-circle" src="img/user/1.jpg" alt="Card image cap" />
                        <strong>Rahul Yadav</strong>
                        On October 06, 2020
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-4 col-md-4">
                <div class="box shadow-sm rounded bg-white mb-3 blog-card border-0">
                  <a href="#">
                    <img class="card-img-top" src="img/blog/7.png" alt="Card image cap" />
                    <div class="card-body">
                      <span class="badge badge-success">House/Villa</span>
                      <h6 class="text-dark">Possimus aut mollitia eum ipsum</h6>
                      <p class="mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat
                        odio officiis odit.
                      </p>
                    </div>
                    <div class="card-footer border-0">
                      <p class="mb-0">
                        <img class="rounded-circle" src="img/user/4.jpg" alt="Card image cap" />
                        <strong>Rahul Yadav</strong>
                        On October 03, 2020
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="box shadow-sm rounded bg-white mb-3 blog-card border-0">
                  <a href="#">
                    <img class="card-img-top" src="img/blog/8.png" alt="Card image cap" />
                    <div class="card-body">
                      <span class="badge badge-danger">Shop/Showroom</span>
                      <h6 class="text-dark">Consectetur adipisicing elit</h6>
                      <p class="mb-0">
                        Cnsectetur ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum
                        fugiat odio officiis odit.
                      </p>
                    </div>
                    <div class="card-footer border-0">
                      <p class="mb-0">
                        <img class="rounded-circle" src="img/user/3.jpg" alt="Card image cap" />
                        <strong>Rahul Yadav</strong>
                        On October 05, 2020
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="box shadow-sm rounded bg-white mb-3 blog-card border-0">
                  <a href="#">
                    <img class="card-img-top" src="img/blog/9.png" alt="Card image cap" />
                    <div class="card-body">
                      <span class="badge badge-primary">Industrial Building</span>
                      <h6 class="text-dark">Fugiat odio officiis odit</h6>
                      <p class="mb-0">
                        Mollitia ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum
                        fugiat odio officiis odit.
                      </p>
                    </div>
                    <div class="card-footer border-0">
                      <p class="mb-0">
                        <img class="rounded-circle" src="img/user/2.jpg" alt="Card image cap" />
                        <strong>Rahul Yadav</strong>
                        On October 06, 2020
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div> -->

            <!-- <nav class="mt-5">
              <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                  <a class="page-link" href="#" tabindex="-1"><i class="feather-arrow-left"></i></a>
                </li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">...</a></li>
                <li class="page-item"><a class="page-link" href="#">10</a></li>
                <li class="page-item">
                  <a class="page-link" href="#"><i class="feather-arrow-right"></i></a>
                </li>
              </ul>
            </nav> -->
          </div>
        </div>
      </div>
    </div>

    <!-- <h1>{{ message }}</h1>
    <div v-for="team in teams" v-bind:key="team.id">
      <h2>{{ team.name }}</h2>
      <router-link v-bind:to="`/teams/${team.id}`">More details</router-link>
    </div> -->
  </div>
</template>

<script src="vendor/jquery/jquery.min.js"></script>
<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script type="text/javascript" src="vendor/slick/slick.min.js"></script>
<script src="js/osahan.js"></script>
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
