<script lang="ts">
	import { Radio, Search, X } from '@lucide/svelte';
	import { product, navigation, endpoints } from '$lib/data';

	let { query = $bindable(''), open = $bindable(false) }: { query?: string; open?: boolean } =
		$props();

	// Podpowiedzi endpointów pod polem wyszukiwania (Svelte 5 runes).
	const matches = $derived(
		query.trim().length < 2
			? []
			: endpoints
					.filter((endpoint) =>
						`${endpoint.method} ${endpoint.path} ${endpoint.summary}`
							.toLowerCase()
							.includes(query.trim().toLowerCase())
					)
					.slice(0, 5)
	);
</script>

<aside
	class="flex h-full flex-col gap-6 border-r border-surface-200-800 bg-surface-50-950 p-5 lg:sticky lg:top-0 lg:h-screen lg:w-72 lg:shrink-0"
>
	<div class="flex items-center justify-between gap-2">
		<a href="#wprowadzenie" class="flex items-center gap-2 font-bold tracking-tight">
			<span class="grid size-9 place-items-center rounded-lg preset-filled-primary-500">
				<Radio size={18} />
			</span>
			<span>
				<span class="block leading-tight">{product.name}</span>
				<span class="block font-mono text-xs font-normal text-surface-600-400">
					{product.version}
				</span>
			</span>
		</a>
		<button
			class="btn-icon preset-tonal lg:hidden"
			aria-label="Zamknij menu"
			onclick={() => (open = false)}
		>
			<X size={18} />
		</button>
	</div>

	<div class="relative">
		<Search size={15} class="absolute left-3 top-1/2 -translate-y-1/2 text-surface-600-400" />
		<input
			class="input pl-9"
			placeholder="Szukaj endpointu…"
			bind:value={query}
			aria-label="Szukaj endpointu"
		/>
		{#if matches.length > 0}
			<ul
				class="absolute z-20 mt-2 w-full overflow-hidden rounded-lg border border-surface-200-800 bg-surface-50-950 shadow-xl"
			>
				{#each matches as endpoint (endpoint.id)}
					<li>
						<a
							href="#{endpoint.id}"
							class="flex items-center gap-2 px-3 py-2 text-xs hover:preset-tonal"
							onclick={() => {
								query = '';
								open = false;
							}}
						>
							<span class="font-mono font-bold text-primary-500">{endpoint.method}</span>
							<span class="truncate font-mono">{endpoint.path}</span>
						</a>
					</li>
				{/each}
			</ul>
		{/if}
	</div>

	<nav class="grow">
		<ul class="space-y-1 text-sm">
			{#each navigation as item (item.id)}
				<li>
					<a
						href="#{item.id}"
						class="block rounded px-3 py-2 text-surface-600-400 transition-colors hover:preset-tonal hover:text-primary-500"
						onclick={() => (open = false)}
					>
						{item.label}
					</a>
				</li>
			{/each}
		</ul>
	</nav>

	<div class="rounded-lg preset-tonal-primary p-4 text-xs leading-relaxed">
		<p class="font-semibold">Potrzebujesz klucza?</p>
		<p class="mt-1 text-surface-700-300">
			Klucz testowy dostajesz od razu po rejestracji — bez karty i bez rozmowy z handlowcem.
		</p>
	</div>
</aside>
