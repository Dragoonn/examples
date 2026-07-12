// Dane demonstracyjne fikcyjnego produktu SaaS.

export const product = {
	name: 'Fakturly',
	tagline: 'Fakturowanie bez bólu głowy',
	subtitle:
		'Wystawiaj faktury, przypominaj o płatnościach i pilnuj podatków w jednym miejscu. Stworzone dla freelancerów i jednoosobowych firm.',
	cta: 'Zacznij za darmo',
	ctaSecondary: 'Zobacz demo'
};

export type Feature = { icon: string; title: string; description: string };

export const features: Feature[] = [
	{
		icon: 'FileText',
		title: 'Faktury w 30 sekund',
		description: 'Gotowe szablony, automatyczne numerowanie i wysyłka PDF jednym kliknięciem.'
	},
	{
		icon: 'Bell',
		title: 'Automatyczne przypomnienia',
		description: 'Fakturly sam przypomni klientowi o zaległej płatności. Ty odbierasz przelew.'
	},
	{
		icon: 'ChartColumn',
		title: 'Podgląd finansów',
		description: 'Przychody, koszty i szacowany podatek na jednym, czytelnym pulpicie.'
	},
	{
		icon: 'Repeat',
		title: 'Faktury cykliczne',
		description: 'Stali klienci? Ustaw raz, a faktury wygenerują się i wyślą automatycznie.'
	},
	{
		icon: 'ShieldCheck',
		title: 'Zgodność z przepisami',
		description: 'Aktualne stawki VAT i pola wymagane przez KSeF — bez śledzenia zmian w prawie.'
	},
	{
		icon: 'Smartphone',
		title: 'Działa wszędzie',
		description: 'Wystaw fakturę z telefonu tuż po spotkaniu. Pełna wersja mobilna w cenie.'
	}
];

export const steps: { title: string; description: string }[] = [
	{ title: 'Załóż konto', description: 'Rejestracja mailem w 60 sekund. Bez karty kredytowej.' },
	{ title: 'Dodaj dane firmy', description: 'Uzupełniamy je automatycznie z bazy GUS po numerze NIP.' },
	{ title: 'Wystaw pierwszą fakturę', description: 'Wybierz klienta, pozycje i wyślij. Gotowe.' }
];

export type Plan = {
	name: string;
	monthly: number;
	description: string;
	features: string[];
	highlighted?: boolean;
};

export const plans: Plan[] = [
	{
		name: 'Start',
		monthly: 0,
		description: 'Dla tych, którzy dopiero zaczynają.',
		features: ['Do 5 faktur miesięcznie', '1 użytkownik', 'Eksport PDF', 'Wsparcie e-mail']
	},
	{
		name: 'Pro',
		monthly: 39,
		description: 'Dla aktywnych freelancerów.',
		features: [
			'Nielimitowane faktury',
			'Automatyczne przypomnienia',
			'Faktury cykliczne',
			'Integracja z KSeF',
			'Priorytetowe wsparcie'
		],
		highlighted: true
	},
	{
		name: 'Biznes',
		monthly: 89,
		description: 'Dla małych zespołów i biur.',
		features: [
			'Wszystko z Pro',
			'Do 5 użytkowników',
			'Panel księgowego',
			'API i webhooki',
			'Dedykowany opiekun'
		]
	}
];

export const testimonials: { quote: string; author: string; role: string; initials: string }[] = [
	{
		quote:
			'Odzyskałam kilka godzin miesięcznie. Przypomnienia o płatnościach działają lepiej niż ja telefonicznie.',
		author: 'Anna Zielińska',
		role: 'Graficzka, freelancer',
		initials: 'AZ'
	},
	{
		quote: 'Wreszcie wiem, ile realnie zarabiam. Pulpit finansowy to strzał w dziesiątkę.',
		author: 'Piotr Lewandowski',
		role: 'Programista B2B',
		initials: 'PL'
	},
	{
		quote: 'Przeszliśmy całym biurem. Panel księgowego oszczędza nam mnóstwo maili.',
		author: 'Katarzyna Mazur',
		role: 'Właścicielka biura rachunkowego',
		initials: 'KM'
	}
];

export const faqs: { question: string; answer: string }[] = [
	{
		question: 'Czy naprawdę mogę zacząć za darmo?',
		answer:
			'Tak. Plan Start jest bezpłatny bezterminowo i nie wymaga podania karty. Płacisz dopiero, gdy zdecydujesz się na plan Pro lub Biznes.'
	},
	{
		question: 'Czy Fakturly jest zgodny z KSeF?',
		answer:
			'Tak. W planach Pro i Biznes faktury wysyłasz bezpośrednio do Krajowego Systemu e-Faktur, a pola i stawki aktualizujemy zgodnie z przepisami.'
	},
	{
		question: 'Czy mogę zrezygnować w dowolnym momencie?',
		answer: 'Oczywiście. Subskrypcję anulujesz jednym kliknięciem, bez okresu wypowiedzenia.'
	},
	{
		question: 'Czy moje dane są bezpieczne?',
		answer:
			'Dane szyfrujemy w tranzycie i spoczynku, a kopie zapasowe wykonujemy codziennie. Serwery znajdują się w Unii Europejskiej.'
	}
];
