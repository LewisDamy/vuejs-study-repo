<template>
	<div>
		<button @click="confirmInput">Confirm</button>
		<button @click="saveChanges">Save Change</button>
		<ul>
			<user-item
				v-for="user in users"
				:key="user.id"
				:name="user.fullName"
				:role="user.role"
			></user-item>
		</ul>
	</div>
</template>

<script>
import UserItem from "./UserItem.vue";

export default {
	components: {
		UserItem,
	},
	inject: ["users"],
	data() {
		return { changeSaved: false };
	},
	methods: {
		confirmInput() {
			// do something
			this.$router.push("/teams");
		},
		saveChanges() {
			this.changeSaved = true;
		},
	},
	beforeRouteEnter(to, from, next) {
		console.log("UsersList Cmp beforeRouteEnter");
		console.log(to, from);
		next();
	},
	beforeRouteLeave(to, from, next) {
		console.log("UsersList Cmp beforeRouteLeave");
		console.log(to, from);

		if (this.changeSaved) {
			next();
		} else {
			const userWantsToLeave = confirm("Are you sure? You got unsaved changes!");
			next(userWantsToLeave);
		}
	},
	unmounted() {
		console.log("unmounted");
	},
};
</script>

<style scoped>
ul {
	list-style: none;
	margin: 2rem auto;
	max-width: 20rem;
	padding: 0;
}
</style>
