<template>
	<ul>
		<li v-for="goal in goals" :key="goal">
			<slot :item="goal" another-prop="...k"></slot>
		</li>
	</ul>
</template>

<script>
export default {
	data() {
		return {
			goals: ["Finish the study", "Learn Vue"],
		};
	},
};
</script>
