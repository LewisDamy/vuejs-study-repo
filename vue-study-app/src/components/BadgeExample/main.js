import { createApp } from "vue";

import App from "./App.vue";
import BaseBadge from "./components/BadgeExample/BaseBadge.vue";
import BaseCard from "./components/BadgeExample/BaseCard.vue";

const app = createApp(App);

app.component("base-badge", BaseBadge);
app.component("base-card", BaseCard);

app.mount("#app");
