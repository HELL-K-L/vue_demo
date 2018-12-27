import Vue from "vue";
import { Button, Menu, Submenu, MenuItem } from "element-ui";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./reset.less";

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
