<template>
	<div>
		<h2>{{ userName }}</h2>
		<h3>{{ age }}</h3>
	</div>
</template>

<script>
import { computed, inject } from "vue";

export default {
	props: ["firstName", "lastName"],
	setup(props) {
		const uName = computed(() => {
			return props.firstName + " " + props.lastName;
		});

		const uAge = inject("userAge");

		return { userName: uName, age: uAge };
	},
};
</script>
