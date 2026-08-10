<script lang="ts">
	import { Cloud, Zap, ShieldCheck, Headphones, ChevronDown, Mail, Phone } from '@lucide/svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Configurator from '$lib/components/Configurator.svelte';
	import { provider, comparison, faq } from '$lib/data';

	let openQuestion = $state<string | null>(faq[0].question);

	const promises = [
		{ icon: Zap, title: 'Start w 55 sekund', text: 'Serwer działa, zanim skończysz pisać hasło.' },
		{
			icon: ShieldCheck,
			title: 'Dane w Polsce',
			text: 'Warszawa i Wrocław, oba centra z certyfikatem ISO 27001.'
		},
		{
			icon: Headphones,
			title: 'Wsparcie po polsku 24/7',
			text: 'Odpowiada inżynier, nie skrypt pierwszej linii.'
		}
	];
</script>

<svelte:head>
	<title>{provider.name} — {provider.claim}</title>
	<meta name="description" content={provider.description} />
</svelte:head>

<div id="top"></div>
<Navbar />

<main>
	<!-- HERO -->
	<section class="relative overflow-hidden border-b border-surface-200-800">
		<div
			class="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary-500/15 via-transparent to-secondary-500/10"
		></div>
		<div class="mx-auto max-w-6xl px-4 py-16 md:py-24">
			<span
				class="mb-5 inline-flex items-center gap-2 rounded-full preset-tonal-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider"
			>
				<Cloud size={14} /> {provider.tagline}
			</span>
			<h1 class="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
				{provider.claim}
			</h1>
			<p class="mt-6 max-w-2xl text-lg text-surface-600-400">{provider.description}</p>

			<div class="mt-10 grid gap-4 sm:grid-cols-3">
				{#each promises as promise (promise.title)}
					{@const Icon = promise.icon}
					<div class="flex items-start gap-3">
						<span class="grid size-10 shrink-0 place-items-center rounded-lg preset-tonal-primary">
							<Icon size={18} />
						</span>
						<div>
							<p class="font-semibold">{promise.title}</p>
							<p class="text-sm text-surface-600-400">{promise.text}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- KONFIGURATOR -->
	<section id="konfigurator" class="border-b border-surface-200-800 preset-tonal">
		<div class="mx-auto max-w-6xl px-4 py-16 md:py-20">
			<div class="mb-8 max-w-2xl">
				<h2 class="text-3xl font-bold md:text-4xl">Skonfiguruj serwer</h2>
				<p class="mt-3 text-surface-600-400">
					Przesuń suwak, a cena przelicza się w tej samej chwili. Bez formularza kontaktowego, bez
					czekania na ofertę.
				</p>
			</div>
			<Configurator />
		</div>
	</section>

	<!-- PORÓWNANIE -->
	<section id="porownanie" class="mx-auto max-w-4xl px-4 py-16 md:py-24">
		<div class="mb-8 max-w-2xl">
			<h2 class="text-3xl font-bold md:text-4xl">Czym się różnimy</h2>
			<p class="mt-3 text-surface-600-400">
				Porównanie z typową ofertą hostingu, na jaką trafisz w polskim internecie.
			</p>
		</div>
		<div class="overflow-x-auto">
			<table class="table">
				<thead>
					<tr>
						<th>Element</th>
						<th class="text-primary-500">{provider.name}</th>
						<th class="text-surface-600-400">Typowa oferta</th>
					</tr>
				</thead>
				<tbody>
					{#each comparison as row (row.feature)}
						<tr>
							<td class="font-medium">{row.feature}</td>
							<td class="font-semibold text-primary-500">{row.cloudnest}</td>
							<td class="text-surface-600-400">{row.typical}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</section>

	<!-- FAQ -->
	<section id="faq" class="border-y border-surface-200-800 preset-tonal">
		<div class="mx-auto max-w-3xl px-4 py-16 md:py-24">
			<h2 class="text-3xl font-bold md:text-4xl">Pytania, które padają najczęściej</h2>
			<div class="mt-8 space-y-3">
				{#each faq as item (item.question)}
					<div class="card border border-surface-200-800 bg-surface-50-950">
						<button
							type="button"
							class="flex w-full items-center justify-between gap-4 p-5 text-left font-medium"
							onclick={() => (openQuestion = openQuestion === item.question ? null : item.question)}
							aria-expanded={openQuestion === item.question}
						>
							{item.question}
							<ChevronDown
								size={18}
								class="shrink-0 text-surface-600-400 transition-transform {openQuestion ===
								item.question
									? 'rotate-180'
									: ''}"
							/>
						</button>
						{#if openQuestion === item.question}
							<p class="border-t border-surface-200-800 p-5 text-sm text-surface-600-400">
								{item.answer}
							</p>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- KONTAKT -->
	<section id="kontakt" class="mx-auto max-w-4xl px-4 py-16 text-center md:py-24">
		<h2 class="text-3xl font-bold md:text-4xl">Nie wiesz, ile mocy potrzebujesz?</h2>
		<p class="mx-auto mt-3 max-w-xl text-surface-600-400">
			Napisz, co chcesz uruchomić. Odpowiemy konkretną konfiguracją i ceną — zwykle tego samego dnia.
		</p>
		<ul class="mt-8 flex flex-wrap justify-center gap-6 text-sm">
			<li class="flex items-center gap-2">
				<Mail size={18} class="text-primary-500" />
				<a href="mailto:{provider.email}" class="hover:text-primary-500">{provider.email}</a>
			</li>
			<li class="flex items-center gap-2">
				<Phone size={18} class="text-primary-500" />
				<a href="tel:{provider.phone}" class="hover:text-primary-500">{provider.phone}</a>
			</li>
		</ul>
		<a href="#konfigurator" class="btn mt-8 preset-filled-primary-500">Wróć do konfiguratora</a>
	</section>
</main>

<footer class="border-t border-surface-200-800">
	<div
		class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-surface-600-400 sm:flex-row"
	>
		<p class="flex items-center gap-2 font-semibold text-surface-900-100">
			<Cloud size={16} class="text-primary-500" />
			{provider.name} — {provider.tagline}
		</p>
		<p>© {new Date().getFullYear()} {provider.name}. Cennik demonstracyjny.</p>
	</div>
</footer>
