<template>
	<div class="container">
		<div class="jumbotron mt-5">
			<div class="col-sm-8 mx-auto">
				<h1 class="text-center">User List</h1>
			</div>
			<table class="table mt-5 mx-auto">
				<thead class="thead-dark">
					<tr>
						<th scope="col">#</th>
						<th scope="col">First Name</th>
						<th scope="col">Last Name</th>
						<th scope="col">Email</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(user, index) in users" :key="user.id">
						<td>{{ index + 1 }}</td>
						<td>{{ user.firstName }}</td>
						<td>{{ user.lastName }}</td>
						<td>{{ user.email }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import axios from "axios";

export default {
	data() {
		return {
			users: [],
		};
	},
	created() {
		axios.get("http://localhost:5000/users/userlist").then((response) => {
			this.users = response.data;
		});
	},
};
</script>

<style scoped>
td {
	background-color: white;
}
</style>
