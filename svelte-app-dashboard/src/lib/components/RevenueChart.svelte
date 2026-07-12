<script lang="ts">
	import { revenueSeries } from '$lib/data';

	// Prosty wykres słupkowy w czystym SVG + interaktywny hover (Svelte 5 runes).
	let hovered = $state<number | null>(null);

	const max = Math.max(...revenueSeries.map((d) => d.value));
	const chartH = 180;
	const gap = 12;
	const barW = 100 / revenueSeries.length;

	const active = $derived(hovered ?? revenueSeries.length - 1);
</script>

<div class="card border border-surface-200-800 p-5">
	<div class="mb-4 flex items-start justify-between">
		<div>
			<h3 class="font-semibold">Przychód (12 mies.)</h3>
			<p class="text-sm text-surface-600-400">
				{revenueSeries[active].month}:
				<span class="font-semibold text-surface-900-100">
					{revenueSeries[active].value} tys. zł
				</span>
			</p>
		</div>
	</div>

	<svg viewBox="0 0 100 {chartH}" class="h-48 w-full" role="img" aria-label="Wykres przychodu">
		{#each revenueSeries as d, i (d.month)}
			{@const h = (d.value / max) * (chartH - 24)}
			<g
				role="presentation"
				onpointerenter={() => (hovered = i)}
				onpointerleave={() => (hovered = null)}
			>
				<!-- tło słupka (pełna wysokość — powiększa obszar najechania) -->
				<rect x={i * barW} y="0" width={barW} height={chartH} fill="transparent" />
				<rect
					x={i * barW + gap / 4}
					y={chartH - h - 16}
					width={barW - gap / 2}
					height={h}
					rx="1.5"
					class="transition-all duration-150"
					fill="currentColor"
					opacity={hovered === null || hovered === i ? 1 : 0.35}
					style="color: var(--color-primary-500)"
				/>
				<text
					x={i * barW + barW / 2}
					y={chartH - 4}
					text-anchor="middle"
					class="fill-surface-600-400"
					style="font-size: 4px"
				>
					{d.month}
				</text>
			</g>
		{/each}
	</svg>
</div>
