<template>
	<base-container title="Vuex">
		<h3>{{ counter }}</h3>
		<the-counter></the-counter>
		<favorite-value></favorite-value>
		<button @click="addOne">Add 10</button>
		<change-counter></change-counter>
	</base-container>
</template>

<script>
import BaseContainer from "./vuex/BaseContainer.vue";
import ChangeCounter from "./vuex/ChangeCounter.vue";
import FavoriteValue from "./vuex/FavoriteValue.vue";
import TheCounter from "./vuex/TheCounter.vue";

export default {
	components: {
		BaseContainer,
		TheCounter,
		ChangeCounter,
		FavoriteValue,
	},
	methods: {
		addOne() {
			// this.$store.commit("increase", { value: 10 });
			this.$store.commit({
				type: "increase",
				value: 10,
			});
		},
	},
};
</script>

<style>
* {
	box-sizing: border-box;
}

html {
	font-family: sans-serif;
}

body {
	margin: 0;
}
</style>
