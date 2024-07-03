<template>
	<section class="container">
		<user-data
			:first-name="firstName"
			:lastName="lastName"
			:age="age"
		></user-data>
		<button @click="setAge">Change Age</button>
		<div>
			<input type="text" placeholder="First Name" v-model="firstName" />
			<input type="text" placeholder="Last Name" ref="lastNameInput" />
			<button @click="setLastName">Set Last Name</button>
		</div>
	</section>
</template>

<script>
import { computed, ref, watch } from "vue";
import UserData from "./componsitionAPI/components/UserData.vue";

export default {
	components: { UserData },
	setup() {
		// const user = reactive({
		// 	name: "Me",
		// 	age: 23,
		// });
		const firstName = ref("");
		const lastName = ref("");
		const lastNameInput = ref(null);
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

		const setLastName = () => {
			lastName.value = lastNameInput.value.value;
		};

		return {
			userName: uName,
			age: uAge,
			setAge: setNewAge,
			firstName,
			setLastName,
			lastName,
			lastNameInput,
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
