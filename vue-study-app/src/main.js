import { createApp } from "vue";

import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import TeamsList from "./components/RoutingExample/teams/TeamsList.vue";
import UsersList from "./components/RoutingExample/users/UsersList.vue";
import TeamMembers from "./components/RoutingExample/teams/TeamMembers.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/teams", component: TeamsList },
		{ path: "/users", component: UsersList },
		{ path: "/teams/:teamId", component: TeamMembers },
	],
});

const app = createApp(App);

app.use(router);

app.mount("#app");
