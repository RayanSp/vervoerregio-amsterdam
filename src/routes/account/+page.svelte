<!-- JS -->

<script>
	// import Heading from '$lib/components/heading.svelte';
</script>

<!-- HTML -->

<svelte:head>
	<title>Create Account · Vervoerregio Amsterdam</title>
</svelte:head>

<section class="form-container">
	<form>
		<fieldset class="form-login">
			<legend>Create an account</legend>
			<p>
				<label for="login">Email</label>
				<input type="email" name="mail" placeholder="Email" required />
			</p>
			<p>
				<label for="login">Username</label>
				<input type="text" name="name" placeholder="Username" autocomplete="on" required />
			</p>
			<p>
				<label for="login">Password</label>
				<input type="password" name="password" placeholder="Password" autocomplete="off" required />
			</p>
			<p>
				<label for="login">Confirm Password</label>
				<input type="password" name="password" placeholder="Password" autocomplete="off" required />
			</p>
			<button type="submit" class="form-submit">Create</button>
		</fieldset>
	</form>
</section>

<!-- CSS -->

<style>
	.form-container {
		display: flex;
		justify-content: center;
		margin-top: 3rem;
        
	}

	.form-login {
		display: flex;
		flex-direction: column;
		align-items: center;
        background-color: var(--c-container);
		width: 18rem;
		border-color: var(--c-pink);
		border-radius: 10px;
		padding-left: 2rem;
		padding-right: 2rem;
		padding-top: 1rem;
		padding-bottom: 1.5rem;
	}

	legend {
		color: var(--c-white);
		padding-top: 2.5rem;
		text-align: center;
		font-size: 28px;
	}

	p {
		display: flex;
		flex-direction: column;
		padding-top: 1rem;
	}

	label {
		padding-bottom: 0.3rem;
		font-size: 16px;
	}

	input {
		background-color: var(--c-container-stroke);
		border: none;
		height: 2.5rem;
		width: 15rem;
		padding-left: 0.5rem;
		color: white;
		font-size: 16px;
	}

	input:user-invalid {
		border: 1px solid red;
	}

	input:focus {
		outline: none;
		border: 1px solid var(--c-white);
	}

	.form-submit {
		margin-top: 2rem;
		margin-bottom: 1rem;
		background-color: var(--c-pink);
		color: var(--c-white);
		border: 2px solid var(--c-pink);
		width: 10rem;
		height: 2.5rem;
		border-radius: 20px;
		cursor: pointer;
		transition: 0.2s ease-in-out;
		font-size: 16px;
	}

	.form-submit:hover {
		background-color: transparent !important;
	}

	@media screen and (max-width: 380px) {
		.form-login {
			padding-left: 1rem;
			padding-right: 1rem;
		}
	}
</style>
