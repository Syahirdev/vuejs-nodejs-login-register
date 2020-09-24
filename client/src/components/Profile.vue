<template>
	<div class="container">
		<div class="jumbotron mt-5">
			<div class="col-sm-8 mx-auto">
				<h1 class="text-center">Profile</h1>
			</div>
			<table class="table col-md-6 mx-auto">
				<tbody>
					<td>First Name</td>
					<td>{{ firstName }}</td>

					<td>Last Name</td>
					<td>{{ lastName }}</td>

					<td>email</td>
					<td>{{ email }}</td>

					<td>password</td>
					<td>{{ password }}</td>
				</tbody>
			</table>
		</div>
	</div>
</template>
