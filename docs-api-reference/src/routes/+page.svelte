<script lang="ts">
	import { Radio, Menu, Terminal, KeyRound, ShieldAlert, Gauge, History } from '@lucide/svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import CodeBlock from '$lib/components/CodeBlock.svelte';
	import EndpointCard from '$lib/components/EndpointCard.svelte';
	import {
		product,
		quickstart,
		authSnippet,
		endpoints,
		errors,
		rateLimits,
		changelog
	} from '$lib/data';

	// Stan interfejsu dokumentacji (Svelte 5 runes).
	let query = $state('');
	let menuOpen = $state(false);
	let lang = $state(quickstart[0].lang);
	let group = $state<'Wszystkie' | 'Wiadomości' | 'Szablony' | 'Kontakty' | 'Webhooki'>('Wszystkie');

	const groups = ['Wszystkie', 'Wiadomości', 'Szablony', 'Kontakty', 'Webhooki'] as const;
	const snippet = $derived(quickstart.find((item) => item.lang === lang) ?? quickstart[0]);
	const visibleEndpoints = $derived(
		group === 'Wszystkie' ? endpoints : endpoints.filter((endpoint) => endpoint.group === group)
	);
</script>

<svelte:head>
	<title>{product.name} {product.version} — {product.tagline}</title>
	<meta name="description" content={product.description} />
</svelte:head>

