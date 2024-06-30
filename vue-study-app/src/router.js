import { createRouter, createWebHistory } from "vue-router";

import CoachDetail from "./auth/pages/coaches/CoachDetail.vue";
import CoachesList from "./auth/pages/coaches/CoachesList.vue";
import CoachRegistation from "./auth/pages/coaches/CoachRegistration.vue";
import ContactCoach from "./auth/pages/requests/ContactCoach.vue";
import RequestsReceived from "./auth/pages/requests/RequestsReceived.vue";
import NotFound from "./auth/pages/NotFound.vue";

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
		{ path: "/register", component: CoachRegistation },
		{ path: "/requests", component: RequestsReceived },
		{ path: "/:notFound(.*)", component: NotFound },
	],
});

export default router;
