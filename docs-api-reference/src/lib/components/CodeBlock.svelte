<script lang="ts">
	import { Copy, Check } from '@lucide/svelte';

	let { code, label = '' }: { code: string; label?: string } = $props();

	let copied = $state(false);
	let timer: ReturnType<typeof setTimeout>;

	async function copy() {
		try {
			await navigator.clipboard.writeText(code);
		} catch {
			// Schowek bywa zablokowany (np. w iframe bez uprawnień) — pokazujemy potwierdzenie i tak.
		}
		copied = true;
		clearTimeout(timer);
		timer = setTimeout(() => (copied = false), 1600);
	}
</script>

<div class="overflow-hidden rounded-lg border border-surface-200-800 bg-surface-100-900">
	<div
		class="flex items-center justify-between gap-3 border-b border-surface-200-800 px-4 py-2 text-xs"
	>
		<span class="font-mono uppercase tracking-widest text-surface-600-400">{label}</span>
		<button type="button" class="btn btn-sm preset-tonal" onclick={copy}>
			{#if copied}<Check size={13} /> Skopiowano{:else}<Copy size={13} /> Kopiuj{/if}
		</button>
	</div>
	<pre class="overflow-x-auto p-4 text-sm leading-relaxed"><code>{code}</code></pre>
</div>
