// Dane demonstracyjne software house'u — w realnym projekcie mogą pochodzić z CMS lub API.

export const company = {
	name: 'Nexora Labs',
	tagline: 'Software House',
	claim: 'Budujemy oprogramowanie, które zarabia na siebie.',
	description:
		'Projektujemy i wdrażamy aplikacje webowe, integracje i systemy wewnętrzne dla firm, które przerosły arkusze kalkulacyjne. Od pierwszej rozmowy do produkcji — jeden zespół, jedna odpowiedzialność.',
	email: 'kontakt@nexoralabs.dev',
	phone: '+48 22 100 45 90',
	address: 'ul. Hoża 51, 00-681 Warszawa',
	nip: 'NIP 701-000-00-00'
};

export const stats: { value: string; label: string }[] = [
	{ value: '11 lat', label: 'na rynku' },
	{ value: '84', label: 'wdrożone projekty' },
	{ value: '23', label: 'osoby w zespole' },
	{ value: '96%', label: 'klientów wraca' }
];

export type Service = {
	slug: string;
	name: string;
	description: string;
	bullets: string[];
	from: string;
};

export const services: Service[] = [
	{
		slug: 'web-apps',
		name: 'Aplikacje webowe',
		description:
			'Systemy szyte na miarę procesu: panele operacyjne, portale klienckie, konfiguratory produktów.',
		bullets: ['SvelteKit / TypeScript', 'Projekt UX i UI', 'Testy i CI/CD'],
		from: 'od 45 000 zł'
	},
	{
		slug: 'integracje',
		name: 'Integracje i API',
		description:
			'Spinamy ERP, magazyn, płatności i kurierów tak, żeby dane przestały krążyć w e-mailach.',
		bullets: ['REST / GraphQL / webhooki', 'Kolejki i retry', 'Monitoring integracji'],
		from: 'od 18 000 zł'
	},
	{
		slug: 'cloud',
		name: 'Cloud i DevOps',
		description:
			'Infrastruktura jako kod, wdrożenia bez przestojów i rachunek za chmurę, który da się wytłumaczyć zarządowi.',
		bullets: ['Terraform, Docker, K8s', 'Blue-green deploy', 'Alerty i SLO'],
		from: 'od 12 000 zł'
	},
	{
		slug: 'mvp',
		name: 'MVP dla startupów',
		description:
			'Pierwsza wersja produktu w 8 tygodni — na tyle dobra, żeby pokazać inwestorowi i pierwszym użytkownikom.',
		bullets: ['Warsztat zakresu', 'Tygodniowe demo', 'Gotowe do skalowania'],
		from: 'od 60 000 zł'
	},
	{
		slug: 'audyt',
		name: 'Audyt i wydajność',
		description:
			'Znajdujemy, dlaczego aplikacja muli, sypie błędami albo przepala budżet — i to naprawiamy.',
		bullets: ['Profilowanie i Core Web Vitals', 'Przegląd bezpieczeństwa', 'Raport z priorytetami'],
		from: 'od 9 000 zł'
	},
	{
		slug: 'utrzymanie',
		name: 'Utrzymanie i rozwój',
		description:
			'Stały zespół z gwarantowanym czasem reakcji zamiast gaszenia pożarów przez przypadkowego freelancera.',
		bullets: ['SLA 4h w dni robocze', 'Dyżury i aktualizacje', 'Roadmapa kwartalna'],
		from: 'od 6 000 zł / mies.'
	}
];

export type CaseStudy = {
	client: string;
	industry: 'E-commerce' | 'Fintech' | 'Logistyka' | 'Produkcja' | 'SaaS';
	title: string;
	summary: string;
	metrics: { value: string; label: string }[];
	stack: string[];
	duration: string;
};

