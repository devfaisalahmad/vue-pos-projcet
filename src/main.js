import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "../src/router/router";
import "preline/preline";

createApp(App).use(router).mount("#app");
