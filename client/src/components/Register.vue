<template>
	<div class="container">
		<div class="row">
			<div class="col-md-6 nt-5 mx-auto">
				<form v-on:submit.prevent="register">
					<h1 class="h3 mb-3 font-weight-normal">
						Register An Account
					</h1>
					<div class="form-group">
						<label for="firstName">First Name</label>
						<input type="text" v-model="firstName" class="form-control" name="firstName" placeholder="First Name" />
					</div>
					<div class="form-group">
						<label for="lastName">Last Name</label>
						<input type="text" v-model="lastName" class="form-control" name="lastName" placeholder="Last Name" />
					</div>
					<div class="form-group">
						<label for="email">Email Address</label>
						<input type="email" v-model="email" class="form-control" name="email" placeholder="Enter Your Email Address" />
					</div>
					<div class="form-group">
						<label for="password">Password</label>
						<input type="password" v-model="password" class="form-control" name="password" placeholder="Enter Your password" />
					</div>
					<button class="btn btn-lg btn-primary btn-block" type="submit">
						Register Now
					</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import router from "../router";

export default {
	data() {
		return {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
		};
	},
	methods: {
		register() {
			axios
				.post("ttp://localhost:5000/users/register", {
					firstName: this.firstName,
					lastName: this.lastName,
					email: this.email,
					password: this.password,
				})
				.then((res) => {
					router.push({ name: "Login" });
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
};
</script>
