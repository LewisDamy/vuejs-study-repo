<template>
	<div>
		<h3>{{ counter }}</h3>
		<p>We do more...</p>
	</div>
</template>

<script>
export default {
	computed: {
		counter() {
			// return this.$store.getters.normalizedCounter;
            // -> format to access store using module namespacing
			return this.$store.getters["numbers/normalizedCounter"];
		},
	},
};
</script>