<div class="flex min-h-screen flex-col lg:flex-row">
	<!-- Pasek mobilny -->
	<div
		class="sticky top-0 z-40 flex items-center justify-between border-b border-surface-200-800 bg-surface-50-950/90 px-4 py-3 backdrop-blur lg:hidden"
	>
		<span class="flex items-center gap-2 font-bold">
			<Radio size={18} class="text-primary-500" />
			{product.name}
			<span class="font-mono text-xs font-normal text-surface-600-400">{product.version}</span>
		</span>
		<button class="btn-icon preset-tonal" aria-label="Menu" onclick={() => (menuOpen = !menuOpen)}>
			<Menu size={20} />
		</button>
	</div>

	<div class="{menuOpen ? 'block' : 'hidden'} lg:block">
		<Sidebar bind:query bind:open={menuOpen} />
	</div>

	<main class="mx-auto w-full max-w-4xl grow px-4 py-10 md:px-8 md:py-14">
		<!-- WPROWADZENIE -->
		<section id="wprowadzenie" class="scroll-mt-6">
			<span
				class="mb-4 inline-flex items-center gap-2 rounded-full preset-tonal-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider"
			>
				<Terminal size={14} /> {product.tagline}
			</span>
			<h1 class="text-3xl font-black tracking-tight md:text-5xl">{product.name} {product.version}</h1>
			<p class="mt-4 max-w-2xl text-lg text-surface-600-400">{product.description}</p>

			<div class="mt-6 flex flex-wrap items-center gap-3">
				<span class="chip preset-tonal font-mono text-xs">{product.baseUrl}</span>
				<span class="chip preset-tonal-success text-xs">Status: operational</span>
				<span class="chip preset-tonal text-xs">Średni czas odpowiedzi: 84 ms</span>
			</div>
		</section>

		<!-- SZYBKI START -->
		<section id="szybki-start" class="mt-14 scroll-mt-6">
			<h2 class="text-2xl font-bold">Szybki start</h2>
			<p class="mt-2 text-surface-600-400">
				Pierwsza wiadomość wychodzi w trzy minuty. Wybierz język, skopiuj i podmień klucz.
			</p>

			<div class="mt-5 flex flex-wrap gap-2">
				{#each quickstart as item (item.lang)}
					<button
						type="button"
						class="chip {lang === item.lang ? 'preset-filled-primary-500' : 'preset-tonal'}"
						onclick={() => (lang = item.lang)}
					>
						{item.label}
					</button>
				{/each}
			</div>

			<div class="mt-4">
				<CodeBlock code={snippet.code} label={snippet.label} />
			</div>
		</section>

		<!-- UWIERZYTELNIANIE -->
		<section id="uwierzytelnianie" class="mt-14 scroll-mt-6">
			<h2 class="flex items-center gap-2 text-2xl font-bold">
				<KeyRound size={22} class="text-primary-500" /> Uwierzytelnianie
			</h2>
			<p class="mt-2 text-surface-600-400">
				Każde zapytanie wymaga nagłówka z kluczem projektu. Klucze <code
					class="font-mono text-primary-500">psk_test_</code
				>
				działają tylko w piaskownicy i nie wysyłają realnych wiadomości.
			</p>
			<div class="mt-4">
				<CodeBlock code={authSnippet} label="Nagłówki" />
			</div>
			<aside class="mt-4 rounded-lg preset-tonal-warning p-4 text-sm">
				<strong>Nie umieszczaj klucza w kodzie frontendu.</strong> Wywołuj API z serwera albo przez własny
				endpoint proxy — klucz w przeglądarce jest kluczem publicznym.
			</aside>
		</section>

		<!-- ENDPOINTY -->
		<section id="endpointy" class="mt-14 scroll-mt-6">
			<div class="flex flex-wrap items-end justify-between gap-4">
				<div>
					<h2 class="text-2xl font-bold">Endpointy</h2>
					<p class="mt-2 text-surface-600-400">
						Kliknij endpoint, żeby rozwinąć parametry i przykładową odpowiedź.
					</p>
				</div>
				<div class="flex flex-wrap gap-2">
					{#each groups as item (item)}
						<button
							type="button"
							class="chip {group === item ? 'preset-filled-primary-500' : 'preset-tonal'}"
							onclick={() => (group = item)}
						>
							{item}
						</button>
					{/each}
				</div>
			</div>

			<div class="mt-5 space-y-3">
				{#each visibleEndpoints as endpoint, index (endpoint.id)}
					<EndpointCard {endpoint} expanded={index === 0} />
				{/each}
			</div>
		</section>

		<!-- BŁĘDY -->
		<section id="bledy" class="mt-14 scroll-mt-6">
			<h2 class="flex items-center gap-2 text-2xl font-bold">
				<ShieldAlert size={22} class="text-primary-500" /> Kody błędów
			</h2>
			<p class="mt-2 text-surface-600-400">
				Każdy błąd zwraca pole <code class="font-mono text-primary-500">code</code> — to na nim buduj
				logikę, nie na treści komunikatu.
			</p>
			<div class="mt-5 overflow-x-auto">
				<table class="table text-sm">
					<thead>
						<tr>
							<th class="w-20">HTTP</th>
							<th class="w-48">code</th>
							<th>Znaczenie i co z tym zrobić</th>
						</tr>
					</thead>
					<tbody>
						{#each errors as error (error.code)}
							<tr>
								<td class="font-mono font-bold text-error-500">{error.status}</td>
								<td class="font-mono text-xs">{error.code}</td>
								<td>
									<p>{error.description}</p>
									<p class="mt-1 text-xs text-surface-600-400">→ {error.fix}</p>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</section>

		<!-- LIMITY -->
		<section id="limity" class="mt-14 scroll-mt-6">
			<h2 class="flex items-center gap-2 text-2xl font-bold">
				<Gauge size={22} class="text-primary-500" /> Limity zapytań
			</h2>
			<p class="mt-2 text-surface-600-400">
				Aktualne zużycie znajdziesz w nagłówkach <code class="font-mono text-primary-500"
					>X-RateLimit-*</code
				> każdej odpowiedzi.
			</p>
			<div class="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
				{#each rateLimits as limit (limit.plan)}
					<div class="card border border-surface-200-800 bg-surface-50-950 p-5">
						<h3 class="font-semibold">{limit.plan}</h3>
						<p class="mt-3 text-2xl font-bold text-primary-500">{limit.perMinute}</p>
						<p class="text-xs text-surface-600-400">na minutę</p>
						<dl class="mt-4 space-y-1 border-t border-surface-200-800 pt-3 text-xs">
							<div class="flex justify-between gap-2">
								<dt class="text-surface-600-400">Burst</dt>
								<dd class="font-mono">{limit.burst}</dd>
							</div>
							<div class="flex justify-between gap-2">
								<dt class="text-surface-600-400">Wsparcie</dt>
								<dd>{limit.support}</dd>
							</div>
						</dl>
					</div>
				{/each}
			</div>
		</section>

		<!-- CHANGELOG -->
		<section id="changelog" class="mt-14 scroll-mt-6">
			<h2 class="flex items-center gap-2 text-2xl font-bold">
				<History size={22} class="text-primary-500" /> Changelog
			</h2>
			<ol class="mt-5 space-y-4 border-l border-surface-200-800 pl-6">
				{#each changelog as entry (entry.version)}
					<li class="relative">
						<span
							class="absolute -left-[31px] top-1.5 size-3 rounded-full border-2 border-surface-50-950 bg-primary-500"
						></span>
						<div class="flex flex-wrap items-baseline gap-3">
							<h3 class="font-mono font-bold">{entry.version}</h3>
							<span class="text-xs text-surface-600-400">{entry.date}</span>
						</div>
						<ul class="mt-2 space-y-1 text-sm text-surface-600-400">
							{#each entry.changes as change (change)}
								<li>· {change}</li>
							{/each}
						</ul>
					</li>
				{/each}
			</ol>
		</section>

		<footer class="mt-16 border-t border-surface-200-800 pt-6 text-sm text-surface-600-400">
			<p>
				© {new Date().getFullYear()}
				{product.name} — dokumentacja demonstracyjna. Wszystkie endpointy i klucze są fikcyjne.
			</p>
		</footer>
	</main>
</div>
