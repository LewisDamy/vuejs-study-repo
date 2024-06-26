<template>
	<div>
		<button @click="setSelectedComponent('active-goals')">Active Goals</button>
		<button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
		<!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
		<manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> -->
		<!-- allows to conditionally cache component instances when dynamically switching between multiple components -->
		<keep-alive>
			<component :is="selectedComponent"></component>
		</keep-alive>
	</div>
</template>

<script>
import ActiveGoals from "./ActiveGoals.vue";
import ManageGoals from "./ManageGoals.vue";

export default {
	components: {
		ManageGoals,
		ActiveGoals,
	},
	data() {
		return {
			selectedComponent: "active-goals",
		};
	},
	methods: {
		setSelectedComponent(cmp) {
			this.selectedComponent = cmp;
		},
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
