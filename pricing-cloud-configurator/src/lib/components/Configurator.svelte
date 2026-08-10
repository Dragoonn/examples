<script lang="ts">
	import { Cpu, MemoryStick, HardDrive, Globe, Check, Sparkles } from '@lucide/svelte';
	import {
		unitPrices,
		limits,
		regions,
		addons,
		presets,
		includedFeatures,
		type AddonId
	} from '$lib/data';

	// Cały konfigurator to czysty Svelte 5: $state na wejściach, $derived na cenie.
	let vcpu = $state(6);
	let ram = $state(16);
	let disk = $state(320);
	let regionId = $state(regions[0].id);
	let yearly = $state(false);
	let selectedAddons = $state<Record<AddonId, boolean>>({
		backup: true,
		ddos: false,
		panel: true,
		monitoring: false
	});

	const region = $derived(regions.find((item) => item.id === regionId) ?? regions[0]);

	const basePrice = $derived(
		vcpu * unitPrices.vcpu + ram * unitPrices.ramGb + disk * unitPrices.diskGb
	);

	const addonsPrice = $derived(
		addons.reduce((sum, addon) => (selectedAddons[addon.id] ? sum + unitPrices[addon.id] : sum), 0)
	);

	// Rok z góry = dwa miesiące gratis, czyli 10/12 ceny miesięcznej.
	const monthlyNet = $derived((basePrice + addonsPrice) * region.multiplier * (yearly ? 10 / 12 : 1));
	const monthlyGross = $derived(monthlyNet * 1.23);
	const yearlySavings = $derived((basePrice + addonsPrice) * region.multiplier * 2);

	const activePreset = $derived(
		presets.find((preset) => preset.vcpu === vcpu && preset.ram === ram && preset.disk === disk)
	);

	function applyPreset(preset: (typeof presets)[number]) {
		vcpu = preset.vcpu;
		ram = preset.ram;
		disk = preset.disk;
	}

	const zl = new Intl.NumberFormat('pl-PL', { maximumFractionDigits: 0 });
</script>

