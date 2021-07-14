<template>
  <div class="login">
    <div class="bg-white">
      <div class="container">
        <div class="row justify-content-center align-items-center d-flex vh-100">
          <div class="col-md-4 mx-auto">
            <div class="osahan-login py-4">
              <div class="text-center mb-4">
                <a href="index.html"><img src="img/logo.svg" alt="" /></a>
                <h5 class="font-weight-bold mt-3">Welcome Back</h5>
              </div>
              <form v-on:submit.prevent="submit()" action="">
                <div class="form-group">
                  <label class="mb-1">Email</label>
                  <div class="position-relative icon-form-control">
                    <i class="feather-user position-absolute"></i>
                    <input type="email" class="form-control" v-model="email" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="mb-1">Password</label>
                  <div class="position-relative icon-form-control">
                    <i class="feather-unlock position-absolute"></i>
                    <input type="password" class="form-control" v-model="password" />
                  </div>
                </div>

                <button class="btn btn-primary btn-block text-uppercase" type="submit" value="Submit">Sign in</button>
                <div class="text-center mt-3 border-bottom pb-3">
                  <div class="row">
                    <div class="col-4"></div>
                    <div class="col-4"></div>
                    <div class="col-4"></div>
                  </div>
                </div>
                <div class="py-3 d-flex align-item-center">
                  <span class="ml-auto">
                    New to Teamwork OP?
                    <a class="font-weight-bold" href="/signup">Join now</a>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <form v-on:submit.prevent="submit()">
      <h1>Login</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Email:</label>
        <input type="email" v-model="email" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="password" />
      </div>
      <input type="submit" value="Submit" />
    </form> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    submit: function () {
      var params = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("/sessions", params)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          this.$router.push("/users/" + `${response.data.user_id}`);
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>
