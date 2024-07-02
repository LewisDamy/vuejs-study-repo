import { createRouter, createWebHistory } from "vue-router";

import CoachDetail from "./auth/pages/coaches/CoachDetail.vue";
import CoachesList from "./auth/pages/coaches/CoachesList.vue";
import CoachRegistation from "./auth/pages/coaches/CoachRegistration.vue";
import ContactCoach from "./auth/pages/requests/ContactCoach.vue";
import RequestsReceived from "./auth/pages/requests/RequestsReceived.vue";
import NotFound from "./auth/pages/NotFound.vue";
import UserAuth from "./auth/pages/UserAuth.vue";

import store from "./auth/store/index.js";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", redirect: "/coaches" },
		{ path: "/coaches", component: CoachesList },
		{
			path: "/coaches/:id",
			component: CoachDetail,
			props: true,
			children: [
				{ path: "contact", component: ContactCoach }, // /coaches/c1/contact
			],
		},
		{
			path: "/register",
			component: CoachRegistation,
			meta: { requiresAuth: true },
		},
		{
			path: "/requests",
			component: RequestsReceived,
			meta: { requiresAuth: true },
		},
		{ path: "/auth", component: UserAuth, meta: { requiresUnauth: true } },
		{ path: "/:notFound(.*)", component: NotFound },
	],
});

router.beforeEach((to, _, next) => {
	if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
		next("/auth");
	} else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
		next("/coaches");
	} else {
		next();
	}
});

export default router;
