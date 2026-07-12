<script lang="ts">
	import { Scissors, Clock, MapPin, Phone, AtSign, Star, Check } from '@lucide/svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { salon, services, hours, barbers } from '$lib/data';

	// Podświetl dzisiejszy dzień w grafiku (Svelte 5 runes).
	const dayIndex = $derived((new Date().getDay() + 6) % 7); // 0 = poniedziałek
</script>

<svelte:head>
	<title>{salon.name} — {salon.tagline} | {salon.address}</title>
	<meta name="description" content={salon.description} />
</svelte:head>

<div id="top"></div>
<Navbar />

<main>
	<!-- HERO -->
	<section class="relative overflow-hidden">
		<div
			class="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-primary-500/10 to-transparent"
		></div>
		<div class="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-2 md:py-28">
			<div class="flex flex-col justify-center">
				<span
					class="mb-4 inline-flex w-fit items-center gap-2 rounded-full preset-tonal-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider"
				>
					<Star size={14} /> Ocena 4.9 / 5 · 320+ opinii
				</span>
				<h1 class="text-4xl font-black leading-tight tracking-tight md:text-6xl">
					{salon.claim}
				</h1>
				<p class="mt-5 max-w-md text-lg text-surface-600-400">
					{salon.description}
				</p>
				<div class="mt-8 flex flex-wrap gap-3">
					<a href="#kontakt" class="btn preset-filled-primary-500">Umów wizytę</a>
					<a href="#uslugi" class="btn preset-outlined-surface-500">Zobacz cennik</a>
				</div>
				<dl class="mt-10 grid max-w-sm grid-cols-3 gap-4 text-center">
					<div>
						<dt class="text-2xl font-bold text-primary-500">8</dt>
						<dd class="text-xs text-surface-600-400">lat na rynku</dd>
					</div>
					<div>
						<dt class="text-2xl font-bold text-primary-500">3</dt>
						<dd class="text-xs text-surface-600-400">barberów</dd>
					</div>
					<div>
						<dt class="text-2xl font-bold text-primary-500">15k+</dt>
						<dd class="text-xs text-surface-600-400">wizyt</dd>
					</div>
				</dl>
			</div>

			<div class="flex items-center justify-center">
				<div
					class="grid aspect-square w-full max-w-md place-items-center rounded-3xl border border-surface-200-800 preset-tonal shadow-xl"
				>
					<div class="text-center">
						<Scissors size={72} class="mx-auto text-primary-500" />
						<p class="mt-4 font-mono text-sm text-surface-600-400">
							{salon.name} — {salon.tagline}
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- USŁUGI / CENNIK -->
	<section id="uslugi" class="mx-auto max-w-6xl px-4 py-16 md:py-24">
		<div class="mb-10 text-center">
			<h2 class="text-3xl font-bold md:text-4xl">Usługi i cennik</h2>
			<p class="mt-2 text-surface-600-400">Bez ukrytych kosztów. Płacisz za to, co widzisz.</p>
		</div>
		<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{#each services as service (service.name)}
				<article
					class="card flex flex-col gap-3 border border-surface-200-800 p-6 transition-shadow hover:shadow-lg"
				>
					<div class="flex items-start justify-between gap-2">
						<h3 class="text-lg font-semibold">{service.name}</h3>
						{#if service.popular}
							<span class="badge preset-filled-primary-500 text-xs">Popularne</span>
						{/if}
					</div>
					<p class="grow text-sm text-surface-600-400">{service.description}</p>
					<div class="flex items-center justify-between border-t border-surface-200-800 pt-3">
						<span class="flex items-center gap-1 text-xs text-surface-600-400">
							<Clock size={14} /> {service.duration} min
						</span>
						<span class="text-xl font-bold text-primary-500">{service.price} zł</span>
					</div>
				</article>
			{/each}
		</div>
	</section>

	<!-- ZESPÓŁ -->
	<section id="zespol" class="border-y border-surface-200-800 preset-tonal">
		<div class="mx-auto max-w-6xl px-4 py-16 md:py-24">
			<div class="mb-10 text-center">
				<h2 class="text-3xl font-bold md:text-4xl">Nasz zespół</h2>
				<p class="mt-2 text-surface-600-400">Ludzie, którzy zadbają o Twój wygląd.</p>
			</div>
			<div class="grid gap-6 sm:grid-cols-3">
				{#each barbers as barber (barber.name)}
					<div class="card flex flex-col items-center gap-3 bg-surface-50-950 p-8 text-center">
						<span
							class="grid size-20 place-items-center rounded-full preset-filled-primary-500 text-2xl font-bold"
						>
							{barber.initials}
						</span>
						<div>
							<h3 class="font-semibold">{barber.name}</h3>
							<p class="text-sm text-surface-600-400">{barber.role}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- GODZINY -->
	<section id="godziny" class="mx-auto max-w-6xl px-4 py-16 md:py-24">
		<div class="grid gap-10 md:grid-cols-2 md:items-center">
			<div>
				<h2 class="text-3xl font-bold md:text-4xl">Godziny otwarcia</h2>
				<p class="mt-2 text-surface-600-400">
					Zapraszamy bez zapisów, ale rezerwacja gwarantuje Twój termin.
				</p>
				<a href="#kontakt" class="btn mt-6 preset-filled-primary-500">Zarezerwuj termin</a>
			</div>
			<ul class="card divide-y divide-surface-200-800 border border-surface-200-800">
				{#each hours as row, i (row.day)}
					<li
						class="flex items-center justify-between px-5 py-3"
						class:preset-tonal-primary={i === dayIndex}
					>
						<span class="font-medium">{row.day}</span>
						<span class="text-sm text-surface-600-400">{row.open}</span>
					</li>
				{/each}
			</ul>
		</div>
	</section>

	<!-- KONTAKT / CTA -->
	<section id="kontakt" class="border-t border-surface-200-800 preset-tonal">
		<div class="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
			<div>
				<h2 class="text-3xl font-bold md:text-4xl">Odwiedź nas</h2>
				<p class="mt-2 text-surface-600-400">
					Umów wizytę telefonicznie lub wpadnij bez zapowiedzi.
				</p>
				<ul class="mt-8 space-y-4">
					<li class="flex items-center gap-3">
						<span class="grid size-10 place-items-center rounded-full preset-filled-primary-500">
							<Phone size={18} />
						</span>
						<a href="tel:{salon.phone}" class="font-medium hover:text-primary-500">{salon.phone}</a>
					</li>
					<li class="flex items-center gap-3">
						<span class="grid size-10 place-items-center rounded-full preset-filled-primary-500">
							<MapPin size={18} />
						</span>
						<span class="font-medium">{salon.address}</span>
					</li>
					<li class="flex items-center gap-3">
						<span class="grid size-10 place-items-center rounded-full preset-filled-primary-500">
							<AtSign size={18} />
						</span>
						<span class="font-medium">{salon.instagram}</span>
					</li>
				</ul>
			</div>

			<div class="card flex flex-col gap-4 bg-surface-50-950 p-8">
				<h3 class="text-xl font-semibold">Dlaczego my?</h3>
				{#each ['Doświadczeni barberzy z pasją', 'Wyłącznie sprawdzone kosmetyki', 'Kawa i dobra atmosfera gratis', 'Elastyczne godziny, także w soboty'] as reason (reason)}
					<p class="flex items-center gap-3 text-sm">
						<Check size={18} class="shrink-0 text-primary-500" />
						{reason}
					</p>
				{/each}
				<a href="tel:{salon.phone}" class="btn mt-2 preset-filled-primary-500">
					Zadzwoń: {salon.phone}
				</a>
			</div>
		</div>
	</section>
</main>

<footer class="border-t border-surface-200-800">
	<div
		class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-surface-600-400 sm:flex-row"
	>
		<p class="flex items-center gap-2 font-semibold text-surface-900-100">
			<Scissors size={16} class="text-primary-500" />
			{salon.name} {salon.tagline}
		</p>
		<p>© {new Date().getFullYear()} {salon.name}. Wszystkie prawa zastrzeżone.</p>
	</div>
</footer>
