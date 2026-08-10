<script lang="ts">
	import { untrack } from 'svelte';
	import { ChevronDown } from '@lucide/svelte';
	import CodeBlock from './CodeBlock.svelte';
	import type { Endpoint } from '$lib/data';

	let { endpoint, expanded = false }: { endpoint: Endpoint; expanded?: boolean } = $props();

	// `expanded` ustawia tylko stan początkowy — potem kartą steruje użytkownik.
	let open = $state(untrack(() => expanded));

	const methodClass: Record<Endpoint['method'], string> = {
		GET: 'preset-filled-success-500',
		POST: 'preset-filled-primary-500',
		PATCH: 'preset-filled-warning-500',
		DELETE: 'preset-filled-error-500'
	};
</script>

<article id={endpoint.id} class="card scroll-mt-6 border border-surface-200-800 bg-surface-50-950">
	<button
		type="button"
		class="flex w-full items-center gap-3 p-4 text-left"
		onclick={() => (open = !open)}
		aria-expanded={open}
	>
		<span class="badge shrink-0 font-mono text-xs {methodClass[endpoint.method]}">
			{endpoint.method}
		</span>
		<span class="min-w-0 grow">
			<span class="block truncate font-mono text-sm font-semibold">{endpoint.path}</span>
			<span class="block truncate text-xs text-surface-600-400">{endpoint.summary}</span>
		</span>
		<ChevronDown
			size={18}
			class="shrink-0 text-surface-600-400 transition-transform {open ? 'rotate-180' : ''}"
		/>
	</button>

	{#if open}
		<div class="space-y-5 border-t border-surface-200-800 p-4">
			<div>
				<h4 class="mb-2 text-xs font-semibold uppercase tracking-widest text-surface-600-400">
					Parametry
				</h4>
				<div class="overflow-x-auto">
					<table class="table table-fixed text-sm">
						<thead>
							<tr>
								<th class="w-32">Nazwa</th>
								<th class="w-24">Typ</th>
								<th class="w-24">Wymagany</th>
								<th>Opis</th>
							</tr>
						</thead>
						<tbody>
							{#each endpoint.params as param (param.name)}
								<tr>
									<td class="font-mono text-xs">{param.name}</td>
									<td class="font-mono text-xs text-surface-600-400">{param.type}</td>
									<td class="text-xs">
										{#if param.required}
											<span class="badge preset-tonal-error text-[10px]">tak</span>
										{:else}
											<span class="badge preset-tonal text-[10px]">nie</span>
										{/if}
									</td>
									<td class="text-xs text-surface-600-400">{param.description}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>

			<div>
				<h4 class="mb-2 text-xs font-semibold uppercase tracking-widest text-surface-600-400">
					Przykładowa odpowiedź
				</h4>
				<CodeBlock code={endpoint.response} label="200 OK · application/json" />
			</div>
		</div>
	{/if}
</article>
