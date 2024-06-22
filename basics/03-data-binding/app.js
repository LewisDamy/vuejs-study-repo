const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: "",
			lastName: "",
			// fullname: "",
		};
	},
	watch: {
		// whenever the "counter" data property changes, this function will be called
		counter(value) {
			if (value > 50) {
				this.counter = 0;
			}
		},
	},
	computed: {
		// Only will recalculate if a dependency changed
		fullname() {
			if (this.name === "" || this.lastName === "") {
				return "";
			}
			return this.name + " " + this.lastName;
		},
	},
	methods: {
		add(num) {
			this.counter = this.counter + num;
		},
		reduce(num) {
			this.counter = this.counter - num;
		},
		setName(event, nickName) {
			this.name = event.target.value + " " + nickName;
		},
		resetInput() {
			this.name = "";
		},
	},
});

app.mount("#events");
