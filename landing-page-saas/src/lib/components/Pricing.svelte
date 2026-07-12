<script lang="ts">
	import { Check } from '@lucide/svelte';
	import { plans } from '$lib/data';

	// Interaktywny przełącznik okresu rozliczeniowego (Svelte 5 runes).
	let yearly = $state(false);
	const discount = 0.2; // 20% taniej przy płatności rocznej

	function priceFor(monthly: number): number {
		if (monthly === 0) return 0;
		return yearly ? Math.round(monthly * (1 - discount)) : monthly;
	}
</script>

<div class="mb-8 flex flex-col items-center gap-4">
	<div class="inline-flex items-center gap-3 rounded-full preset-tonal p-1">
		<button
			class="btn btn-sm rounded-full"
			class:preset-filled-primary-500={!yearly}
			onclick={() => (yearly = false)}
		>
			Miesięcznie
		</button>
		<button
			class="btn btn-sm rounded-full"
			class:preset-filled-primary-500={yearly}
			onclick={() => (yearly = true)}
		>
			Rocznie
			<span class="badge preset-filled-success-500 ml-1 text-xs">-20%</span>
		</button>
	</div>
</div>

<div class="grid items-stretch gap-6 lg:grid-cols-3">
	{#each plans as plan (plan.name)}
		<article
			class="card relative flex flex-col gap-5 p-8"
			class:preset-filled-primary-500={plan.highlighted}
			class:border={!plan.highlighted}
			class:border-surface-200-800={!plan.highlighted}
		>
			{#if plan.highlighted}
				<span
					class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-surface-50-950 px-3 py-1 text-xs font-bold text-primary-500"
				>
					Najczęściej wybierany
				</span>
			{/if}
			<div>
				<h3 class="text-xl font-bold">{plan.name}</h3>
				<p class="mt-1 text-sm opacity-80">{plan.description}</p>
			</div>
			<div class="flex items-end gap-1">
				<span class="text-4xl font-black">{priceFor(plan.monthly)}</span>
				<span class="pb-1 text-sm opacity-80">zł / mies.</span>
			</div>
			<ul class="flex flex-col gap-2 text-sm">
				{#each plan.features as feature (feature)}
					<li class="flex items-center gap-2">
						<Check size={16} class="shrink-0" />
						{feature}
					</li>
				{/each}
			</ul>
			<a
				href="#top"
				class="btn mt-auto w-full"
				class:preset-filled-surface-50-950={plan.highlighted}
				class:preset-filled-primary-500={!plan.highlighted}
			>
				{plan.monthly === 0 ? 'Zacznij za darmo' : 'Wybierz plan'}
			</a>
		</article>
	{/each}
</div>
