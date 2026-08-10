<script lang="ts">
	import { Send, CheckCircle2 } from '@lucide/svelte';

	// Formularz demonstracyjny — nic nie wysyła, walidacja i stan w Svelte 5 runes.
	let name = $state('');
	let email = $state('');
	let budget = $state('50-100');
	let message = $state('');
	let touched = $state(false);
	let sent = $state(false);

	const errors = $derived({
		name: name.trim().length < 2 ? 'Podaj imię i nazwisko.' : '',
		email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) ? '' : 'Podaj prawidłowy adres e-mail.',
		message: message.trim().length < 20 ? 'Opisz projekt w co najmniej 20 znakach.' : ''
	});
	const valid = $derived(!errors.name && !errors.email && !errors.message);

	const budgets = [
		{ value: '20-50', label: '20–50 tys. zł' },
		{ value: '50-100', label: '50–100 tys. zł' },
		{ value: '100-250', label: '100–250 tys. zł' },
		{ value: '250+', label: 'powyżej 250 tys. zł' }
	];

	function submit(event: SubmitEvent) {
		event.preventDefault();
		touched = true;
		if (valid) sent = true;
	}
</script>

<form class="card flex flex-col gap-4 bg-surface-50-950 p-6 md:p-8" onsubmit={submit}>
	{#if sent}
		<div class="flex flex-col items-center gap-3 py-10 text-center">
			<CheckCircle2 size={44} class="text-primary-500" />
			<h3 class="text-xl font-semibold">Dziękujemy, {name.split(' ')[0]}!</h3>
			<p class="max-w-sm text-sm text-surface-600-400">
				Odpowiadamy w ciągu jednego dnia roboczego. W demonstracyjnej wersji formularz nie wysyła
				danych.
			</p>
			<button type="button" class="btn preset-tonal" onclick={() => (sent = false)}>
				Wypełnij ponownie
			</button>
		</div>
	{:else}
		<h3 class="text-xl font-semibold">Opowiedz o projekcie</h3>

		<label class="label">
			<span class="label-text">Imię i nazwisko</span>
			<input class="input" bind:value={name} placeholder="Jan Kowalski" />
			{#if touched && errors.name}<span class="text-xs text-error-500">{errors.name}</span>{/if}
		</label>

		<label class="label">
			<span class="label-text">Służbowy e-mail</span>
			<input class="input" bind:value={email} placeholder="jan@firma.pl" />
			{#if touched && errors.email}<span class="text-xs text-error-500">{errors.email}</span>{/if}
		</label>

		<fieldset class="label">
			<legend class="label-text mb-2">Orientacyjny budżet</legend>
			<div class="flex flex-wrap gap-2">
				{#each budgets as option (option.value)}
					<button
						type="button"
						class="chip {budget === option.value ? 'preset-filled-primary-500' : 'preset-tonal'}"
						onclick={() => (budget = option.value)}
					>
						{option.label}
					</button>
				{/each}
			</div>
		</fieldset>

		<label class="label">
			<span class="label-text">Czego potrzebujesz?</span>
			<textarea
				class="textarea"
				rows="4"
				bind:value={message}
				placeholder="Mamy sklep na WooCommerce i ręczny proces wyceny..."
			></textarea>
			{#if touched && errors.message}
				<span class="text-xs text-error-500">{errors.message}</span>
			{/if}
		</label>

		<button type="submit" class="btn preset-filled-primary-500">
			<Send size={16} /> Wyślij zapytanie
		</button>
		<p class="text-xs text-surface-600-400">
			Odpowiadamy w ciągu jednego dnia roboczego. Bez zobowiązań i bez handlowca w tle.
		</p>
	{/if}
</form>
