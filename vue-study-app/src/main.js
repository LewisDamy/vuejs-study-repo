import { createApp } from "vue";

import router from "./router.js";
import store from "./auth/store/index.js";
import App from "./App.vue";
import BaseCard from "./auth/components/ui/BaseCard.vue";
import BaseButton from "./auth/components/ui/BaseButton.vue";
import BaseBadge from "./auth/components/ui/BaseBadge.vue";
import BaseSpinner from "./auth/components/ui/BaseSpinner.vue";
import BaseDialog from "./auth/components/ui/BaseDialog.vue";

const app = createApp(App);

app.use(router);
app.use(store);

app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-badge", BaseBadge);
app.component("base-spinner", BaseSpinner);
app.component("base-dialog", BaseDialog);

app.mount("#app");
