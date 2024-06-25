import { createApp } from "vue";

import App from "./App.vue";
import TheHeader from "./components/BadgeExample/TheHeader.vue";
import BaseBadge from "./components/BadgeExample/BaseBadge.vue";
import BadgeList from "./components/BadgeExample/BadgeList.vue";
import UserInfo from "./components/BadgeExample/UserInfo.vue";

const app = createApp(App);

app.component("the-header", TheHeader);
app.component("base-badge", BaseBadge);
app.component("badge-list", BadgeList);
app.component("user-info", UserInfo);

app.mount("#app");
