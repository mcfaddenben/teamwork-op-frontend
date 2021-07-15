<template>
  <div class="user-edit">
    <div class="py-4">
      <div class="container">
        <div class="row">
          <aside class="col-md-4">
            <div class="border rounded bg-white mb-3">
              <div class="box-title border-bottom p-3">
                <h6 class="m-0">About</h6>
                <p class="mb-0 mt-0 small">Tell about yourself in two sentences.</p>
              </div>
              <div class="box-body">
                <div class="p-3 border-bottom">
                  <div class="form-group mb-4">
                    <label class="mb-1">BIO</label>
                    <div class="position-relative">
                      <textarea class="form-control" rows="4" name="text" placeholder="Enter Bio">
Here is where you would include a brief bio for yourself if you wish.</textarea
                      >
                    </div>
                  </div>
                  <div class="form-group mb-0">
                    <label class="mb-1 w-100">SKILLS</label>
                    <div class="custom-control custom-checkbox d-inline mr-3">
                      <input type="checkbox" class="custom-control-input" id="customCheck1" />
                      <label class="custom-control-label" for="customCheck1">JavaScript, jQuery</label>
                    </div>
                    <div class="custom-control custom-checkbox d-inline">
                      <input type="checkbox" class="custom-control-input" id="customCheck2" />
                      <label class="custom-control-label" for="customCheck2">HTML5, CSS3</label>
                    </div>
                  </div>
                </div>
                <div class="overflow-hidden text-center p-3">
                  <a class="font-weight-bold btn btn-light rounded p-3 d-block" href="#">SAVE</a>
                </div>
              </div>
            </div>
            <div class="border rounded bg-white mb-3">
              <div class="box-title border-bottom p-3">
                <h6 class="m-0">Social profiles</h6>
                <p class="mb-0 mt-0 small">Add elsewhere links to your profile.</p>
              </div>
              <div class="box-body">
                <div class="p-3 border-bottom">
                  <div class="position-relative icon-form-control mb-2">
                    <i class="feather-instagram position-absolute text-warning"></i>
                    <input placeholder="Add Instagram link" type="text" class="form-control" />
                  </div>
                  <div class="position-relative icon-form-control mb-2">
                    <i class="feather-facebook position-absolute text-primary"></i>
                    <input placeholder="Add Facebook link" type="text" class="form-control" />
                  </div>
                  <div class="position-relative icon-form-control mb-2">
                    <i class="feather-twitter position-absolute text-info"></i>
                    <input placeholder="Add Twitter link" type="text" class="form-control" />
                  </div>
                  <div class="position-relative icon-form-control mb-2">
                    <i class="feather-youtube position-absolute text-danger"></i>
                    <input placeholder="Add Youtube link" type="text" class="form-control" />
                  </div>
                  <div class="position-relative icon-form-control mb-0">
                    <i class="feather-github position-absolute text-dark"></i>
                    <input placeholder="Add Github link" type="text" class="form-control" />
                  </div>
                </div>
                <div class="overflow-hidden text-center p-3">
                  <a class="font-weight-bold btn btn-light rounded p-3 d-block" href="#">Update Social Profiles</a>
                </div>
              </div>
            </div>
          </aside>
          <main class="col-md-8">
            <div class="border rounded bg-white mb-3">
              <div class="box-title border-bottom p-3">
                <h6 class="m-0">Edit Profile Info</h6>
                <p class="mb-0 mt-0 small"></p>
              </div>
              <div class="box-body p-3">
                <form novalidate="novalidate" class="js-validate">
                  <div class="row">
                    <div class="col-sm-6 mb-2">
                      <div class="js-form-message">
                        <label id="emailLabel" class="form-label">
                          Email address
                          <span class="text-danger">*</span>
                        </label>
                        <div class="form-group">
                          <input
                            v-model="user.email"
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            aria-label="Enter your email address"
                            required="required"
                            aria-describedby="emailLabel"
                            data-msg="Please enter a valid email address."
                            data-error-class="u-has-error"
                            data-success-class="u-has-success"
                            class="form-control"
                          />
                          <small class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 mb-2">
                      <div class="js-form-message">
                        <label id="locationLabel" class="form-label">
                          Summoner Name
                          <span class="text-danger">*</span>
                        </label>
                        <div class="form-group">
                          <input
                            v-model="user.summoner_name"
                            type="text"
                            name="Summoner Name"
                            placeholder="Enter your Summoner Name"
                            aria-label="Enter your Summoner Name"
                            required="required"
                            aria-describedby="locationLabel"
                            data-msg="Please enter your Summoner Name."
                            data-error-class="u-has-error"
                            data-success-class="u-has-success"
                            class="form-control"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6 mb-2">
                      <div class="js-form-message">
                        <label id="organizationLabel" class="form-label">
                          Region
                          <span class="text-danger">*</span>
                        </label>
                        <div class="form-group">
                          <input
                            v-model="user.region"
                            type="text"
                            name="Region"
                            value="Wrapbootstrap Ltd."
                            placeholder="Enter your Region"
                            aria-label="Enter your Region"
                            required="required"
                            aria-describedby="RegionLabel"
                            data-msg="Please enter your Region"
                            data-error-class="u-has-error"
                            data-success-class="u-has-success"
                            class="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 mb-2">
                      <div class="js-form-message">
                        <label id="websiteLabel" class="form-label">
                          Website
                          <span class="text-danger">*</span>
                        </label>
                        <div class="form-group">
                          <input
                            type="url"
                            name="website"
                            value="https://wrapbootstrap.com/"
                            placeholder="Enter your website"
                            aria-label="Enter your website"
                            required="required"
                            aria-describedby="websiteLabel"
                            data-msg="Password enter a valid website"
                            data-error-class="u-has-error"
                            data-success-class="u-has-success"
                            class="form-control"
                          />
                          <small class="form-text text-muted">
                            Your home page, blog or company site, e.g. http://example.com
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="mb-3 text-right">
              <a href="#" class="font-weight-bold btn btn-link rounded p-3">
                &nbsp;&nbsp;&nbsp;&nbsp; Cancel &nbsp;&nbsp;&nbsp;&nbsp;
              </a>
              <a href="#" class="font-weight-bold btn btn-primary rounded p-3">
                &nbsp;&nbsp;&nbsp;&nbsp; Sava Chenges &nbsp;&nbsp;&nbsp;&nbsp;
              </a>
            </div>
          </main>
        </div>
      </div>
    </div>
    <form v-on:submit.prevent="updateUser(user)">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      Summoner Name:
      <input type="text" v-model="user.summoner_name" />
      region:
      <input type="text" v-model="user.region" />
      Bio:
      <input type="text" v-model="user.bio" />
      email:
      <input type="text" v-model="user.email" />
      <input type="submit" value="Update" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      user: {},
      errors: [],
    };
  },
  created: function () {
    axios.get("/users/" + this.$route.params.id).then((response) => {
      console.log("user show", response);
      this.photo = response.data;
    });
  },
  methods: {
    updateUser: function (user) {
      var params = {
        summoner_name: user.summoner_name,
        region: user.region,
        email: user.email,
        bio: user.bio,
      };
      axios
        .patch("/users/" + user.id, params)
        .then((response) => {
          console.log("user update", response);
          this.$router.push("/users");
        })
        .catch((error) => {
          console.log("user update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
