<template>
	<nav class="navbar-expand-md navbar-dark bg-dark rounded">
		<button
			class="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbar1"
			aria-controls="navbar1"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse justify-content-md-center" id="navbar1">
			<ul class="navbar-nav">
				<li class="nav-item">
					<router-link class="nav-link" to="/">Home</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" to="/login">Login</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" to="/register">Register</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" to="/profile">Profile</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" to="/logout">Logout</router-link>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
export default {};
</script>
