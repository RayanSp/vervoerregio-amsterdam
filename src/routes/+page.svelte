<script>
	import Heading from '$lib/components/heading.svelte';
	import Partner from '$lib/components/partner.svelte';
	import Search from '$lib/components/search.svelte';
	import PartnerForm from '../lib/components/partnerForm.svelte';
	import { onMount } from 'svelte';
	export let data;

	let heading = { titel: 'Partners overzicht' };
	const principes = data.principes;

	export let form;

	function openDialog(el) {
		let dialog = document.querySelector('dialog');

		dialog.showModal();
		el.preventDefault();
	}

	let closeButton;
	let dialogRef;

	onMount(() => {
		closeButton = document.querySelector('dialog button');
		dialogRef = document.querySelector('dialog');

		dialogRef.addEventListener('click', (event) => {
			if (event.target === dialogRef) {
				dialogRef.close();
			}
		});

		closeButton.addEventListener('click', () => {
			dialog.close();
		});
	});

	function scrollToTop(event) {
		event.preventDefault();
		const mainElement = document.getElementById('main');
		mainElement.scrollIntoView({ behavior: 'smooth' });
	}

	let popupVisible = true;

	function handleClose() {
		popupVisible = false;
	}

	// console.log(principes);
</script>

<Heading {heading} />

<section>
	<a class="add-partner" href="/addPartner" on:click={openDialog}>Partner toevoegen</a>
	<Search placeholderProp="Gvb" />
</section>

{#if form?.success}
	<div class="toast"><p>{form?.message}</p></div>
{:else if form?.success == false}
	<div class="toast"><p>{form?.message}</p></div>
{/if}

<dialog><PartnerForm /></dialog>

{#if popupVisible}
	<div class="popup-overlay" />
	<div class="zero-state">
		<h1>Toolgankelijkheid</h1>
		<p class="tool-info">
			Deze tool wordt gebruikt voor het checken van de toegankelijkheid van uw website en app! Na
			het gebruik van de checklist, wordt er een overzicht vertoond met een aantal stappen die
			gevolgd kunnen worden voor het verbeteren van de toegankelijkheid.
		</p>

		<h2>Wettelijke verplichtingen</h2>
		<p class="verplichtingen-paragraaf">
			In Nederland zijn er ca. 2 miljoen mensen met een beperking. Als deze mensen uw website of app
			niet kunnen gebruiken, dan zorgt dat dat deze mensen worden uitgesloten van de samenleving... <a
				class="read-more"
				href="/info/#wettelijk">Lees meer</a
			>
		</p>
		<h2>Feedback?</h2>
		<p class="vragen-paragraaf">
			Heeft u feedback voor ons? Dan kunt u <a href="/info/#wettelijk">hier terecht</a>
		</p>
		<h3>Vragen?</h3>
		<p class="contact-paragraaf">
			Indien u vragen heeft of om een andere reden een bericht wilt achterlaten, voel u vrij om
			contact op te nemen met ...
		</p>
		<button id="close" class="close-popup" on:click={handleClose}>Sluit</button>
	</div>
{/if}

<ul>
	{#each data.websites as website}
		<Partner {website} {principes} />
	{/each}
</ul>

<a href="#main" class="btn-top" on:click={scrollToTop}>⬆</a>

<style>
	section {
		display: flex;
		justify-content: space-between;
		margin: 0 0 1em 1em;
	}

	.popup-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 3;
	}

	a {
		color: rgb(40, 177, 223);
	}

	.add-partner {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 0.25em;
		padding: 0.5em 1em;
		color: var(--c-white2);
		background-color: var(--c-modal-button);
		border: none;
		font-weight: 600;
		font-size: 1em;
		transition: 0.3s;
		cursor: pointer;
		text-decoration: none;
	}

	.add-partner:hover {
		background-color: var(--c-pink);
	}
	.zero-state {
		background-color: var(--c-background);
		border: 2px solid #b5006c;
		/* max-width: 30%; */
		width: 30rem;
		max-height: 90%;
		position: absolute;
		z-index: 4;
		border-radius: 15px;
		padding: 1rem;
		overflow-y: auto;
		max-height: calc(100% - 2rem);
		/* max-width: calc(100% - 2rem); */
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	h1 {
		font-size: 30px;
		text-align: center;
		color: var(--c-white2);
		/* margin-top: 1rem; */
	}

	.tool-info {
		font-weight: lighter;
		font-size: 13px;
		line-height: 1.5;
		margin-top: 1rem;
		color: var(--c-white2);
	}

	.verplichtingen-paragraaf {
		font-weight: lighter;
		font-size: 13px;
		text-align: left;
		margin-top: 1rem;
		border-bottom: 2px solid var(--c-white2);
		padding-bottom: 2rem;
		line-height: 1.5;
		color: var(--c-white2);
	}

	h2 {
		margin-top: 2rem;
		font-size: 16px;
		color: var(--c-white2);
	}

	.vragen-paragraaf {
		font-size: 13px;
		font-weight: lighter;
		line-height: 1.5;
		color: var(--c-white2);
	}

	h3 {
		margin-top: 1rem;
		font-size: 16px;
	}

	.contact-paragraaf {
		font-size: 13px;
		font-weight: lighter;
		margin-bottom: 1rem;
		line-height: 1.5;
		color: var(--c-white2);
	}

	.close-popup {
		border: none;
		background-color: var(--c-pink);
		border: 1px solid var(--c-pink);
		color: white;
		padding: 0.5em 1em;
		cursor: pointer;
		text-decoration: none;
		transition: 0.3s;
		border-radius: 0.25em;
		font-size: 1em;
		transition: 0.2s ease-in;
	}

	.btn-top {
		position: fixed;
		bottom: 1rem;
		right: 1rem;
		font-size: 1.3rem;
		padding: 0.4rem 0.8rem;
		background-color: var(--c-pink);
		border: none;
		color: white;
		margin-top: 1rem;
		border-radius: 4px;
		cursor: pointer;
		text-decoration: none;
	}

	.btn-top:hover {
		filter: saturate(1.2);
	}

	ul {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
		gap: 1em;
		/* position: relative; */
		list-style-type: none;
		margin: 0 1em;
		margin-bottom: 1em;
	}

	dialog {
		background-color: var(--c-container);
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		overflow: visible;
		width: 100%;
		max-width: 30em;
		border: none;
		display: none;
	}

	dialog[open] {
		display: block;
	}

	dialog::backdrop {
		background-color: rgb(44, 44, 44);
		opacity: 0.8;
	}

	.toast {
		position: fixed;
		bottom: 5rem;
		right: 1rem;
		height: 4rem;
		width: 10rem;
		background-color: #a0004025;
		backdrop-filter: blur(3px);
		border: 1px solid var(--c-pink);
		border-radius: 4px;
		padding: 0.5rem;
		text-shadow: 0px 0px 10px black;
		animation: fade-out 4s forwards;
		z-index: 2;
	}

	@keyframes fade-out {
		from {
			transform: translateX(30vh);
			display: block;
		}
		10% {
			transform: translateX(0);
			display: block;
		}
		80% {
			transform: translateX(0);
			display: block;
		}
		to {
			transform: translateX(30vh);
			display: none;
		}
	}

	@media only screen and (max-width: 600px) {
		.zero-state {
			width: 20rem;
			height: 35rem;
		}
	}

	@media only screen and (max-width: 450px) {
		.zero-state {
			width: 17rem;
			height: 38rem;
		}
	}
</style>
