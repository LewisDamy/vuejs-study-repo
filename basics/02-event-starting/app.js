const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: "",
			confirmedName: "",
		};
	},
	methods: {
		add(num) {
			this.counter = this.counter + num;
		},
		reduce(num) {
			this.counter = this.counter - num;
		},
		// -> basic usage: v-on:input="setName"
		// setName(event) {
		// 	this.name = event.target.value;
		// },
		setName(event, nickName) {
			this.name = event.target.value + " " + nickName;
		},
		confirmInput() {
			this.confirmedName = this.name;
		},
		submitEvent() {
			event.preventDefault();
			alert("Submitted!");
		},
	},
});

app.mount("#events");
