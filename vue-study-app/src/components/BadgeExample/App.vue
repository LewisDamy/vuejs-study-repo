<template>
	<div>
		<the-header></the-header>
		<badge-list></badge-list>
		<user-info
			:full-name="activeUser.name"
			:info-text="activeUser.description"
			:role="activeUser.role"
		></user-info>
		<course-goals #default="slotProps">
			<!-- <template #default="slotProps"> used only when there's only one slot available -->
			<h2>{{ slotProps.item }}</h2>
			<p>{{ slotProps["another-prop"] }}</p>
			<!-- </template> -->
		</course-goals>
	</div>
</template>

<script>
import TheHeader from "./components/BadgeExample/TheHeader.vue";
import BadgeList from "./components/BadgeExample/BadgeList.vue";
import UserInfo from "./components/BadgeExample/UserInfo.vue";
import CourseGoals from "./components/BadgeExample/CourseGoals.vue";

export default {
	components: {
		"the-header": TheHeader,
		// "badge-list": BadgeList === BadgeList,
		BadgeList,
		UserInfo,
		CourseGoals,
	},
	data() {
		return {
			activeUser: {
				name: "Lewis D",
				description: "Site owner and admin",
				role: "admin",
			},
		};
	},
};
</script>

<style>
html {
	font-family: sans-serif;
}

body {
	margin: 0;
}
</style>
