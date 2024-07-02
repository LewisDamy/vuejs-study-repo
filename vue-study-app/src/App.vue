<template>
	<section class="container">
		<!-- <h2>{{ user.name }}</h2>
		<h2>{{ user.age }}</h2> -->
		<h2>
			{{ userName }}
		</h2>
		<h2>
			{{ age }}
		</h2>
	</section>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
	setup() {
		// const uName = ref("Me");
		const user = reactive({
			name: "Me",
			age: 23,
		});

		// setTimeout(() => {
		// 	uName.value = "Lew";
		// }, 2000);
		setTimeout(() => {
			user.name = "Lew";
			user.age = 24;
		}, 2000);

		const userRefs = toRefs(user);

		return { user: user, userName: userRefs.name, age: userRefs.age };
	},
	// data() {
	// 	return {
	// 		userName: "Me",
	// 	};
	// },
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
