import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/layout/App.vue";
import DeptManage from "./deptManage";
import UserManage from "./userManage";
import StaffEnro from "./staffEnro";
import PostManage from "./mypost";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    name: "Dashboard",
    redirect: "/login",
    // meta: {
    //   title: "",
    // },
    children: [
      {
        path: "/home",
        name: "DashboardHome",
        meta: {
          title: "首页",
        },
        component: (resolve) => require(["@/views/home/Index.vue"], resolve),
      },
    ],
  },
  DeptManage,
  UserManage,
  StaffEnro,
  PostManage,
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "后台登录",
      keepAlive: false,
    },
    components: {
      login: (resolve) => require(["@/views/login/Login.vue"], resolve),
    },
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      title: "后台注册",
    },
    components: {
      register: (resolve) => require(["@/views/register/Register.vue"], resolve),
    },
  },
];

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const router = new VueRouter({
  routes,
});

export default router;
