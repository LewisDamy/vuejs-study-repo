import { createRouter, createWebHistory } from "vue-router";
import TeamsList from "./teams/TeamsList.vue";
import UsersList from "./users/UsersList.vue";
import TeamMembers from "./teams/TeamMembers.vue";
import NotFound from "./nav/NotFound.vue";
import TeamsFooter from "./teams/TeamsFooter.vue";
import UsersFooter from "./users/UserFooter.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		// { path: "/", redirect: "/teams" },
		{
			name: "teams",
			path: "/teams",
			alias: "/",
			components: { default: TeamsList, footer: TeamsFooter },
			meta: { needsAuth: true },
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
	scrollBehavior(
		_,
		_2,
		savedPosition
		// args -> to, from, savedPosition
	) {
		// console.log(to, from, savedPosition);
		if (savedPosition) {
			return savedPosition;
		}
		return { left: 0, top: 0 };
	},
});

router.beforeEach((to, from, next) => {
	console.log("Global beforeEach");
	console.log(to, from);
	if (to.meta.needsAuth) {
		console.log.apply("Needs auth!");
		next();
	} else {
		next();
	}
});

router.afterEach((to, from) => {
	// sending analytics data
	console.log("Global afterEach");
	console.log(to, from);
});

export default router;
