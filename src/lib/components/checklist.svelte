<script>
	export let richtlijnen;
	export let toolboardData;
	export let selectedNiveau = 'A';

	import { onMount } from 'svelte';
	import { enhance } from '$app/forms';

	import loadingIcon from '$lib/assets/loading.svg';

	let loading = false;

	// console.log(toolboardData)

	const getSuccescriteriaByNiveau = (niveau) =>
		toolboardData.url.checks[0]
			? toolboardData.url.checks[0].succescriteria.filter((item) => item.niveau === niveau)
			: [];

	let filteredSuccescriteria = getSuccescriteriaByNiveau(selectedNiveau);

	const handleNiveauChange = (event) => {
		selectedNiveau = event.target.value;
		filteredSuccescriteria = getSuccescriteriaByNiveau(selectedNiveau);
	};

	const checkedSuccescriteria = toolboardData.url.checks[0]
		? toolboardData.url.checks[0].succescriteria
		: [];
	onMount(() => {
		const niveauToggle = document.querySelector('#niveau-toggle');
		console.log(niveauToggle);
		niveauToggle.classList.toggle('disabled');
	});

	// const updateChecklist = () => {
	// 	loading = true;
	// 	return async ({ update }) => {
	// 		loading = false;
	// 		console.log(loading);
	// 		await update();
	// 	};
	// };

	function scrollToTop(event) {
		const mainElement = document.getElementById('main');
		mainElement.scrollIntoView({ behavior: 'smooth' });
		event.preventDefault();
	}

</script>

