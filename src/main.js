import Vue from "vue";
import App from "./App.vue";
import elementUi from "element-ui";
import Config from "@/config/app";
import "@/assets/css/style.scss";
import router from "./router";
import store from "./store";
import "@/utils/v-auth.js";
import axios from "axios";
import qs from "qs";
import { getToken } from "@/utils/common";
import "./components";

Vue.config.productionTip = false;
Vue.prototype.GlobalCfg = Config;

Vue.use(elementUi);
//导入自定义模块
import {
  getCurDate,
  setSessionStorage,
  getSessionStorage,
  removeSessionStorage,
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
} from "./api/common/common.js";
//设置axios的基础url部分
axios.defaults.baseURL = "http://localhost:8082/";
//将axios挂载到vue上，使用是就可以 this.$axios 这样使用了
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;

Vue.prototype.$getCurDate = getCurDate;
Vue.prototype.$setSessionStorage = setSessionStorage;
Vue.prototype.$getSessionStorage = getSessionStorage;
Vue.prototype.$removeSessionStorage = removeSessionStorage;
Vue.prototype.$setLocalStorage = setLocalStorage;
Vue.prototype.$getLocalStorage = getLocalStorage;
Vue.prototype.$removeLocalStorage = removeLocalStorage;

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
    ? to.meta.title + "-" + Config.siteName
    : Config.siteName;
  if (!getToken() && to.path !== "/login") {
    next({ path: "/login" });
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
