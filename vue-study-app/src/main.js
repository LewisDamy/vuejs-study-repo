import { createApp, setDevtoolsHook } from "vue";

import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import TeamsList from "./components/RoutingExample/teams/TeamsList.vue";
import UsersList from "./components/RoutingExample/users/UsersList.vue";
import TeamMembers from "./components/RoutingExample/teams/TeamMembers.vue";
import NotFound from "./components/RoutingExample/nav/NotFound.vue";
import TeamsFooter from "./components/RoutingExample/teams/TeamsFooter.vue";
import UsersFooter from "./components/RoutingExample/users/UserFooter.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		// { path: "/", redirect: "/teams" },
		{
			name: "teams",
			path: "/teams",
			components: { default: TeamsList, footer: TeamsFooter },
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
		{ path: "/users", components: { default: UsersList, footer: UsersFooter } },
		{ path: "/:notFound(.*)", component: NotFound },
	],
	scrollBehavior(to, from, savedPosition) {
		// console.log(to, from, savedPosition);
		if (savedPosition) {
			return savedPosition;
		}
		return { left: 0, top: 0 };
	},
});

const app = createApp(App);

app.use(router);

app.mount("#app");
