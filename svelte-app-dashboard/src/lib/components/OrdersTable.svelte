<script lang="ts">
	import { Search, ChevronUp, ChevronDown, ArrowUpDown } from '@lucide/svelte';
	import { orders, statusMeta, formatPLN, type Status } from '$lib/data';

	type SortKey = 'id' | 'customer' | 'date' | 'amount' | 'items';

	// Stan interfejsu — wyszukiwanie, filtr statusu, sortowanie (Svelte 5 runes).
	let query = $state('');
	let statusFilter = $state<Status | 'wszystkie'>('wszystkie');
	let sortKey = $state<SortKey>('date');
	let sortDir = $state<'asc' | 'desc'>('desc');

	const statuses: (Status | 'wszystkie')[] = ['wszystkie', 'nowe', 'wyslane', 'dostarczone', 'zwrot'];

	function toggleSort(key: SortKey) {
		if (sortKey === key) {
			sortDir = sortDir === 'asc' ? 'desc' : 'asc';
		} else {
			sortKey = key;
			sortDir = 'asc';
		}
	}

	// Pochodna lista: filtr tekstowy + filtr statusu + sortowanie.
	const filtered = $derived.by(() => {
		const q = query.trim().toLowerCase();
		let rows = orders.filter((o) => {
			const matchesQuery =
				q === '' ||
				o.customer.toLowerCase().includes(q) ||
				o.id.toLowerCase().includes(q) ||
				o.email.toLowerCase().includes(q);
			const matchesStatus = statusFilter === 'wszystkie' || o.status === statusFilter;
			return matchesQuery && matchesStatus;
		});

		rows = [...rows].sort((a, b) => {
			let cmp = 0;
			if (sortKey === 'amount' || sortKey === 'items') {
				cmp = a[sortKey] - b[sortKey];
			} else {
				cmp = String(a[sortKey]).localeCompare(String(b[sortKey]), 'pl');
			}
			return sortDir === 'asc' ? cmp : -cmp;
		});
		return rows;
	});

	const totalValue = $derived(filtered.reduce((sum, o) => sum + o.amount, 0));

	const columns: { key: SortKey; label: string; align?: string }[] = [
		{ key: 'id', label: 'Zamówienie' },
		{ key: 'customer', label: 'Klient' },
		{ key: 'date', label: 'Data' },
		{ key: 'items', label: 'Poz.', align: 'text-right' },
		{ key: 'amount', label: 'Kwota', align: 'text-right' }
	];
</script>

<div class="card border border-surface-200-800">
	<!-- Pasek narzędzi -->
	<div class="flex flex-col gap-4 border-b border-surface-200-800 p-4 lg:flex-row lg:items-center lg:justify-between">
		<div>
			<h3 class="font-semibold">Ostatnie zamówienia</h3>
			<p class="text-sm text-surface-600-400">
				{filtered.length}
				{filtered.length === 1 ? 'wynik' : 'wyników'} · suma {formatPLN(totalValue)}
			</p>
		</div>

		<div class="flex flex-col gap-3 sm:flex-row sm:items-center">
			<div class="input-group grid-cols-[auto_1fr] max-w-xs">
				<div class="ig-cell preset-tonal">
					<Search size={16} />
				</div>
				<input
					class="ig-input"
					type="search"
					placeholder="Szukaj klienta lub numeru…"
					bind:value={query}
				/>
			</div>
		</div>
	</div>

	<!-- Filtry statusu -->
	<div class="flex flex-wrap gap-2 border-b border-surface-200-800 p-4">
		{#each statuses as s (s)}
			<button
				class="chip {statusFilter === s ? 'preset-filled-primary-500' : 'preset-tonal'}"
				onclick={() => (statusFilter = s)}
			>
				{s === 'wszystkie' ? 'Wszystkie' : statusMeta[s].label}
			</button>
		{/each}
	</div>

	<!-- Tabela -->
	<div class="overflow-x-auto">
		<table class="table">
			<thead>
				<tr>
					{#each columns as col (col.key)}
						<th class={col.align}>
							<button
								class="inline-flex items-center gap-1 font-semibold hover:text-primary-500 {col.align ===
								'text-right'
									? 'flex-row-reverse'
									: ''}"
								onclick={() => toggleSort(col.key)}
							>
								{col.label}
								{#if sortKey === col.key}
									{#if sortDir === 'asc'}<ChevronUp size={14} />{:else}<ChevronDown size={14} />{/if}
								{:else}
									<ArrowUpDown size={14} class="opacity-40" />
								{/if}
							</button>
						</th>
						{/each}
					<th>Status</th>
				</tr>
			</thead>
			<tbody class="[&>tr]:hover:preset-tonal">
				{#each filtered as order (order.id)}
					<tr>
						<td class="font-mono text-sm">{order.id}</td>
						<td>
							<div class="font-medium">{order.customer}</div>
							<div class="text-xs text-surface-600-400">{order.email}</div>
						</td>
						<td class="text-sm text-surface-600-400">
							{new Date(order.date).toLocaleDateString('pl-PL')}
						</td>
						<td class="text-right">{order.items}</td>
						<td class="text-right font-medium">{formatPLN(order.amount)}</td>
						<td>
							<span class="badge {statusMeta[order.status].classes}">
								{statusMeta[order.status].label}
							</span>
						</td>
					</tr>
				{:else}
					<tr>
						<td colspan="6" class="py-10 text-center text-surface-600-400">
							Brak zamówień spełniających kryteria.
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