export const caseStudies: CaseStudy[] = [
	{
		client: 'Bergman Group',
		industry: 'E-commerce',
		title: 'Konfigurator mebli z wyceną w czasie rzeczywistym',
		summary:
			'Zastąpiliśmy proces „zapytanie → wycena w Excelu → mail" konfiguratorem, który liczy cenę w przeglądarce i od razu tworzy zamówienie w ERP.',
		metrics: [
			{ value: '+38%', label: 'więcej zapytań' },
			{ value: '-11 dni', label: 'krótszy cykl sprzedaży' },
			{ value: '0', label: 'ręcznych wycen' }
		],
		stack: ['SvelteKit', 'PostgreSQL', 'Stripe'],
		duration: '5 miesięcy'
	},
	{
		client: 'Kredytomat',
		industry: 'Fintech',
		title: 'Panel scoringowy dla analityków ryzyka',
		summary:
			'Aplikacja, która zbiera dane z sześciu źródeł i pokazuje analitykowi jeden ekran decyzyjny zamiast siedmiu zakładek.',
		metrics: [
			{ value: '4×', label: 'szybsza decyzja' },
			{ value: '99,95%', label: 'dostępność' },
			{ value: '6', label: 'zintegrowanych źródeł' }
		],
		stack: ['SvelteKit', 'Node.js', 'Redis'],
		duration: '7 miesięcy'
	},
	{
		client: 'TransNordic',
		industry: 'Logistyka',
		title: 'Śledzenie floty i automatyczne awizacje',
		summary:
			'Kierowcy dostają trasę w telefonie, klient widzi status przesyłki, a dyspozytor przestał dzwonić po potwierdzenia.',
		metrics: [
			{ value: '-62%', label: 'telefonów do biura' },
			{ value: '1 200', label: 'kursów miesięcznie' },
			{ value: '<300 ms', label: 'czas odpowiedzi' }
		],
		stack: ['SvelteKit', 'WebSockets', 'MapLibre'],
		duration: '4 miesiące'
	},
	{
		client: 'Polfa Systems',
		industry: 'Produkcja',
		title: 'Cyfrowy raport zmiany na hali',
		summary:
			'Papierowe raporty zmianowe zamienione w tablet przy linii — dane trafiają do systemu w sekundę po zakończeniu zmiany.',
		metrics: [
			{ value: '-90%', label: 'papieru' },
			{ value: '3 min', label: 'zamiast 40 na raport' },
			{ value: '18', label: 'linii produkcyjnych' }
		],
		stack: ['SvelteKit', 'PWA', 'MS SQL'],
		duration: '6 miesięcy'
	},
	{
		client: 'Meetlyo',
		industry: 'SaaS',
		title: 'MVP platformy do rezerwacji sal',
		summary:
			'Od warsztatu do pierwszych płacących klientów w 9 tygodni. Produkt obsługuje dziś 40 biur w trzech krajach.',
		metrics: [
			{ value: '9 tyg.', label: 'do premiery' },
			{ value: '40', label: 'biur na pokładzie' },
			{ value: '2 rundy', label: 'finansowania' }
		],
		stack: ['SvelteKit', 'Supabase', 'Stripe'],
		duration: '9 tygodni'
	},
	{
		client: 'Vitrum24',
		industry: 'E-commerce',
		title: 'Migracja sklepu i przyspieszenie checkoutu',
		summary:
			'Przenieśliśmy sklep z ciężkiego monolitu na renderowany po stronie serwera front — bez jednego dnia przestoju.',
		metrics: [
			{ value: '2,1 s → 0,6 s', label: 'czas ładowania' },
			{ value: '+24%', label: 'konwersja mobile' },
			{ value: '0 h', label: 'przestoju' }
		],
		stack: ['SvelteKit', 'Redis', 'Cloudflare'],
		duration: '3 miesiące'
	}
];

export const industries = ['Wszystkie', 'E-commerce', 'Fintech', 'Logistyka', 'Produkcja', 'SaaS'] as const;

export const process: { step: string; title: string; description: string; time: string }[] = [
	{
		step: '01',
		title: 'Warsztat',
		description:
			'Dwa dni z Twoim zespołem: procesy, wąskie gardła, priorytety. Wychodzisz z zakresem i widełkami budżetu.',
		time: '1–2 tygodnie'
	},
	{
		step: '02',
		title: 'Prototyp',
		description:
			'Klikalny prototyp kluczowych ekranów. Zmiany kosztują tu grosze, a nie tygodnie programowania.',
		time: '2–3 tygodnie'
	},
	{
		step: '03',
		title: 'Wdrożenie',
		description:
			'Dwutygodniowe sprinty z demo na koniec każdego. Widzisz postęp, zanim wystawimy fakturę.',
		time: '2–6 miesięcy'
	},
	{
		step: '04',
		title: 'Rozwój',
		description:
			'Po premierze zostajemy: monitoring, poprawki, kolejne funkcje w rytmie kwartalnej roadmapy.',
		time: 'bezterminowo'
	}
];

export const stack: { group: string; items: string[] }[] = [
	{ group: 'Frontend', items: ['SvelteKit', 'Svelte 5', 'TypeScript', 'Tailwind CSS'] },
	{ group: 'Backend', items: ['Node.js', 'PostgreSQL', 'Redis', 'REST / GraphQL'] },
	{ group: 'Chmura', items: ['Cloudflare', 'AWS', 'Docker', 'Terraform'] },
	{ group: 'Jakość', items: ['Playwright', 'Vitest', 'GitHub Actions', 'Sentry'] }
];

export const team: { name: string; role: string; initials: string }[] = [
	{ name: 'Anna Dębska', role: 'CTO', initials: 'AD' },
	{ name: 'Marcin Rutkowski', role: 'Lead Developer', initials: 'MR' },
	{ name: 'Kasia Wiśniewska', role: 'Product Designer', initials: 'KW' },
	{ name: 'Paweł Zieliński', role: 'DevOps', initials: 'PZ' }
];

export const testimonials: { quote: string; author: string; role: string }[] = [
	{
		quote:
			'Pierwszy raz dostaliśmy oprogramowanie, które nie wymaga instrukcji obsługi. Zespół sam z niego korzysta, bez przypominania.',
		author: 'Robert Bergman',
		role: 'Prezes, Bergman Group'
	},
	{
		quote:
			'Zamiast prezentacji dostaliśmy działający prototyp na trzecim spotkaniu. To przekonało zarząd szybciej niż jakikolwiek dokument.',
		author: 'Marta Kruk',
		role: 'Dyrektor operacyjny, TransNordic'
	}
];
