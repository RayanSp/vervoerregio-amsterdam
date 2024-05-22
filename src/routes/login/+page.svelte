<!-- JS -->

<script>
	// import Heading from '$lib/components/heading.svelte';
</script>

<!-- HTML -->

<svelte:head>
	<title>Login · Vervoerregio Amsterdam</title>
</svelte:head>

<section class="form-container">
	<form>
		<fieldset class="form-login">
			<legend>Login</legend>
			<p>
				<label for="username">Username</label>
				<input id="username" type="text" name="login" placeholder="Username" required />
                <span></span>
			</p>
			<p>
				<label for="password">Password</label>
				<input id="password" type="password" name="password" minlength="6" placeholder="Password" autocomplete="off" required />
                <span></span>
			</p>
			<button type="submit" class="form-submit">Sign in</button>

			<div class="form-link">
				<a class="link-account" href="/account">Don't have an account?</a>
				<a class="link-password" href="/info">Forgot password?</a>
			</div>
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
		width: 18rem;
        background-color: var(--c-container);
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
		font-size: 38px;
	}

	p {
		display: flex;
		flex-direction: column;
		padding-top: 1rem;
	}

    span::before {
        content: " ";
    }

    input:user-invalid + span::before {
        content: "Invalid input";
        color: red;
        font-size: 12px;
    }

    input:user-invalid + span {
        animation: shake .6s ease-in-out;
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

    @keyframes shake {
        0% {
            transform: rotate(0deg);
        }

        10% {
            transform: rotate(5deg);
        }

        20% {
            transform: rotate(5deg);
        }

        30% {
            transform: rotate(-5deg);
        }

        40% {
            transform: rotate(5deg);
        }

        50% {
            transform: rotate(-5deg);   
        }

        60% {
            transform: rotate(5deg);
        }

        70% {
            transform: rotate(-5deg);
        }

        80% {
            transform: rotate(5deg);
        }

        90% {
            transform: rotate(-5deg);
        }

        100% {
            transform: rotate(0deg);
        }
    }

    input:user-invalid {
        border: 1px solid red;
        outline: none;
        animation: shake .6s ease-in-out;
    }

    input:user-invalid:focus {
        border: 1px solid red;
    }

    input:focus {
        border: 1px solid var(--c-white);
        outline: none;
    }

	.form-submit {
		margin-top: 1rem;
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

	.form-link {
		padding-top: 1rem;
		padding-bottom: 0;
	}

	a {
		font-size: 12px;
		color: lightblue;
	}

	.link-account {
		padding-right: 1rem;
	}

	.link-password {
		padding-left: 1rem;
	}

    @media screen and (max-width: 380px) {
        .form-login {
		padding-left: 1rem;
		padding-right: 1rem;
	}
    }

</style>
