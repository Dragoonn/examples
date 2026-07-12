<script lang="ts">
	import { ChevronDown } from '@lucide/svelte';
	import { faqs } from '$lib/data';

	// Rozwijana lista — otwarty indeks (Svelte 5 runes).
	let openIndex = $state<number | null>(0);

	function toggle(i: number) {
		openIndex = openIndex === i ? null : i;
	}
</script>

<div class="mx-auto flex max-w-2xl flex-col gap-3">
	{#each faqs as faq, i (faq.question)}
		<div class="card overflow-hidden border border-surface-200-800">
			<button
				class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium hover:preset-tonal"
				onclick={() => toggle(i)}
				aria-expanded={openIndex === i}
			>
				{faq.question}
				<ChevronDown
					size={20}
					class="shrink-0 text-primary-500 transition-transform duration-200 {openIndex === i
						? 'rotate-180'
						: ''}"
				/>
			</button>
			{#if openIndex === i}
				<p class="px-5 pb-5 text-sm text-surface-600-400">{faq.answer}</p>
			{/if}
		</div>
	{/each}
</div>
