<script lang="ts">
	import { Menu, Bell, Wallet, ShoppingCart, Users, RotateCcw } from '@lucide/svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import StatCard from '$lib/components/StatCard.svelte';
	import RevenueChart from '$lib/components/RevenueChart.svelte';
	import OrdersTable from '$lib/components/OrdersTable.svelte';
	import { orders, formatPLN } from '$lib/data';

	let sidebarOpen = $state(false);

	// KPI liczone z danych (Svelte 5 runes).
	const revenue = $derived(orders.reduce((s, o) => s + o.amount, 0));
	const orderCount = $derived(orders.length);
	const avgOrder = $derived(orderCount ? revenue / orderCount : 0);
	const returns = $derived(orders.filter((o) => o.status === 'zwrot').length);
	const uniqueCustomers = $derived(new Set(orders.map((o) => o.email)).size);
</script>

<svelte:head>
	<title>Panel sprzedaży — Svelte App</title>
	<meta name="description" content="Interaktywny panel sprzedaży zbudowany w SvelteKit." />
</svelte:head>

<div class="min-h-screen">
	<Sidebar bind:open={sidebarOpen} />

	<div class="md:pl-64">
		<!-- Topbar -->
		<header
			class="sticky top-0 z-20 flex items-center justify-between border-b border-surface-200-800 bg-surface-50-950/80 px-4 py-3 backdrop-blur"
		>
			<div class="flex items-center gap-3">
				<button
					class="btn-icon preset-tonal md:hidden"
					aria-label="Otwórz menu"
					onclick={() => (sidebarOpen = true)}
				>
					<Menu size={20} />
				</button>
				<div>
					<h1 class="text-lg font-bold leading-none">Pulpit sprzedaży</h1>
					<p class="text-xs text-surface-600-400">Przegląd ostatnich 30 dni</p>
				</div>
			</div>
			<div class="flex items-center gap-2">
				<button class="btn-icon preset-tonal" aria-label="Powiadomienia">
					<Bell size={18} />
				</button>
				<span class="grid size-9 place-items-center rounded-full preset-filled-primary-500 text-sm font-bold">
					BM
				</span>
			</div>
		</header>

		<!-- Treść -->
		<main class="mx-auto max-w-7xl space-y-6 p-4 md:p-6">
			<!-- KPI -->
			<section class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
				<StatCard label="Przychód" value={formatPLN(revenue)} delta={12.4} icon={Wallet} />
				<StatCard label="Zamówienia" value={String(orderCount)} delta={8.1} icon={ShoppingCart} />
				<StatCard label="Śr. wartość" value={formatPLN(avgOrder)} delta={3.6} icon={Users} />
				<StatCard label="Zwroty" value={String(returns)} delta={-2.0} icon={RotateCcw} />
			</section>

			<!-- Wykres + skrót -->
			<section class="grid gap-6 lg:grid-cols-3">
				<div class="lg:col-span-2">
					<RevenueChart />
				</div>
				<div class="card flex flex-col justify-center gap-4 border border-surface-200-800 p-5">
					<h3 class="font-semibold">Podsumowanie</h3>
					<dl class="space-y-3 text-sm">
						<div class="flex items-center justify-between">
							<dt class="text-surface-600-400">Unikalni klienci</dt>
							<dd class="font-semibold">{uniqueCustomers}</dd>
						</div>
						<div class="flex items-center justify-between">
							<dt class="text-surface-600-400">Konwersja koszyka</dt>
							<dd class="font-semibold">3,8%</dd>
						</div>
						<div class="flex items-center justify-between">
							<dt class="text-surface-600-400">Zwroty</dt>
							<dd class="font-semibold">{((returns / orderCount) * 100).toFixed(1)}%</dd>
						</div>
					</dl>
					<a href="##" class="btn preset-filled-primary-500">Pełny raport</a>
				</div>
			</section>

			<!-- Tabela zamówień -->
			<section>
				<OrdersTable />
			</section>
		</main>
	</div>
</div>
