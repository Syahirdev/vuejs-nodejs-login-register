<template>
	<div class="container">
		<div class="jumbotron mt-5">
			<div class="col-sm-8 mx-auto">
				<h1 class="text-center">Profile</h1>
			</div>
			<table class="table col-md-6 mx-auto">
				<tbody>
					<tr></tr>
					<tr>
						<td>First Name</td>
						<td>{{ firstName }}</td>
					</tr>
					<tr>
						<td>Last Name</td>
						<td>{{ lastName }}</td>
					</tr>
					<tr>
						<td>Email</td>
						<td>{{ email }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import jwtDecode from "jwt-decode";
export default {
	data() {
		const token = localStorage.usertoken;
		const decoded = jwtDecode(token);
		return {
			firstName: decoded.firstName,
			lastName: decoded.lastName,
			email: decoded.email,
		};
	},
};
</script>
