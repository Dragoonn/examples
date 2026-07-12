<script lang="ts">
	import { Scissors, Menu, X } from '@lucide/svelte';
	import { salon } from '$lib/data';

	let open = $state(false);

	const links = [
		{ href: '#uslugi', label: 'Usługi' },
		{ href: '#zespol', label: 'Zespół' },
		{ href: '#godziny', label: 'Godziny' },
		{ href: '#kontakt', label: 'Kontakt' }
	];

	function close() {
		open = false;
	}
</script>

<header
	class="sticky top-0 z-50 border-b border-surface-200-800 bg-surface-50-950/80 backdrop-blur"
>
	<nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
		<a href="#top" class="flex items-center gap-2 font-bold tracking-tight" onclick={close}>
			<span class="grid size-9 place-items-center rounded-full preset-filled-primary-500">
				<Scissors size={18} />
			</span>
			<span class="text-lg">{salon.name}</span>
		</a>

		<ul class="hidden items-center gap-8 text-sm font-medium md:flex">
			{#each links as link (link.href)}
				<li>
					<a href={link.href} class="text-surface-600-400 transition-colors hover:text-primary-500">
						{link.label}
					</a>
				</li>
			{/each}
		</ul>

		<div class="flex items-center gap-2">
			<a href="#kontakt" class="btn hidden preset-filled-primary-500 md:inline-flex">Umów wizytę</a>
			<button
				class="btn-icon preset-tonal md:hidden"
				aria-label="Menu"
				onclick={() => (open = !open)}
			>
				{#if open}<X size={20} />{:else}<Menu size={20} />{/if}
			</button>
		</div>
	</nav>

	{#if open}
		<ul class="flex flex-col gap-1 border-t border-surface-200-800 px-4 py-3 md:hidden">
			{#each links as link (link.href)}
				<li>
					<a
						href={link.href}
						class="block rounded px-2 py-2 hover:preset-tonal"
						onclick={close}
					>
						{link.label}
					</a>
				</li>
			{/each}
			<li class="pt-1">
				<a href="#kontakt" class="btn w-full preset-filled-primary-500" onclick={close}>
					Umów wizytę
				</a>
			</li>
		</ul>
	{/if}
</header>
