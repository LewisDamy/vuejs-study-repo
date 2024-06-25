import { createApp } from "vue";

import App from "./App.vue";
// import FriendContact from "./components/FriendContact.vue";
// import NewFriend from "./components/NewFriend.vue";
import ActiveElement from './components/Knowledge/ActiveElement.vue';
import KnowledgeBase from './components/Knowledge/KnowledgeBase.vue';
import KnowledgeElement from './components/Knowledge/KnowledgeElement.vue';
import KnowledgeGrid from './components/Knowledge/KnowledgeGrid.vue';

const app = createApp(App);

// app.component("friend-contact", FriendContact);
// app.component("new-friend", NewFriend);


app.component('active-element', ActiveElement);
app.component('knowledge-base', KnowledgeBase);
app.component('knowledge-element', KnowledgeElement);
app.component('knowledge-grid', KnowledgeGrid);

app.mount("#app");
