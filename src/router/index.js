import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/users/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import Index from "../views/teams/Index.vue";
import UserShow from "../views/users/UserShow.vue";
import UserEdit from "../views/users/UserEdit.vue";
import TeamShow from "../views/teams/TeamShow.vue";
import NewTeam from "../views/teams/New.vue";
import TeamEdit from "../views/teams/TeamEdit.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/teams/:id/edit",
    name: "team-edit",
    component: TeamEdit,
  },
  {
    path: "/teams/new",
    name: "team-new",
    component: NewTeam,
  },
  {
    path: "/users/:id/edit",
    name: "user-edit",
    component: UserEdit,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
  {
    path: "/teams",
    name: "Index",
    component: Index,
  },
  {
    path: "/users/:id",
    name: "user-show",
    component: UserShow,
  },
  {
    path: "/teams/:id",
    name: "team-show",
    component: TeamShow,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
