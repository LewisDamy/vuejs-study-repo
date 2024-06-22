const app = Vue.createApp({
	data() {
		return {
			courseGoalA: "Finish the basic knowledge",
			courseGoalB: "Master Vue and build amazin apps!",
			vueLink: "https://vuejs.org/",
		};
	},
	methods: {
		outputGoal() {
			const randomNumber = Math.random();
			if (randomNumber < 0.5) {
				// working with data inside VueApp -> class attribute
				return this.courseGoalA;
			} else {
				return this.courseGoalB;
			}
		},
		outputHTMLGoal() {
			return "<p>Vue <a href='https://vuejs.org/guide/quick-start.html'/>Docs</a></p>";
		},
	},
});

app.mount("#user-goal");
