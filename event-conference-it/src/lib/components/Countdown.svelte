<script lang="ts">
	// Licznik do startu konferencji — czysty Svelte 5 ($state + $effect), bez bibliotek.
	let { target }: { target: string } = $props();

	let now = $state(Date.now());

	$effect(() => {
		const id = setInterval(() => (now = Date.now()), 1000);
		return () => clearInterval(id);
	});

	const remaining = $derived(Math.max(0, new Date(target).getTime() - now));

	const parts = $derived([
		{ value: Math.floor(remaining / 86_400_000), label: 'dni' },
		{ value: Math.floor(remaining / 3_600_000) % 24, label: 'godz.' },
		{ value: Math.floor(remaining / 60_000) % 60, label: 'min' },
		{ value: Math.floor(remaining / 1000) % 60, label: 'sek.' }
	]);
</script>

<div class="flex flex-wrap gap-3">
	{#each parts as part (part.label)}
		<div
			class="flex min-w-20 flex-col items-center rounded-xl border border-surface-200-800 bg-surface-50-950/70 px-4 py-3 backdrop-blur"
		>
			<span class="font-mono text-3xl font-black tabular-nums text-primary-500">
				{String(part.value).padStart(2, '0')}
			</span>
			<span class="text-xs uppercase tracking-widest text-surface-600-400">{part.label}</span>
		</div>
	{/each}
</div>
