<template>
  <div class="signup">
    <div class="bg-white">
      <div class="container">
        <div class="row justify-content-center align-items-center d-flex vh-100">
          <div class="col-md-4 mx-auto">
            <div class="osahan-login py-4">
              <div class="text-center mb-4">
                <a href="index.html"><img src="img/logo.svg" alt="" /></a>
                <h5 class="font-weight-bold mt-3">Welcome to Teamwork OP!</h5>
              </div>
              <form v-on:submit.prevent="submit()" action="index.html">
                <div class="form-row">
                  <div class="col"></div>
                </div>
                <div class="form-group">
                  <label class="mb-1">Summoner Name</label>
                  <div class="position-relative icon-form-control">
                    <i class="feather-user position-absolute"></i>
                    <input type="text" class="form-control" v-model="newUserParams.summoner_name" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="mb-1">Region</label>
                  <div class="position-relative icon-form-control">
                    <i class="feather-compass position-absolute"></i>
                    <input type="text" class="form-control" v-model="newUserParams.region" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="mb-1">Email</label>
                  <div class="position-relative icon-form-control">
                    <i class="feather-at-sign position-absolute"></i>
                    <input type="email" class="form-control" v-model="newUserParams.email" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="mb-1">Password</label>
                  <div class="position-relative icon-form-control">
                    <i class="feather-unlock position-absolute"></i>
                    <input type="password" class="form-control" v-model="newUserParams.password" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="mb-1">Password Confirmation</label>
                  <div class="position-relative icon-form-control">
                    <i class="feather-unlock position-absolute"></i>
                    <input type="password" class="form-control" v-model="newUserParams.password_confirmation" />
                  </div>
                </div>
                <div class="form-group"></div>
                <button class="btn btn-primary btn-block text-uppercase" type="submit" value="Submit">Sign Up</button>

                <!-- <div class="py-3 d-flex align-item-center">
                  <span class="ml-auto">
                    Already on Olink?
                    <a class="font-weight-bold" href="sign-in.html">Sign in</a>
                  </span>
                </div> -->
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <form v-on:submit.prevent="submit()">
      <h1>Welcome to Teamwork OP!</h1>
      <h3>New Profile Setup</h3>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Summoner Name:</label>
        <input type="text" class="form-control" v-model="newUserParams.summoner_name" />
      </div>
      <div class="form-group">
        <label>region:</label>
        <input type="text" class="form-control" v-model="newUserParams.region" />
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control" v-model="newUserParams.email" />
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" class="form-control" v-model="newUserParams.password" />
      </div>
      <div class="form-group">
        <label>Password confirmation:</label>
        <input type="password" class="form-control" v-model="newUserParams.password_confirmation" />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
