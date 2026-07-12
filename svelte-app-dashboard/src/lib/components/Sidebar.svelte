<script lang="ts">
	import {
		LayoutDashboard,
		ShoppingCart,
		Package,
		Users,
		Settings,
		X
	} from '@lucide/svelte';

	let { open = $bindable(false) }: { open?: boolean } = $props();

	const nav = [
		{ icon: LayoutDashboard, label: 'Pulpit', active: true },
		{ icon: ShoppingCart, label: 'Zamówienia', active: false },
		{ icon: Package, label: 'Produkty', active: false },
		{ icon: Users, label: 'Klienci', active: false },
		{ icon: Settings, label: 'Ustawienia', active: false }
	];
</script>

<!-- Nakładka na mobile -->
{#if open}
	<button
		class="fixed inset-0 z-30 bg-surface-950/50 md:hidden"
		aria-label="Zamknij menu"
		onclick={() => (open = false)}
	></button>
{/if}

<aside
	class="fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-surface-200-800 bg-surface-50-950 transition-transform md:translate-x-0 {open
		? 'translate-x-0'
		: '-translate-x-full'}"
>
	<div class="flex items-center justify-between px-5 py-4">
		<span class="flex items-center gap-2 font-bold">
			<span class="grid size-8 place-items-center rounded-lg preset-filled-primary-500">
				<LayoutDashboard size={18} />
			</span>
			Panel B2B
		</span>
		<button class="btn-icon btn-sm preset-tonal md:hidden" aria-label="Zamknij" onclick={() => (open = false)}>
			<X size={18} />
		</button>
	</div>

	<nav class="flex flex-1 flex-col gap-1 px-3 py-2">
		{#each nav as item (item.label)}
			<a
				href="##"
				class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors {item.active
					? 'preset-filled-primary-500'
					: 'text-surface-600-400 hover:preset-tonal'}"
			>
				<item.icon size={18} />
				{item.label}
			</a>
		{/each}
	</nav>

	<div class="border-t border-surface-200-800 px-5 py-4 text-xs text-surface-600-400">
		v1.0 · demo
	</div>
</aside>
