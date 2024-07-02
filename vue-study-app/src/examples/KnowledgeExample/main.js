import { createApp } from "vue";

import App from "./App.vue";

import ActiveElement from "./components/KnowledgeExample/ActiveElement.vue";
import KnowledgeBase from "./components/KnowledgeExample/KnowledgeBase.vue";
import KnowledgeElement from "./components/KnowledgeExample/KnowledgeElement.vue";
import KnowledgeGrid from "./components/KnowledgeExample/KnowledgeGrid.vue";

const app = createApp(App);

app.component("active-element", ActiveElement);
app.component("knowledge-base", KnowledgeBase);
app.component("knowledge-element", KnowledgeElement);
app.component("knowledge-grid", KnowledgeGrid);

app.mount("#app");
