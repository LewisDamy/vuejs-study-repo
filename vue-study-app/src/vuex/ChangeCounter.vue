<template>
	<div>
		<button @click="increment">Add 2</button>
		<button @click="increase({ value: 11 })">Add 11</button>
	</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
	methods: {
		// addOne() {
		// 	// this.$store.commit("increment"); -> MUTATION
		// 	this.$store.dispatch("increment");
		// },
		// -> format to access store using module namespacing
		...mapActions("numbers", ["increment", "increase"]),
	},
};
</script>
