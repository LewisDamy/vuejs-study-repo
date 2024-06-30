<template>
	<div>
		<base-container title="Vuex" v-if="isAuth">
			<h3>{{ counter }}</h3>
			<the-counter></the-counter>
			<favorite-value></favorite-value>
			<button @click="addOne">Add 10</button>
			<change-counter></change-counter>
		</base-container>
		<base-container title="Auth">
			<user-auth></user-auth>
		</base-container>
	</div>
</template>

<script>
import BaseContainer from "./BaseContainer.vue";
import ChangeCounter from "./ChangeCounter.vue";
import FavoriteValue from "./FavoriteValue.vue";
import TheCounter from "./TheCounter.vue";
import UserAuth from "./UserAuth.vue";

export default {
	components: {
		BaseContainer,
		TheCounter,
		ChangeCounter,
		FavoriteValue,
		UserAuth,
	},
	methods: {
		addOne() {
			// this.$store.commit("increase", { value: 10 });
			// MUTATION -> this.$store.commit({
			// ACTION -> this.$store.dispatch({
			this.$store.dispatch({
                // -> format to access store using module namespacing
				type: "numbers/increase",
				value: 10,
			});
		},
	},
	computed: {
		isAuth() {
			return this.$store.getters.userIsAuthenticated;
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