<div class="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
	<!-- WEJŚCIA -->
	<div class="card flex flex-col gap-8 border border-surface-200-800 bg-surface-50-950 p-6 md:p-8">
		<div>
			<h3 class="text-lg font-semibold">Gotowe konfiguracje</h3>
			<p class="mt-1 text-sm text-surface-600-400">
				Zacznij od typowego zestawu i dostrój suwakami poniżej.
			</p>
			<div class="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
				{#each presets as preset (preset.id)}
					<button
						type="button"
						class="card border p-4 text-left transition-shadow hover:shadow-md {activePreset?.id ===
						preset.id
							? 'border-primary-500 preset-tonal-primary'
							: 'border-surface-200-800'}"
						onclick={() => applyPreset(preset)}
					>
						<span class="flex items-center justify-between gap-2">
							<span class="font-semibold">{preset.name}</span>
							{#if preset.popular}
								<Sparkles size={14} class="text-primary-500" />
							{/if}
						</span>
						<span class="mt-1 block font-mono text-xs text-surface-600-400">
							{preset.vcpu} vCPU · {preset.ram} GB · {preset.disk} GB
						</span>
						<span class="mt-2 block text-xs text-surface-600-400">{preset.description}</span>
					</button>
				{/each}
			</div>
		</div>

		<div class="space-y-6 border-t border-surface-200-800 pt-6">
			<label class="block">
				<span class="flex items-center justify-between gap-3">
					<span class="flex items-center gap-2 font-medium">
						<Cpu size={17} class="text-primary-500" /> Procesor
					</span>
					<span class="font-mono text-sm font-bold text-primary-500">{vcpu} vCPU</span>
				</span>
				<input
					type="range"
					class="input mt-3"
					min={limits.vcpu.min}
					max={limits.vcpu.max}
					step={limits.vcpu.step}
					bind:value={vcpu}
				/>
			</label>

			<label class="block">
				<span class="flex items-center justify-between gap-3">
					<span class="flex items-center gap-2 font-medium">
						<MemoryStick size={17} class="text-primary-500" /> Pamięć RAM
					</span>
					<span class="font-mono text-sm font-bold text-primary-500">{ram} GB</span>
				</span>
				<input
					type="range"
					class="input mt-3"
					min={limits.ram.min}
					max={limits.ram.max}
					step={limits.ram.step}
					bind:value={ram}
				/>
			</label>

			<label class="block">
				<span class="flex items-center justify-between gap-3">
					<span class="flex items-center gap-2 font-medium">
						<HardDrive size={17} class="text-primary-500" /> Dysk NVMe
					</span>
					<span class="font-mono text-sm font-bold text-primary-500">{disk} GB</span>
				</span>
				<input
					type="range"
					class="input mt-3"
					min={limits.disk.min}
					max={limits.disk.max}
					step={limits.disk.step}
					bind:value={disk}
				/>
			</label>
		</div>

		<div class="border-t border-surface-200-800 pt-6">
			<h3 class="flex items-center gap-2 font-medium">
				<Globe size={17} class="text-primary-500" /> Lokalizacja
			</h3>
			<div class="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
				{#each regions as item (item.id)}
					<button
						type="button"
						class="card border p-3 text-left {regionId === item.id
							? 'border-primary-500 preset-tonal-primary'
							: 'border-surface-200-800'}"
						onclick={() => (regionId = item.id)}
					>
						<span class="block font-semibold">{item.city}</span>
						<span class="block text-xs text-surface-600-400">{item.country}</span>
						<span class="mt-1 block font-mono text-[11px] text-surface-600-400">
							{item.latency}
						</span>
					</button>
				{/each}
			</div>
		</div>

		<div class="border-t border-surface-200-800 pt-6">
			<h3 class="font-medium">Dodatki</h3>
			<div class="mt-3 space-y-2">
				{#each addons as addon (addon.id)}
					<label
						class="flex cursor-pointer items-start gap-3 rounded-lg border border-surface-200-800 p-3 transition-colors hover:preset-tonal"
					>
						<input
							type="checkbox"
							class="checkbox mt-0.5"
							bind:checked={selectedAddons[addon.id]}
						/>
						<span class="grow">
							<span class="flex flex-wrap items-baseline justify-between gap-2">
								<span class="font-medium">{addon.name}</span>
								<span class="font-mono text-sm text-primary-500">
									+{unitPrices[addon.id]} zł
								</span>
							</span>
							<span class="mt-0.5 block text-xs text-surface-600-400">{addon.description}</span>
						</span>
					</label>
				{/each}
			</div>
		</div>
	</div>

	<!-- PODSUMOWANIE -->
	<aside class="lg:sticky lg:top-24 lg:self-start">
		<div class="card border border-primary-500/40 bg-surface-50-950 p-6 shadow-xl">
			<div class="flex items-center justify-between gap-3">
				<h3 class="text-lg font-semibold">Twoja wycena</h3>
				{#if activePreset}
					<span class="badge preset-tonal-primary text-xs">{activePreset.name}</span>
				{/if}
			</div>

			<div class="mt-4 inline-flex w-full items-center gap-2 rounded-full preset-tonal p-1.5">
				<button
					type="button"
					class="chip grow {!yearly ? 'preset-filled-primary-500' : ''}"
					onclick={() => (yearly = false)}
				>
					Miesięcznie
				</button>
				<button
					type="button"
					class="chip grow {yearly ? 'preset-filled-primary-500' : ''}"
					onclick={() => (yearly = true)}
				>
					Rocznie −2 mies.
				</button>
			</div>

			<p class="mt-6 flex items-baseline gap-2">
				<span class="text-4xl font-black text-primary-500">{zl.format(monthlyNet)}</span>
				<span class="text-sm text-surface-600-400">zł netto / mies.</span>
			</p>
			<p class="mt-1 text-sm text-surface-600-400">
				{zl.format(monthlyGross)} zł brutto · {zl.format(monthlyNet * 12)} zł netto rocznie
			</p>

			{#if yearly}
				<p class="mt-3 rounded-lg preset-tonal-success p-3 text-sm">
					Oszczędzasz {zl.format(yearlySavings)} zł rocznie względem płatności miesięcznej.
				</p>
			{/if}

			<dl class="mt-6 space-y-2 border-t border-surface-200-800 pt-4 text-sm">
				<div class="flex justify-between gap-3">
					<dt class="text-surface-600-400">{vcpu} vCPU</dt>
					<dd class="font-mono">{zl.format(vcpu * unitPrices.vcpu)} zł</dd>
				</div>
				<div class="flex justify-between gap-3">
					<dt class="text-surface-600-400">{ram} GB RAM</dt>
					<dd class="font-mono">{zl.format(ram * unitPrices.ramGb)} zł</dd>
				</div>
				<div class="flex justify-between gap-3">
					<dt class="text-surface-600-400">{disk} GB NVMe</dt>
					<dd class="font-mono">{zl.format(disk * unitPrices.diskGb)} zł</dd>
				</div>
				{#each addons.filter((addon) => selectedAddons[addon.id]) as addon (addon.id)}
					<div class="flex justify-between gap-3">
						<dt class="text-surface-600-400">{addon.name}</dt>
						<dd class="font-mono">{zl.format(unitPrices[addon.id])} zł</dd>
					</div>
				{/each}
				<div class="flex justify-between gap-3">
					<dt class="text-surface-600-400">Lokalizacja: {region.city}</dt>
					<dd class="font-mono">×{region.multiplier}</dd>
				</div>
			</dl>

			<a href="#kontakt" class="btn mt-6 w-full preset-filled-primary-500">Uruchom serwer</a>
			<p class="mt-2 text-center text-xs text-surface-600-400">
				Bez umowy terminowej · rezygnacja w dowolnym momencie
			</p>

			<ul class="mt-6 space-y-2 border-t border-surface-200-800 pt-4">
				{#each includedFeatures as feature (feature)}
					<li class="flex items-start gap-2 text-xs text-surface-600-400">
						<Check size={14} class="mt-0.5 shrink-0 text-primary-500" />
						{feature}
					</li>
				{/each}
			</ul>
		</div>
	</aside>
</div>
