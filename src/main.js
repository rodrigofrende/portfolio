import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueClipboard from "vue3-clipboard";
import Notifications from '@kyvg/vue3-notification'
import "./assets/tailwind.css";

createApp(App)
  .use(store)
  .use(router)
  .use(Notifications)
  .use(VueClipboard, { autoSetContainer: true, appendToBody: true })
  .mount("#app");
