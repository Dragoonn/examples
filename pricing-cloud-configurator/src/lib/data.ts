// Dane demonstracyjne dostawcy chmury — cennik i parametry konfiguratora.

export const provider = {
	name: 'CloudNest',
	tagline: 'Serwery, które rozumiesz',
	claim: 'Policz swój serwer w 30 sekund. Bez rozmowy z handlowcem.',
	description:
		'Maszyny wirtualne w polskich i europejskich centrach danych. Płacisz za to, co ustawisz suwakiem — bez ukrytych opłat za transfer i bez rocznych umów.',
	email: 'pomoc@cloudnest.pl',
	phone: '+48 71 300 22 10'
};

// Ceny jednostkowe (zł netto / miesiąc) — podstawa kalkulacji w konfiguratorze.
export const unitPrices = {
	vcpu: 22,
	ramGb: 14,
	diskGb: 0.45,
	backup: 19,
	ddos: 39,
	panel: 29,
	monitoring: 15
};

export const limits = {
	vcpu: { min: 1, max: 32, step: 1 },
	ram: { min: 2, max: 128, step: 2 },
	disk: { min: 40, max: 2000, step: 20 }
};

export type Region = { id: string; city: string; country: string; multiplier: number; latency: string };

export const regions: Region[] = [
	{ id: 'waw', city: 'Warszawa', country: 'Polska', multiplier: 1, latency: '4 ms z Warszawy' },
	{ id: 'wro', city: 'Wrocław', country: 'Polska', multiplier: 0.95, latency: '6 ms z Wrocławia' },
	{ id: 'fra', city: 'Frankfurt', country: 'Niemcy', multiplier: 1.1, latency: '18 ms z Warszawy' },
	{ id: 'hel', city: 'Helsinki', country: 'Finlandia', multiplier: 1.05, latency: '26 ms z Warszawy' }
];

export type AddonId = 'backup' | 'ddos' | 'panel' | 'monitoring';

export type Addon = { id: AddonId; name: string; description: string };

export const addons: Addon[] = [
	{
		id: 'backup',
		name: 'Kopie zapasowe',
		description: 'Codzienny snapshot, 14 dni retencji, przywracanie jednym kliknięciem.'
	},
	{
		id: 'ddos',
		name: 'Ochrona anty-DDoS',
		description: 'Filtrowanie ruchu do 200 Gb/s, bez limitu liczby ataków.'
	},
	{
		id: 'panel',
		name: 'Panel zarządzania',
		description: 'Graficzny panel z konsolą, DNS-em i certyfikatami SSL.'
	},
	{
		id: 'monitoring',
		name: 'Monitoring 24/7',
		description: 'Alerty SMS i e-mail przy przeciążeniu lub braku odpowiedzi.'
	}
];

export type Preset = {
	id: string;
	name: string;
	description: string;
	vcpu: number;
	ram: number;
	disk: number;
	popular?: boolean;
};

export const presets: Preset[] = [
	{
		id: 'starter',
		name: 'Starter',
		description: 'Strona firmowa, blog albo środowisko testowe.',
		vcpu: 2,
		ram: 4,
		disk: 80
	},
	{
		id: 'business',
		name: 'Business',
		description: 'Sklep internetowy lub aplikacja z bazą danych.',
		vcpu: 6,
		ram: 16,
		disk: 320,
		popular: true
	},
	{
		id: 'scale',
		name: 'Scale',
		description: 'Ruch produkcyjny, kilka usług i kolejki zadań.',
		vcpu: 12,
		ram: 48,
		disk: 800
	},
	{
		id: 'dedicated',
		name: 'Dedicated',
		description: 'Przetwarzanie danych, hurtownia albo klaster gier.',
		vcpu: 24,
		ram: 96,
		disk: 1600
	}
];

export const includedFeatures: string[] = [
	'Dysk NVMe i łącze 1 Gb/s bez limitu transferu',
	'Adres IPv4 i pula /64 IPv6',
	'Gwarancja dostępności 99,95% w umowie',
	'Uruchomienie w 55 sekund od opłacenia',
	'Rezygnacja w dowolnym momencie, rozliczenie co godzinę'
];

export const comparison: { feature: string; cloudnest: string; typical: string }[] = [
	{ feature: 'Opłata za transfer', cloudnest: 'brak', typical: 'od 0,08 zł / GB' },
	{ feature: 'Minimalny okres umowy', cloudnest: 'brak', typical: '12 miesięcy' },
	{ feature: 'Czas uruchomienia', cloudnest: '55 sekund', typical: 'do 24 godzin' },
	{ feature: 'Wsparcie po polsku', cloudnest: '24/7', typical: 'w godzinach biurowych' },
	{ feature: 'Snapshot na żądanie', cloudnest: 'w cenie dodatku', typical: 'płatny osobno' }
];

export const faq: { question: string; answer: string }[] = [
	{
		question: 'Czy mogę zmienić parametry po uruchomieniu?',
		answer:
			'Tak. vCPU i RAM zmieniasz w panelu w trakcie pracy serwera, dysk powiększasz bez restartu. Rozliczenie zmienia się od następnej godziny.'
	},
	{
		question: 'Jak wygląda rozliczenie?',
		answer:
			'Naliczamy co godzinę, fakturę wystawiamy raz w miesiącu. Przy płatności rocznej dajemy dwa miesiące gratis, ale nie blokujemy Cię umową.'
	},
	{
		question: 'Czy dane są w Polsce?',
		answer:
			'W regionach Warszawa i Wrocław tak — obydwa centra mają certyfikat ISO 27001 i zasilanie z dwóch niezależnych źródeł.'
	},
	{
		question: 'Co, jeśli serwer okaże się za mały?',
		answer:
			'Przez pierwsze 14 dni możesz przejść na wyższą konfigurację bez dopłaty różnicy za okres testowy.'
	}
];
