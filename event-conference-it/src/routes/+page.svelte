<script lang="ts">
	import {
		Rocket,
		CalendarDays,
		MapPin,
		Mail,
		Coffee,
		Wrench,
		Mic,
		Check,
		ChevronDown,
		Ticket as TicketIcon
	} from '@lucide/svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Countdown from '$lib/components/Countdown.svelte';
	import { conference, highlights, speakers, agenda, tickets, sponsors, faq } from '$lib/data';

	// Stan strony: zakładki agendy, opcja warsztatów i rozwinięte FAQ (Svelte 5 runes).
	const days = Object.keys(agenda) as (keyof typeof agenda)[];
	let day = $state<keyof typeof agenda>(days[0]);
	let withWorkshops = $state(false);
	let openQuestion = $state<string | null>(faq[0].question);

	const slots = $derived(agenda[day]);
	const trackIcon = { Główna: Mic, Warsztat: Wrench, Przerwa: Coffee };

	function priceOf(ticket: (typeof tickets)[number]) {
		return withWorkshops ? ticket.workshopPrice : ticket.price;
	}
</script>

<svelte:head>
	<title>{conference.name} {conference.edition} — {conference.dates}</title>
	<meta name="description" content={conference.description} />
</svelte:head>

<div id="top"></div>
<Navbar />

