// Dane demonstracyjne konferencji — w realnym projekcie z CMS-a lub panelu organizatora.

export const conference = {
	name: 'DevMeet Kraków',
	edition: '2027',
	claim: 'Dwa dni o tym, jak naprawdę buduje się produkty.',
	description:
		'Konferencja dla programistów, którzy mają dość slajdów bez kodu. 24 prelekcje, 6 warsztatów i 600 osób, które robią to samo co Ty — tylko trochę inaczej.',
	dates: '18–19 marca 2027',
	venue: 'ICE Kraków, ul. Marii Konopnickiej 17',
	email: 'hello@devmeet.krakow.pl',
	// Data startu wykorzystywana przez licznik na stronie.
	startsAt: '2027-03-18T09:00:00+01:00'
};

export const highlights: { value: string; label: string }[] = [
	{ value: '24', label: 'prelekcje' },
	{ value: '6', label: 'warsztatów' },
	{ value: '600', label: 'uczestników' },
	{ value: '2', label: 'dni' }
];

export type Speaker = {
	name: string;
	role: string;
	company: string;
	initials: string;
	topic: string;
	tags: string[];
};

export const speakers: Speaker[] = [
	{
		name: 'Julia Marciniak',
		role: 'Principal Engineer',
		company: 'Vercelium',
		initials: 'JM',
		topic: 'Jak wyciąć 400 ms z czasu odpowiedzi i nie zepsuć niczego',
		tags: ['Performance', 'Edge']
	},
	{
		name: 'Kuba Sobczyk',
		role: 'Staff Frontend',
		company: 'Fintekt',
		initials: 'KS',
		topic: 'Svelte 5 w produkcji: rok później, bez marketingu',
		tags: ['Svelte', 'Frontend']
	},
	{
		name: 'Ola Bednarek',
		role: 'Head of Platform',
		company: 'Cargonauts',
		initials: 'OB',
		topic: 'Platforma wewnętrzna, której zespoły faktycznie używają',
		tags: ['DevEx', 'Platform']
	},
	{
		name: 'Tomasz Grabowski',
		role: 'Security Engineer',
		company: 'Bastion',
		initials: 'TG',
		topic: 'Twoje CI to najsłabsze ogniwo. Pokażę dlaczego',
		tags: ['Security', 'CI/CD']
	},
	{
		name: 'Nina Kowal',
		role: 'Data Engineer',
		company: 'Northstack',
		initials: 'NK',
		topic: "Pipeline'y bez Kafki — kiedy prostsze wygrywa",
		tags: ['Data', 'Architecture']
	},
	{
		name: 'Michał Lis',
		role: 'CTO',
		company: 'Wolna Ręka',
		initials: 'ML',
		topic: 'Techniczny dług, który świadomie zaciągasz',
		tags: ['Leadership', 'Architecture']
	}
];

export type Slot = {
	time: string;
	title: string;
	speaker?: string;
	track: 'Główna' | 'Warsztat' | 'Przerwa';
	description?: string;
};