<section>
	<div id="niveau-toggle" class="disabled">
		<label>
			<p>Selecteer niveau</p>
			<select bind:value={selectedNiveau} on:change={handleNiveauChange}>
				<option value="A">Niveau A</option>
				<option value="AA">Niveau AA</option>
				<option value="AAA">Niveau AAA</option>
			</select>
		</label>
	</div>

	<form
		method="POST"
		action="?/updateChecklist"
		use:enhance={() => {
			loading = true;
			return async ({ update }) => {
				loading = false;
				update({ reset: false });
			};
		}}
	>
		<input type="hidden" name="niveau" value={selectedNiveau} />
		<input type="hidden" name="principe" value={toolboardData.principe.index} />

		<!-- richtlijnen en succescriteria tekst wordt hier ingeladen! -->

		{#each richtlijnen as richtlijn}
			<details>
				<!-- <div class="richtlijn-div"> -->
				<summary class="collapsible-summary">
					<span>Richtlijn {richtlijn.index}</span>
					<div>
						<h2>{richtlijn.titel}</h2>
						<h3>{@html richtlijn.uitleg.html}</h3>
						<div />
					</div>
				</summary>
				<!-- </div>	 -->
				<article>
					{#each richtlijn.succescriteria as succescriterium}
						{#if succescriterium.niveau === selectedNiveau}
							<details>
								<summary class="criteria-uitklapbaar">
									<label>
										<div class="titels">
											<span>Criteria {succescriterium.index} ({succescriterium.niveau})</span>
											<h3>{succescriterium.titel}</h3>
										</div>
										<input
											name="check"
											value={succescriterium.id}
											type="checkbox"
											checked={checkedSuccescriteria.find((e) => e.id === succescriterium.id)}
										/>
									</label>
								</summary>
								<!-- tekuitleg voor succescriterium -->

								<div class="richtlijn-uitleg">
									{@html succescriterium.criteria && succescriterium.criteria.html}
								</div>
							</details>
						{/if}
					{/each}
				</article>
			</details>
		{/each}
		{#if loading}
			<div class="submit">
				<img src={loadingIcon} alt="laadt icoontje" height="32" width="32" />
			</div>
		{:else}
			<button class="submit"> Opslaan </button>
		{/if}
	</form>
	<a href="#main" class="btn-top" on:click={scrollToTop}>⬆</a>
</section>

<style>
	@media print {
		.btn-top {
			display: none;
		}

		.submit {
			display: none;
		}
	}

	.submit {
		position: fixed;
		bottom: 5rem;
		right: 1rem;
		font-size: 1.3rem;
		padding: 0.4rem 0.8rem;
		background-color: var(--c-pink);
		border: none;
		color: white;
		margin-top: 1rem;
		border-radius: 4px;
		cursor: pointer;
		z-index: 2;
	}
	.submit:hover {
		filter: saturate(1.2);
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
		z-index: 2;
	}
	.btn-top:hover {
		filter: saturate(1.2);
	}

	button:active {
		filter: saturate(1) brightness(0.9);
	}
	
	.submit:not(button) {
		cursor: auto;
		background-color: #a0004025;
		backdrop-filter: blur(3px);
		border: 1px solid var(--c-pink);
		border-radius: 4px;
	}
	.submit img {
		animation: 0.8s rotate infinite;
	}
	select {
		border-radius: 0.25em;
		padding: 0.5em 1em;
		color: var(--c-white);
		background-color: var(--c-modal-button);
		border: none;
		font-weight: 600;
		font-size: 1em;
		cursor: pointer;
	}

	.richtlijn-uitleg {
		padding-left: 3rem;
	}
	.titels {
		display: flex;
		flex-direction: column;
		margin-top: -19px;
	}

	section {
		flex-basis: 0;
		flex-grow: 999;
	}

	form article:not(:first-child) {
		margin-top: 1em;
	}

	form article {
		background-color: var(--c-container);
		border-radius: 0.5em;
		border: solid 1px var(--c-container-stroke);
	}

	article > div {
		padding: 1em 1em 0 1em;
	}

	h3,
	h3 {
		font-size: 1.2rem;
		font-weight: 600;
	}

	span {
		font-weight: 100;
		font-family: 1em;
	}

	label {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-weight: 600;
	}

	label p {
		color: var(--c-white2);
	}

	label div {
		margin-left: 1em;
	}

	details {
		padding: 1em;
	}

	summary::marker {
		color: var(--c-pink);
		cursor: pointer;
	}

	details[open] summary ~ * {
		animation: sweep 0.25s ease-in-out;
	}

	@keyframes sweep {
		0% {
			opacity: 0;
			/* margin-top: -10px; */
		}
		100% {
			opacity: 1;
			/* margin-top: 15.2px; */
		}
	}


	section details:not(:nth-child(2)) {
		border-top: 1px solid var(--c-container-stroke);
	}

	.collapsible-summary:hover {
		cursor: pointer;
	}

	.collapsible-summary h2,
	h3 {
		margin-left: 1.2rem;
	}

	span {
		margin-left: 0.3rem;
	}

	.criteria-uitklapbaar {
		/* display: flex; */
		flex-direction: row;
		align-items: center;
	}

	/* .criteria-uitklapbaar::-webkit-details-marker {
		display: none;
	} */

	/* .criteria-uitklapbaar:before {
		content: '🡒';
		font-size: 1.5em;
		color: #fff;
		width: 30px;
	}

	details[open] .criteria-uitklapbaar:before {
		content: '🡓';
		color: var(--c-pink);
	} */

	details > div {
		font-size: 0.9em !important;
		padding-top: 1em;
	}

	/* Custom checkbox styling */
	input[type='checkbox'] {
		-webkit-appearance: none;
		appearance: none;
		margin: 0;
		color: var(--c-pink);
		min-width: 2em;
		width: 2em;
		height: 2em;
		border: 0.15em solid currentColor;
		border-radius: 0.3em;
		transform: translateY(-0.075em);
		display: grid;
		place-content: center;
	}

	input[type='checkbox']::before {
		content: '';
		width: 1em;
		height: 1em;
		clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
		transform: scale(0);
		background-color: white;
	}

	input[type='checkbox']:checked::before {
		transform: scale(1);
	}

	input[type='checkbox']:checked {
		background-color: var(--c-pink);
	}

	#niveau-toggle {
		margin-bottom: 1em;
	}

	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
