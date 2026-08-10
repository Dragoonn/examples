<script lang="ts">
	import {
		Hexagon,
		ArrowRight,
		Mail,
		Phone,
		MapPin,
		Quote,
		Check,
		Clock
	} from '@lucide/svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import {
		company,
		stats,
		services,
		caseStudies,
		industries,
		process,
		stack,
		team,
		testimonials
	} from '$lib/data';

	// Filtr realizacji po branży (Svelte 5 runes).
	let industry = $state<(typeof industries)[number]>('Wszystkie');
	const filtered = $derived(
		industry === 'Wszystkie' ? caseStudies : caseStudies.filter((c) => c.industry === industry)
	);
</script>

<svelte:head>
	<title>{company.name} — {company.claim}</title>
	<meta name="description" content={company.description} />
</svelte:head>

<div id="top"></div>
<Navbar />

<main>
	<!-- HERO -->
	<section class="relative overflow-hidden border-b border-surface-200-800">
		<div
			class="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary-500/15 via-transparent to-secondary-500/10"
		></div>
		<div class="mx-auto max-w-6xl px-4 py-20 md:py-28">
			<span
				class="mb-5 inline-flex items-center gap-2 rounded-full preset-tonal-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider"
			>
				<Hexagon size={14} /> {company.tagline} · Warszawa
			</span>
			<h1 class="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
				{company.claim}
			</h1>
			<p class="mt-6 max-w-2xl text-lg text-surface-600-400">
				{company.description}
			</p>
			<div class="mt-8 flex flex-wrap gap-3">
				<a href="#kontakt" class="btn preset-filled-primary-500">
					Umów bezpłatną konsultację <ArrowRight size={16} />
				</a>
				<a href="#realizacje" class="btn preset-outlined-surface-500">Zobacz realizacje</a>
			</div>

			<dl class="mt-14 grid grid-cols-2 gap-6 border-t border-surface-200-800 pt-8 md:grid-cols-4">
				{#each stats as stat (stat.label)}
					<div>
						<dt class="text-3xl font-black text-primary-500">{stat.value}</dt>
						<dd class="mt-1 text-sm text-surface-600-400">{stat.label}</dd>
					</div>
				{/each}
			</dl>
		</div>
	</section>

	<!-- USŁUGI -->
	<section id="uslugi" class="mx-auto max-w-6xl px-4 py-16 md:py-24">
		<div class="mb-10 max-w-2xl">
			<h2 class="text-3xl font-bold md:text-4xl">Co robimy</h2>
			<p class="mt-3 text-surface-600-400">
				Sześć obszarów, w których jesteśmy naprawdę dobrzy. Jeśli Twój problem nie mieści się w
				żadnym — powiedz, a szczerze odpowiemy, czy jesteśmy właściwym zespołem.
			</p>
		</div>
		<div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
			{#each services as service (service.slug)}
				<article
					class="card flex flex-col gap-4 border border-surface-200-800 p-6 transition-shadow hover:shadow-lg"
				>
					<h3 class="text-lg font-semibold">{service.name}</h3>
					<p class="text-sm text-surface-600-400">{service.description}</p>
					<ul class="grow space-y-1.5">
						{#each service.bullets as bullet (bullet)}
							<li class="flex items-center gap-2 text-sm">
								<Check size={15} class="shrink-0 text-primary-500" />
								{bullet}
							</li>
						{/each}
					</ul>
					<span
						class="w-fit rounded-full preset-tonal-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide"
					>
						{service.from}
					</span>
				</article>
			{/each}
		</div>
	</section>

	<!-- REALIZACJE -->
	<section id="realizacje" class="border-y border-surface-200-800 preset-tonal">
		<div class="mx-auto max-w-6xl px-4 py-16 md:py-24">
			<div class="mb-8 flex flex-wrap items-end justify-between gap-6">
				<div class="max-w-xl">
					<h2 class="text-3xl font-bold md:text-4xl">Realizacje</h2>
					<p class="mt-3 text-surface-600-400">
						Sześć wdrożeń z ostatnich trzech lat. Filtruj po branży, żeby zobaczyć projekty
						najbliższe Twojemu.
					</p>
				</div>
				<div class="flex flex-wrap gap-2">
					{#each industries as item (item)}
						<button
							type="button"
							class="chip {industry === item ? 'preset-filled-primary-500' : 'preset-tonal'}"
							onclick={() => (industry = item)}
						>
							{item}
						</button>
					{/each}
				</div>
			</div>

			<div class="grid gap-5 md:grid-cols-2">
				{#each filtered as study (study.client)}
					<article class="card flex flex-col gap-4 bg-surface-50-950 p-6">
						<div class="flex items-center justify-between gap-3">
							<span class="badge preset-filled-secondary-500 text-xs">{study.industry}</span>
							<span class="flex items-center gap-1 text-xs text-surface-600-400">
								<Clock size={13} /> {study.duration}
							</span>
						</div>
						<div>
							<p class="text-sm font-semibold text-primary-500">{study.client}</p>
							<h3 class="mt-1 text-lg font-semibold">{study.title}</h3>
						</div>
						<p class="grow text-sm text-surface-600-400">{study.summary}</p>
						<dl class="grid grid-cols-3 gap-3 border-y border-surface-200-800 py-4 text-center">
							{#each study.metrics as metric (metric.label)}
								<div>
									<dt class="text-lg font-bold text-primary-500">{metric.value}</dt>
									<dd class="text-[11px] leading-tight text-surface-600-400">{metric.label}</dd>
								</div>
							{/each}
						</dl>
						<div class="flex flex-wrap gap-2">
							{#each study.stack as tech (tech)}
								<span class="chip preset-tonal text-xs">{tech}</span>
							{/each}
						</div>
					</article>
				{/each}
			</div>

			{#if filtered.length === 0}
				<p class="py-10 text-center text-surface-600-400">Brak realizacji w tej branży.</p>
			{/if}
		</div>
	</section>

	<!-- PROCES -->
	<section id="proces" class="mx-auto max-w-6xl px-4 py-16 md:py-24">
		<div class="mb-10 max-w-2xl">
			<h2 class="text-3xl font-bold md:text-4xl">Jak pracujemy</h2>
			<p class="mt-3 text-surface-600-400">
				Bez tajemnic i bez „to zależy". Wiesz, co się dzieje na każdym etapie i ile to trwa.
			</p>
		</div>
		<ol class="grid gap-5 md:grid-cols-4">
			{#each process as phase (phase.step)}
				<li class="card flex flex-col gap-3 border border-surface-200-800 p-6">
					<span class="font-mono text-3xl font-black text-primary-500/40">{phase.step}</span>
					<h3 class="text-lg font-semibold">{phase.title}</h3>
					<p class="grow text-sm text-surface-600-400">{phase.description}</p>
					<span class="text-xs font-semibold uppercase tracking-wide text-surface-600-400">
						{phase.time}
					</span>
				</li>
			{/each}
		</ol>
	</section>

	<!-- STACK -->
	<section class="border-y border-surface-200-800 preset-tonal">
		<div class="mx-auto max-w-6xl px-4 py-14">
			<h2 class="text-2xl font-bold">Technologie, na których pracujemy</h2>
			<div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{#each stack as group (group.group)}
					<div>
						<h3 class="mb-3 text-xs font-semibold uppercase tracking-widest text-primary-500">
							{group.group}
						</h3>
						<ul class="flex flex-wrap gap-2">
							{#each group.items as item (item)}
								<li class="chip bg-surface-50-950 text-xs">{item}</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- ZESPÓŁ + OPINIE -->
	<section id="zespol" class="mx-auto max-w-6xl px-4 py-16 md:py-24">
		<div class="grid gap-12 lg:grid-cols-2">
			<div>
				<h2 class="text-3xl font-bold md:text-4xl">Kto to poprowadzi</h2>
				<p class="mt-3 text-surface-600-400">
					Nie sprzedajemy „zespołu 200 specjalistów". Znasz z imienia każdego, kto dotyka Twojego
					projektu.
				</p>
				<div class="mt-8 grid grid-cols-2 gap-4">
					{#each team as person (person.name)}
						<div class="card flex items-center gap-3 border border-surface-200-800 p-4">
							<span
								class="grid size-12 shrink-0 place-items-center rounded-full preset-filled-primary-500 font-bold"
							>
								{person.initials}
							</span>
							<div class="min-w-0">
								<p class="truncate font-semibold">{person.name}</p>
								<p class="truncate text-sm text-surface-600-400">{person.role}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<div class="flex flex-col gap-5">
				{#each testimonials as item (item.author)}
					<figure class="card flex flex-col gap-4 border border-surface-200-800 p-6">
						<Quote size={24} class="text-primary-500" />
						<blockquote class="text-lg leading-relaxed">„{item.quote}"</blockquote>
						<figcaption class="text-sm text-surface-600-400">
							<span class="font-semibold text-surface-900-100">{item.author}</span> · {item.role}
						</figcaption>
					</figure>
				{/each}
			</div>
		</div>
	</section>

	<!-- KONTAKT -->
	<section id="kontakt" class="border-t border-surface-200-800 preset-tonal">
		<div class="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
			<div>
				<h2 class="text-3xl font-bold md:text-4xl">Porozmawiajmy o Twoim projekcie</h2>
				<p class="mt-3 text-surface-600-400">
					Pierwsza rozmowa jest bezpłatna i niezobowiązująca. Zwykle wystarczy 30 minut, żeby
					powiedzieć, czy da się to zrobić i ile mniej więcej kosztuje.
				</p>
				<ul class="mt-8 space-y-4">
					<li class="flex items-center gap-3">
						<span class="grid size-10 place-items-center rounded-full preset-filled-primary-500">
							<Mail size={18} />
						</span>
						<a href="mailto:{company.email}" class="font-medium hover:text-primary-500">
							{company.email}
						</a>
					</li>
					<li class="flex items-center gap-3">
						<span class="grid size-10 place-items-center rounded-full preset-filled-primary-500">
							<Phone size={18} />
						</span>
						<a href="tel:{company.phone}" class="font-medium hover:text-primary-500">
							{company.phone}
						</a>
					</li>
					<li class="flex items-center gap-3">
						<span class="grid size-10 place-items-center rounded-full preset-filled-primary-500">
							<MapPin size={18} />
						</span>
						<span class="font-medium">{company.address}</span>
					</li>
				</ul>
			</div>

			<ContactForm />
		</div>
	</section>
</main>

<footer class="border-t border-surface-200-800">
	<div
		class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-surface-600-400 sm:flex-row"
	>
		<p class="flex items-center gap-2 font-semibold text-surface-900-100">
			<Hexagon size={16} class="text-primary-500" />
			{company.name} — {company.tagline}
		</p>
		<p>© {new Date().getFullYear()} {company.name}. {company.nip}</p>
	</div>
</footer>
