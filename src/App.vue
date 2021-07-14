<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark osahan-nav-top p-0">
      <div class="container">
        <router-link class="navbar-brand mr-2" to="/">
          Teamwork OP
          <img src="/img/logo.svg" alt="" />
        </router-link>
        <form class="d-none d-sm-inline-block form-inline mr-auto my-2 my-md-0 mw-100 navbar-search"></form>
        <ul class="navbar-nav ml-auto d-flex align-items-center">
          <!-- Nav Item - Search Dropdown (Visible Only XS) -->
          <li class="nav-item dropdown no-arrow d-sm-none">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="searchDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="feather-search mr-2"></i>
            </a>
            <!-- Dropdown - Messages -->
            <div
              class="dropdown-menu dropdown-menu-right p-3 shadow-sm animated--grow-in"
              aria-labelledby="searchDropdown"
            >
              <form class="form-inline mr-auto w-100 navbar-search">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control border-0 shadow-none"
                    placeholder="Search people, jobs and more..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div class="input-group-append">
                    <button class="btn" type="button">
                      <i class="feather-search"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">
              <i class="feather-book mr-2"></i>
              <span class="d-none d-lg-inline"></span>
              About
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/teams">
              <i class="feather-users mr-2"></i>
              <span class="d-none d-lg-inline">Public teams</span>
            </router-link>
          </li>

          <!-- Dropdown - User Information -->

          <!-- Nav Item - User Information -->

          <li v-if="isLoggedIn()" class="nav-item dropdown no-arrow ml-1 osahan-profile-dropdown">
            <a
              class="nav-link dropdown-toggle pr-0"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img class="img-profile rounded-circle" src="/img/default-profile.png" />
            </a>
            <!-- Dropdown - User Information -->
            <div class="dropdown-menu dropdown-menu-right shadow-sm">
              <div class="p-3 d-flex align-items-center">
                <div class="dropdown-list-image mr-3">
                  <img class="rounded-circle" src="/img/default-profile.png" alt="" />
                </div>
                <div class="font-weight-bold">
                  <div class="text-truncate">{{ user.summoner_name }}</div>
                  <div class="small text-gray-500"></div>
                </div>
              </div>
              <div class="dropdown-divider"></div>
              <router-link class="dropdown-item" :to="`/users/${getUserId()}`">
                <i class="feather-edit mr-1"></i>
                My Profile
              </router-link>

              <div class="dropdown-divider"></div>
              <router-link class="dropdown-item" to="/logout">
                <i class="feather-log-out mr-1"></i>
                logout
              </router-link>
            </div>
          </li>

          <li v-if="!isLoggedIn()" class="nav-item">
            <router-link class="nav-link" to="/login">
              <i class="feather-book mr-2"></i>
              <span class="d-none d-lg-inline"></span>
              Login
            </router-link>
          </li>
          <li v-if="!isLoggedIn()" class="nav-item">
            <router-link class="nav-link" to="/signup">
              <i class="feather-book mr-2"></i>
              <span class="d-none d-lg-inline"></span>
              Signup
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/teams">Index</router-link>
      |
      <span v-if="isLoggedIn()">
        <router-link to="/logout">logout</router-link>
        |
        <router-link :to="`/users/${getUserId()}`">Profile</router-link>
      </span>
      <span v-else>
        <router-link to="/signup">Signup</router-link>
        |
        <router-link to="/login">Login</router-link>
      </span>
    </div> -->
    <router-view />
  </div>
</template>

<style></style>
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      user: {},
    };
  },
  created: function () {
    axios.get("/users/" + localStorage.user_id).then((response) => {
      console.log("user show", response);
      this.user = response.data;
    });
  },
  methods: {
    isLoggedIn: function () {
      return localStorage.getItem("jwt");
    },
    getUserId: function () {
      return localStorage.user_id;
    },
  },
};
</script>
