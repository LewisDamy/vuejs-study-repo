import { createApp } from "vue";

import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import TeamsList from "./components/RoutingExample/teams/TeamsList.vue";
import UsersList from "./components/RoutingExample/users/UsersList.vue";
import TeamMembers from "./components/RoutingExample/teams/TeamMembers.vue";
import NotFound from "./components/RoutingExample/nav/NotFound.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		// { path: "/", redirect: "/teams" },
		{
			name: "teams",
			path: "/teams",
			component: TeamsList,
			alias: "/",
			children: [
				{
					name: "team-members",
					path: ":teamId",
					component: TeamMembers,
					props: true,
				},
			],
		},
		{ path: "/users", component: UsersList },
		{ path: "/:notFound(.*)", component: NotFound },
	],
});

const app = createApp(App);

app.use(router);

app.mount("#app");