export const agenda: Record<'Dzień 1' | 'Dzień 2', Slot[]> = {
	'Dzień 1': [
		{ time: '09:00', title: 'Rejestracja i kawa', track: 'Przerwa' },
		{
			time: '10:00',
			title: 'Otwarcie: po co nam jeszcze jedna konferencja',
			speaker: 'Organizatorzy',
			track: 'Główna'
		},
		{
			time: '10:30',
			title: 'Jak wyciąć 400 ms z czasu odpowiedzi i nie zepsuć niczego',
			speaker: 'Julia Marciniak',
			track: 'Główna',
			description: 'Profilowanie, cache na brzegu sieci i trzy pomiary, które robisz źle.'
		},
		{
			time: '11:30',
			title: 'Svelte 5 w produkcji: rok później, bez marketingu',
			speaker: 'Kuba Sobczyk',
			track: 'Główna',
			description: 'Runes w dużym zespole — co się sprawdziło, a co trzeba było cofnąć.'
		},
		{ time: '12:30', title: 'Lunch', track: 'Przerwa' },
		{
			time: '14:00',
			title: 'Warsztat: od zera do wdrożenia w 3 godziny',
			speaker: 'Ola Bednarek',
			track: 'Warsztat',
			description: 'Bilet Warsztaty. Własny laptop, gotowe repo, realny deploy na koniec.'
		},
		{
			time: '17:30',
			title: 'Twoje CI to najsłabsze ogniwo. Pokażę dlaczego',
			speaker: 'Tomasz Grabowski',
			track: 'Główna'
		},
		{ time: '19:00', title: 'After party w Forum Przestrzenie', track: 'Przerwa' }
	],
	'Dzień 2': [
		{ time: '09:30', title: 'Kawa i networking', track: 'Przerwa' },
		{
			time: '10:00',
			title: "Pipeline'y bez Kafki — kiedy prostsze wygrywa",
			speaker: 'Nina Kowal',
			track: 'Główna',
			description: 'Trzy architektury danych i rachunek za każdą z nich.'
		},
		{
			time: '11:00',
			title: 'Platforma wewnętrzna, której zespoły faktycznie używają',
			speaker: 'Ola Bednarek',
			track: 'Główna'
		},
		{ time: '12:00', title: 'Lunch', track: 'Przerwa' },
		{
			time: '13:30',
			title: 'Warsztat: testy, które nie kłamią',
			speaker: 'Tomasz Grabowski',
			track: 'Warsztat',
			description: 'Bilet Warsztaty. Playwright, dane testowe i flaky tests raz na zawsze.'
		},
		{
			time: '16:30',
			title: 'Techniczny dług, który świadomie zaciągasz',
			speaker: 'Michał Lis',
			track: 'Główna'
		},
		{ time: '17:30', title: 'Zamknięcie i losowanie nagród', track: 'Główna' }
	]
};

export type Ticket = {
	name: string;
	price: number;
	workshopPrice: number;
	description: string;
	features: string[];
	popular?: boolean;
};

export const tickets: Ticket[] = [
	{
		name: 'Student',
		price: 190,
		workshopPrice: 390,
		description: 'Dla uczących się — wymagamy legitymacji przy wejściu.',
		features: ['Wstęp na oba dni', 'Materiały z prelekcji', 'Lunch i kawa']
	},
	{
		name: 'Standard',
		price: 690,
		workshopPrice: 1090,
		description: 'Najczęściej wybierany bilet — pełna konferencja bez dodatków.',
		features: ['Wstęp na oba dni', 'Materiały i nagrania', 'Lunch i kawa', 'After party'],
		popular: true
	},
	{
		name: 'Firmowy',
		price: 890,
		workshopPrice: 1290,
		description: 'Faktura z odroczonym terminem i miejsce w strefie rekrutacyjnej.',
		features: [
			'Wszystko ze Standard',
			'Faktura 21 dni',
			'Logo firmy przy stoliku',
			'Priorytetowe miejsca'
		]
	}
];

export const sponsors: { name: string; tier: 'Złoty' | 'Srebrny' }[] = [
	{ name: 'Vercelium', tier: 'Złoty' },
	{ name: 'Fintekt', tier: 'Złoty' },
	{ name: 'Northstack', tier: 'Srebrny' },
	{ name: 'Cargonauts', tier: 'Srebrny' },
	{ name: 'Bastion', tier: 'Srebrny' },
	{ name: 'Wolna Ręka', tier: 'Srebrny' }
];

export const faq: { question: string; answer: string }[] = [
	{
		question: 'Czy prelekcje są po polsku?',
		answer:
			'Tak, wszystkie prelekcje prowadzone są po polsku. Slajdy i przykłady kodu są po angielsku.'
	},
	{
		question: 'Czy dostanę nagrania?',
		answer:
			'Nagrania trafiają do uczestników w ciągu dwóch tygodni po konferencji, a po pół roku publikujemy je otwarcie.'
	},
	{
		question: 'Mogę przenieść bilet na inną osobę?',
		answer:
			'Do 7 dni przed wydarzeniem zmienisz dane uczestnika samodzielnie w panelu — bez dopłaty i bez kontaktu z nami.'
	},
	{
		question: 'Czy warsztaty są w cenie biletu?',
		answer:
			'Nie, warsztaty to osobna opcja. Możesz ją dokupić przy zakupie biletu — liczba miejsc jest ograniczona do 25 osób na warsztat.'
	},
	{
		question: 'Jak z fakturą i płatnością?',
		answer:
			'Bilet Firmowy ma 21-dniowy termin płatności. Pozostałe bilety opłacasz od razu, fakturę dostajesz automatycznie na maila.'
	}
];
