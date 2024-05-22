<script>
	import logo from '$lib/assets/svglogo.svg';
	import logo3 from '$lib/assets/svglogo2.svg';
	import home from '$lib/assets/home_icon.svg';
	import logo2 from '$lib/assets/vervoerregio_amsterdam_logo_2.png';
	import informationIcon from '$lib/assets/information_icon.svg';
	import BreadCrumbs from '$lib/components/breadCrumbs.svelte';
	import accountIcon from '$lib/assets/account_icon.svg';
	import darkMode from '$lib/assets/dark_mode_icon.svg';
	import { onMount } from 'svelte';

	export let params;
	export let partners;
	export let websites;

	let isDarkMode = true;
	let isLightMode = false;

	function toggleLightMode() {
		if (localStorage.getItem('lightMode') === null) {
			document.body.classList.add('lightmode');

			localStorage.setItem('lightMode', isLightMode);
		} else {
			document.body.classList.remove('lightmode');
			localStorage.removeItem('lightMode', isLightMode);
			localStorage.setItem('darkMode', isDarkMode);
		}
	}

	// function updateSVGColors() {
	// 	const elements = ['my-svg', 'my-svg2', 'my-svg3', 'my-circle', 'my-svg4'];
	// 	const fillColor = document.body.classList.contains('lightmode') ? 'black' : 'white';

	// 	elements.forEach((elementId) => {
	// 		const element = document.getElementById(elementId);
	// 		if (element) {
	// 			element.setAttribute('fill', fillColor);
	// 		}
	// 	});
	// }

	onMount(() => {
		// updateSVGColors();
		// checklightmode();
		if (localStorage.getItem('lightMode') === null) {
			document.body.classList.remove('lightmode');
		} else {
			document.body.classList.add('lightmode');
		}

		const logoImage = document.getElementById('logoImage');
		logoImage.src = isLightMode ? logo3 : logo;

		// Check if there is a saved mode in LocalStorage
		const savedLightMode = localStorage.getItem('lightMode');
		if (savedLightMode !== null) {
			isLightMode = savedLightMode === 'true';
		}

		// JavaScript is enabled, toggle the class
		const icon = document.querySelector('.disable-js');
		icon?.classList.toggle('disable-js');
	});
</script>

<header>
	<a href="#main" class="visible-hidden">Jump directly to main content</a>
	<nav>
		<a href="/" aria-label="Ga naar het overzicht met alle partners">
			<img src={isLightMode ? logo3 : logo} class="vvr-logo" id="logoImage" alt="Logo van Vervoerregio Amsterdam" />
		</a>
		<BreadCrumbs {params} {partners} {websites} />

		<div class="options">
			<a aria-label="home pagina" href="/">
				<svg
					class="home-icon-img"
					alt="back to homepage"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<path
						d="M11.3 3.3a1 1 0 0 1 1.4 0l6 6 2 2a1 1 0 0 1-1.4 1.4l-.3-.3V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3c0 .6-.4 1-1 1H7a2 2 0 0 1-2-2v-6.6l-.3.3a1 1 0 0 1-1.4-1.4l2-2 6-6Z"
						
						id="my-svg4"
					/>
				</svg>
			</a>
			<a aria-label="informatie pagina" href="/info">
				<svg
					class="information-icon-img"
					alt="information icon"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						id="my-svg3"
						d="M10.8 8.4H13.2V6H10.8M12 21.6C6.708 21.6 2.4 17.292 2.4 12C2.4 6.708 6.708 2.4 12 2.4C17.292 2.4 21.6 6.708 21.6 12C21.6 17.292 17.292 21.6 12 21.6ZM12 0C10.4241 0 8.86371 0.310389 7.4078 0.913446C5.95189 1.5165 4.62902 2.40042 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C4.62902 21.5996 5.95189 22.4835 7.4078 23.0866C8.86371 23.6896 10.4241 24 12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 10.4241 23.6896 8.86371 23.0866 7.4078C22.4835 5.95189 21.5996 4.62902 20.4853 3.51472C19.371 2.40042 18.0481 1.5165 16.5922 0.913446C15.1363 0.310389 13.5759 0 12 0ZM10.8 18H13.2V10.8H10.8V18Z"
						
					/>
				</svg>
			</a>
			<a href="/login" aria-label="account">
				<svg
					class="account-icon-img"
					alt="account icon"
					width="800px"
					height="800px"
					viewBox="0 0 24 24"
					id="Layer_1"
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle id="my-circle" class="cls-1" cx="12" cy="7.25" r="5.73"  />
					<path
						id="my-svg2"
						class="cls-1"
						d="M1.5,23.48l.37-2.05A10.3,10.3,0,0,1,12,13h0a10.3,10.3,0,0,1,10.13,8.45l.37,2.05"
					/>
				</svg>
			</a>
			<a aria-label="lightmode button" class="disable-js" href=" ">
				<button aria-label="lightmode" class="toggle" on:click={toggleLightMode}>
					<svg
						id="icon"
						alt="darkmode icon"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							id="my-svg"
							d="M12 24C18.6276 24 24 18.6276 24 12C24 5.3724 18.6276 0 12 0C5.3724 0 0 5.3724 0 12C0 18.6276 5.3724 24 12 24ZM12 21.6V2.4C14.5461 2.4 16.9879 3.41143 18.7882 5.21178C20.5886 7.01212 21.6 9.45392 21.6 12C21.6 14.5461 20.5886 16.9879 18.7882 18.7882C16.9879 20.5886 14.5461 21.6 12 21.6Z"
							
						/>
					</svg>
					<!-- <img id="icon" src={darkMode} alt="darkmode icon" /> -->
				</button>
			</a>
			<span class="lightmode" />
		</div>
	</nav>
</header>

<style>
	.lightmode {
		--c-background: white;
		/* --c-white: black; */
		--c-container: rgb(227, 0, 89);
	}

	.visible-hidden {
		clip: rect(1px, 1px, 1px, 1px);
		height: 1px;
		overflow: hidden;
		color: white;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}

	.visible-hidden:focus {
		clip: auto;
		height: auto;
		overflow: auto;
		position: absolute;
		width: auto;
	}

	@media print {
		.vvr-logo {
    		display: none;
		}

		.options {
			display: none;
		}
	}

	button {
		cursor: pointer;
		background: none;
		border: none;
	}

	header {
		position: sticky;
		top: 0;
		display: flex;
		flex-direction: column;
		z-index: 1;
	}

	nav {
		display: flex;
		align-items: center;
		gap: 1rem;
		background-color: var(--c-background);
		padding: 1em;
		border-bottom: 2px solid #454545;
	}
	nav > a {
		z-index: 2;
	}

	.options {
		display: flex;
		align-items: center;
		gap: 0.8rem;
		margin-left: auto;
		z-index: 2;
	}

	.options svg {
		fill: var(--c-white2);
	}
	
	.disable-js {
		display: none;
	}

	@media only screen and (max-width: 990px) {
		nav {
			display: grid;
			grid-template-rows: auto;
			gap: 0.4rem;
		}
		nav > a,
		.options {
			grid-row: 1;
		}
	}

	.account-icon-img {
		width: 2rem;
		height: 1.6rem;
	}

	.home-icon-img {
		width: 2.2rem;
		height: 2rem;
	}
</style>