<main>
	<!-- HERO -->
	<section class="relative overflow-hidden border-b border-surface-200-800">
		<div
			class="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary-500/20 via-transparent to-tertiary-500/15"
		></div>
		<div class="mx-auto max-w-6xl px-4 py-20 md:py-28">
			<span
				class="mb-5 inline-flex items-center gap-2 rounded-full preset-tonal-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider"
			>
				<Rocket size={14} /> {conference.edition} · {conference.dates}
			</span>
			<h1 class="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
				{conference.claim}
			</h1>
			<p class="mt-6 max-w-2xl text-lg text-surface-600-400">{conference.description}</p>

			<div class="mt-8">
				<p class="mb-3 text-xs font-semibold uppercase tracking-widest text-surface-600-400">
					Do startu zostało
				</p>
				<Countdown target={conference.startsAt} />
			</div>

			<div class="mt-8 flex flex-wrap gap-3">
				<a href="#bilety" class="btn preset-filled-primary-500">
					<TicketIcon size={16} /> Kup bilet
				</a>
				<a href="#agenda" class="btn preset-outlined-surface-500">Zobacz agendę</a>
			</div>

			<dl class="mt-14 grid grid-cols-2 gap-6 border-t border-surface-200-800 pt-8 md:grid-cols-4">
				{#each highlights as item (item.label)}
					<div>
						<dt class="text-3xl font-black text-primary-500">{item.value}</dt>
						<dd class="mt-1 text-sm text-surface-600-400">{item.label}</dd>
					</div>
				{/each}
			</dl>
		</div>
	</section>

	<!-- PRELEGENCI -->
	<section id="prelegenci" class="mx-auto max-w-6xl px-4 py-16 md:py-24">
		<div class="mb-10 max-w-2xl">
			<h2 class="text-3xl font-bold md:text-4xl">Prelegenci</h2>
			<p class="mt-3 text-surface-600-400">
				Ludzie, którzy pokażą kod i liczby, a nie tylko slajd z definicją.
			</p>
		</div>
		<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{#each speakers as speaker (speaker.name)}
				<article
					class="card flex flex-col gap-4 border border-surface-200-800 p-6 transition-shadow hover:shadow-lg"
				>
					<div class="flex items-center gap-3">
						<span
							class="grid size-12 shrink-0 place-items-center rounded-full preset-filled-primary-500 font-bold"
						>
							{speaker.initials}
						</span>
						<div class="min-w-0">
							<h3 class="truncate font-semibold">{speaker.name}</h3>
							<p class="truncate text-sm text-surface-600-400">
								{speaker.role} · {speaker.company}
							</p>
						</div>
					</div>
					<p class="grow text-sm">{speaker.topic}</p>
					<div class="flex flex-wrap gap-2">
						{#each speaker.tags as tag (tag)}
							<span class="chip preset-tonal text-xs">{tag}</span>
						{/each}
					</div>
				</article>
			{/each}
		</div>
	</section>

	<!-- AGENDA -->
	<section id="agenda" class="border-y border-surface-200-800 preset-tonal">
		<div class="mx-auto max-w-4xl px-4 py-16 md:py-24">
			<div class="mb-8 flex flex-wrap items-end justify-between gap-4">
				<div>
					<h2 class="text-3xl font-bold md:text-4xl">Agenda</h2>
					<p class="mt-3 text-surface-600-400">Dwie ścieżki, jeden bilet. Warsztaty osobno.</p>
				</div>
				<div class="flex gap-2">
					{#each days as item (item)}
						<button
							type="button"
							class="chip {day === item ? 'preset-filled-primary-500' : 'preset-tonal'}"
							onclick={() => (day = item)}
						>
							{item}
						</button>
					{/each}
				</div>
			</div>

			<ol class="space-y-3">
				{#each slots as slot (slot.time + slot.title)}
					{@const Icon = trackIcon[slot.track]}
					<li
						class="card flex gap-4 bg-surface-50-950 p-5 {slot.track === 'Przerwa'
							? 'opacity-70'
							: ''}"
					>
						<span class="w-14 shrink-0 font-mono text-sm font-bold text-primary-500">
							{slot.time}
						</span>
						<span
							class="grid size-9 shrink-0 place-items-center rounded-lg {slot.track === 'Warsztat'
								? 'preset-filled-tertiary-500'
								: 'preset-tonal'}"
						>
							<Icon size={16} />
						</span>
						<div class="min-w-0">
							<h3 class="font-semibold">{slot.title}</h3>
							{#if slot.speaker}
								<p class="text-sm text-surface-600-400">{slot.speaker}</p>
							{/if}
							{#if slot.description}
								<p class="mt-1 text-sm text-surface-600-400">{slot.description}</p>
							{/if}
						</div>
					</li>
				{/each}
			</ol>
		</div>
	</section>

	<!-- BILETY -->
	<section id="bilety" class="mx-auto max-w-6xl px-4 py-16 md:py-24">
		<div class="mb-8 text-center">
			<h2 class="text-3xl font-bold md:text-4xl">Bilety</h2>
			<p class="mt-3 text-surface-600-400">
				Ceny brutto. Do 31 grudnia obowiązuje pula early bird — potem rosną o 20%.
			</p>

			<div class="mt-6 inline-flex items-center gap-3 rounded-full preset-tonal p-1.5">
				<button
					type="button"
					class="chip {!withWorkshops ? 'preset-filled-primary-500' : ''}"
					onclick={() => (withWorkshops = false)}
				>
					Sama konferencja
				</button>
				<button
					type="button"
					class="chip {withWorkshops ? 'preset-filled-primary-500' : ''}"
					onclick={() => (withWorkshops = true)}
				>
					Z warsztatami
				</button>
			</div>
		</div>

		<div class="grid gap-5 md:grid-cols-3">
			{#each tickets as ticket (ticket.name)}
				<article
					class="card relative flex flex-col gap-4 border p-6 {ticket.popular
						? 'border-primary-500 shadow-lg'
						: 'border-surface-200-800'}"
				>
					{#if ticket.popular}
						<span class="badge absolute -top-3 left-6 preset-filled-primary-500 text-xs">
							Najczęściej wybierany
						</span>
					{/if}
					<h3 class="text-lg font-semibold">{ticket.name}</h3>
					<p class="text-sm text-surface-600-400">{ticket.description}</p>
					<p class="flex items-baseline gap-1">
						<span class="text-4xl font-black text-primary-500">{priceOf(ticket)}</span>
						<span class="text-sm text-surface-600-400">zł</span>
					</p>
					{#if withWorkshops}
						<p class="-mt-2 text-xs text-surface-600-400">
							w tym warsztat (+{ticket.workshopPrice - ticket.price} zł), 25 miejsc
						</p>
					{/if}
					<ul class="grow space-y-2">
						{#each ticket.features as feature (feature)}
							<li class="flex items-start gap-2 text-sm">
								<Check size={16} class="mt-0.5 shrink-0 text-primary-500" />
								{feature}
							</li>
						{/each}
						{#if withWorkshops}
							<li class="flex items-start gap-2 text-sm">
								<Check size={16} class="mt-0.5 shrink-0 text-primary-500" />
								Jeden warsztat do wyboru
							</li>
						{/if}
					</ul>
					<a
						href="#kontakt"
						class="btn {ticket.popular ? 'preset-filled-primary-500' : 'preset-outlined-surface-500'}"
					>
						Wybieram {ticket.name}
					</a>
				</article>
			{/each}
		</div>
	</section>

	<!-- SPONSORZY -->
	<section class="border-y border-surface-200-800 preset-tonal">
		<div class="mx-auto max-w-6xl px-4 py-14">
			<h2 class="text-center text-2xl font-bold">Partnerzy edycji {conference.edition}</h2>
			<div class="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
				{#each sponsors as sponsor (sponsor.name)}
					<div
						class="card flex flex-col items-center gap-1 bg-surface-50-950 px-4 py-5 text-center"
					>
						<span class="font-semibold">{sponsor.name}</span>
						<span
							class="text-[10px] uppercase tracking-widest {sponsor.tier === 'Złoty'
								? 'text-primary-500'
								: 'text-surface-600-400'}"
						>
							{sponsor.tier}
						</span>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- FAQ -->
	<section id="faq" class="mx-auto max-w-3xl px-4 py-16 md:py-24">
		<h2 class="text-3xl font-bold md:text-4xl">Najczęstsze pytania</h2>
		<div class="mt-8 space-y-3">
			{#each faq as item (item.question)}
				<div class="card border border-surface-200-800">
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
	</section>

	<!-- KONTAKT / CTA -->
	<section id="kontakt" class="border-t border-surface-200-800 preset-tonal">
		<div class="mx-auto max-w-4xl px-4 py-16 text-center md:py-24">
			<h2 class="text-3xl font-bold md:text-4xl">Do zobaczenia w Krakowie</h2>
			<p class="mx-auto mt-3 max-w-xl text-surface-600-400">
				Pula early bird kończy się 31 grudnia albo po wyczerpaniu 200 biletów — zwykle to drugie
				zdarza się pierwsze.
			</p>
			<ul class="mt-8 flex flex-wrap justify-center gap-6 text-sm">
				<li class="flex items-center gap-2">
					<CalendarDays size={18} class="text-primary-500" />
					{conference.dates}
				</li>
				<li class="flex items-center gap-2">
					<MapPin size={18} class="text-primary-500" />
					{conference.venue}
				</li>
				<li class="flex items-center gap-2">
					<Mail size={18} class="text-primary-500" />
					<a href="mailto:{conference.email}" class="hover:text-primary-500">{conference.email}</a>
				</li>
			</ul>
			<a href="#bilety" class="btn mt-8 preset-filled-primary-500">
				<TicketIcon size={16} /> Kup bilet
			</a>
		</div>
	</section>
</main>

<footer class="border-t border-surface-200-800">
	<div
		class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-surface-600-400 sm:flex-row"
	>
		<p class="flex items-center gap-2 font-semibold text-surface-900-100">
			<Rocket size={16} class="text-primary-500" />
			{conference.name}
			{conference.edition}
		</p>
		<p>© {new Date().getFullYear()} {conference.name}. Wydarzenie demonstracyjne.</p>
	</div>
</footer>
