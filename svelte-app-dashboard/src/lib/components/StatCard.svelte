<script lang="ts">
	import { TrendingUp, TrendingDown } from '@lucide/svelte';
	import type { Component } from 'svelte';

	let {
		label,
		value,
		delta,
		icon: Icon
	}: { label: string; value: string; delta: number; icon: Component } = $props();

	const positive = $derived(delta >= 0);
</script>

<article class="card flex flex-col gap-3 border border-surface-200-800 p-5">
	<div class="flex items-center justify-between">
		<span class="text-sm text-surface-600-400">{label}</span>
		<span class="grid size-9 place-items-center rounded-lg preset-tonal-primary">
			<Icon size={18} />
		</span>
	</div>
	<div class="text-2xl font-bold">{value}</div>
	<div class="flex items-center gap-1 text-xs font-medium {positive ? 'text-success-500' : 'text-error-500'}">
		{#if positive}<TrendingUp size={14} />{:else}<TrendingDown size={14} />{/if}
		{positive ? '+' : ''}{delta}%
		<span class="text-surface-600-400">vs poprzedni miesiąc</span>
	</div>
</article>
