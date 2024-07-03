<template>
	<section class="container">
		<h2>{{ userName }}</h2>
		<h2>{{ age }}</h2>
		<button @click="setAge">Change Age</button>
		<div>
			<input type="text" placeholder="First Name" @input="firstName" />
			<input type="text" placeholder="Last Name" @input="lastName" />
		</div>
	</section>
</template>

<script>
import { computed, ref, watch } from "vue";

export default {
	setup() {
		// const user = reactive({
		// 	name: "Me",
		// 	age: 23,
		// });
		const firstName = ref("");
		const lastName = ref("");
		const uAge = ref(23);

		const uName = computed(() => {
			return firstName.value + " " + lastName.value;
		});

		watch([uAge, uName], (newValue, oldValue) => {
			console.log("Old age: " + oldValue);
			console.log("New age: " + newValue);
		});

		const setNewAge = () => {
			uAge.value = 24;
		};

		return {
			userName: uName,
			age: uAge,
			setAge: setNewAge,
			firstName,
			lastName,
		};
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

.container {
	margin: 3rem auto;
	max-width: 30rem;
	border-radius: 12px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	padding: 1rem;
	text-align: center;
}
</style>
