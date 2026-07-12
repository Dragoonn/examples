<script lang="ts">
	import {
		FileText,
		Bell,
		ChartColumn,
		Repeat,
		ShieldCheck,
		Smartphone,
		ArrowRight,
		Sparkles,
		Star
	} from '@lucide/svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Pricing from '$lib/components/Pricing.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import { product, features, steps, testimonials } from '$lib/data';

	const icons: Record<string, typeof FileText> = {
		FileText,
		Bell,
		ChartColumn,
		Repeat,
		ShieldCheck,
		Smartphone
	};
</script>

<svelte:head>
	<title>{product.name} — {product.tagline}</title>
	<meta name="description" content={product.subtitle} />
</svelte:head>

<div id="top"></div>
<Navbar />

<main>
	<!-- HERO -->
	<section class="relative overflow-hidden">
		<div
			class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b from-primary-500/15 to-transparent"
		></div>
		<div class="mx-auto max-w-4xl px-4 py-20 text-center md:py-28">
			<span
				class="mb-5 inline-flex items-center gap-2 rounded-full preset-tonal-primary px-3 py-1 text-xs font-semibold"
			>
				<Sparkles size={14} /> Nowość: integracja z KSeF
			</span>
			<h1 class="text-4xl font-black leading-tight tracking-tight md:text-6xl">
				{product.tagline}
			</h1>
			<p class="mx-auto mt-6 max-w-2xl text-lg text-surface-600-400">
				{product.subtitle}
			</p>
			<div class="mt-9 flex flex-wrap justify-center gap-3">
				<a href="#cennik" class="btn preset-filled-primary-500">
					{product.cta}
					<ArrowRight size={18} />
				</a>
				<a href="#jak-to-dziala" class="btn preset-outlined-surface-500">
					{product.ctaSecondary}
				</a>
			</div>
			<p class="mt-4 text-sm text-surface-600-400">
				Bez karty kredytowej · Konfiguracja w 2 minuty
			</p>

			<!-- Pasek zaufania -->
			<div class="mt-14 flex flex-col items-center gap-3">
				<div class="flex items-center gap-1 text-primary-500">
					{#each Array(5) as _, i (i)}
						<Star size={18} class="fill-current" />
					{/each}
				</div>
				<p class="text-sm text-surface-600-400">
					4,8/5 — zaufało nam ponad <span class="font-semibold text-surface-900-100">4 200</span>
					freelancerów
				</p>
			</div>
		</div>
	</section>

	<!-- FUNKCJE -->
	<section id="funkcje" class="mx-auto max-w-6xl px-4 py-16 md:py-24">
		<div class="mb-12 text-center">
			<h2 class="text-3xl font-bold md:text-4xl">Wszystko, czego potrzebujesz</h2>
			<p class="mt-2 text-surface-600-400">
				Zapomnij o Excelu i przypominajkach w kalendarzu.
			</p>
		</div>
		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each features as feature (feature.title)}
				{@const Icon = icons[feature.icon]}
				<article class="card flex flex-col gap-3 border border-surface-200-800 p-6">
					<span class="grid size-11 place-items-center rounded-xl preset-tonal-primary">
						<Icon size={22} />
					</span>
					<h3 class="text-lg font-semibold">{feature.title}</h3>
					<p class="text-sm text-surface-600-400">{feature.description}</p>
				</article>
			{/each}
		</div>
	</section>

	<!-- JAK TO DZIAŁA -->
	<section id="jak-to-dziala" class="border-y border-surface-200-800 preset-tonal">
		<div class="mx-auto max-w-6xl px-4 py-16 md:py-24">
			<div class="mb-12 text-center">
				<h2 class="text-3xl font-bold md:text-4xl">Zaczynasz w 3 krokach</h2>
				<p class="mt-2 text-surface-600-400">Od rejestracji do pierwszej faktury w kilka minut.</p>
			</div>
			<ol class="grid gap-8 md:grid-cols-3">
				{#each steps as step, i (step.title)}
					<li class="flex flex-col items-center gap-3 text-center">
						<span
							class="grid size-12 place-items-center rounded-full preset-filled-primary-500 text-lg font-bold"
						>
							{i + 1}
						</span>
						<h3 class="text-lg font-semibold">{step.title}</h3>
						<p class="max-w-xs text-sm text-surface-600-400">{step.description}</p>
					</li>
				{/each}
			</ol>
		</div>
	</section>

	<!-- OPINIE -->
	<section class="mx-auto max-w-6xl px-4 py-16 md:py-24">
		<div class="mb-12 text-center">
			<h2 class="text-3xl font-bold md:text-4xl">Mówią o nas najlepiej</h2>
		</div>
		<div class="grid gap-6 md:grid-cols-3">
			{#each testimonials as t (t.author)}
				<figure class="card flex flex-col gap-4 border border-surface-200-800 p-6">
					<div class="flex gap-1 text-primary-500">
						{#each Array(5) as _, i (i)}
							<Star size={16} class="fill-current" />
						{/each}
					</div>
					<blockquote class="grow text-sm leading-relaxed">„{t.quote}”</blockquote>
					<figcaption class="flex items-center gap-3 border-t border-surface-200-800 pt-4">
						<span
							class="grid size-10 place-items-center rounded-full preset-tonal-primary text-sm font-bold"
						>
							{t.initials}
						</span>
						<span>
							<span class="block text-sm font-semibold">{t.author}</span>
							<span class="block text-xs text-surface-600-400">{t.role}</span>
						</span>
					</figcaption>
				</figure>
			{/each}
		</div>
	</section>

	<!-- CENNIK -->
	<section id="cennik" class="border-y border-surface-200-800 preset-tonal">
		<div class="mx-auto max-w-6xl px-4 py-16 md:py-24">
			<div class="mb-10 text-center">
				<h2 class="text-3xl font-bold md:text-4xl">Prosty, przejrzysty cennik</h2>
				<p class="mt-2 text-surface-600-400">Zacznij za darmo, płać dopiero gdy urośniesz.</p>
			</div>
			<Pricing />
		</div>
	</section>

	<!-- FAQ -->
	<section id="faq" class="mx-auto max-w-6xl px-4 py-16 md:py-24">
		<div class="mb-10 text-center">
			<h2 class="text-3xl font-bold md:text-4xl">Częste pytania</h2>
		</div>
		<Faq />
	</section>

	<!-- CTA KOŃCOWE -->
	<section class="mx-auto max-w-6xl px-4 pb-24">
		<div
			class="card flex flex-col items-center gap-5 preset-filled-primary-500 px-6 py-14 text-center"
		>
			<h2 class="text-3xl font-black md:text-4xl">Gotowy, by odzyskać czas?</h2>
			<p class="max-w-xl opacity-90">
				Dołącz do tysięcy freelancerów, którzy wystawiają faktury szybciej i dostają zapłatę na czas.
			</p>
			<a href="#top" class="btn preset-filled-surface-50-950">
				{product.cta}
				<ArrowRight size={18} />
			</a>
		</div>
	</section>
</main>

<footer class="border-t border-surface-200-800">
	<div
		class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-surface-600-400 sm:flex-row"
	>
		<p class="font-semibold text-surface-900-100">{product.name}</p>
		<p>© {new Date().getFullYear()} {product.name}. Projekt demonstracyjny.</p>
	</div>
</footer>
