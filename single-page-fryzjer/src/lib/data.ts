// Dane demonstracyjne salonu — w realnym projekcie mogą pochodzić z CMS lub API.

export const salon = {
	name: 'ŻELAZO',
	tagline: 'Barber Shop',
	claim: 'Klasyczne rzemiosło. Nowoczesny styl.',
	description:
		'Męski zakład fryzjerski w sercu miasta. Strzyżenie, pielęgnacja brody i gorący ręcznik — bez pośpiechu, w dobrym towarzystwie.',
	phone: '+48 512 340 118',
	address: 'ul. Kowalska 12, 30-001 Kraków',
	email: 'kontakt@zelazo-barber.pl',
	instagram: '@zelazo.barber'
};

export type Service = {
	name: string;
	description: string;
	price: number;
	duration: number; // minuty
	popular?: boolean;
};

export const services: Service[] = [
	{
		name: 'Strzyżenie męskie',
		description: 'Konsultacja, mycie, strzyżenie maszynką i nożyczkami, stylizacja.',
		price: 70,
		duration: 45,
		popular: true
	},
	{
		name: 'Broda — modelowanie',
		description: 'Przycięcie, konturowanie brzytwą i pielęgnacja olejkiem.',
		price: 50,
		duration: 30
	},
	{
		name: 'Pakiet Włosy + Broda',
		description: 'Pełna metamorfoza: strzyżenie i modelowanie brody w jednej wizycie.',
		price: 110,
		duration: 75,
		popular: true
	},
	{
		name: 'Golenie na gorąco',
		description: 'Tradycyjne golenie brzytwą z gorącym ręcznikiem i kojącym balsamem.',
		price: 60,
		duration: 40
	},
	{
		name: 'Strzyżenie dziecięce',
		description: 'Spokojne strzyżenie dla najmłodszych klientów (do 12 lat).',
		price: 45,
		duration: 30
	},
	{
		name: 'Stylizacja + mycie',
		description: 'Szybkie odświeżenie fryzury przed ważnym wyjściem.',
		price: 35,
		duration: 20
	}
];

export const hours: { day: string; open: string }[] = [
	{ day: 'Poniedziałek', open: '10:00 – 19:00' },
	{ day: 'Wtorek', open: '10:00 – 19:00' },
	{ day: 'Środa', open: '10:00 – 19:00' },
	{ day: 'Czwartek', open: '10:00 – 20:00' },
	{ day: 'Piątek', open: '10:00 – 20:00' },
	{ day: 'Sobota', open: '09:00 – 15:00' },
	{ day: 'Niedziela', open: 'Zamknięte' }
];

export const barbers: { name: string; role: string; initials: string }[] = [
	{ name: 'Marek Kowalczyk', role: 'Master Barber', initials: 'MK' },
	{ name: 'Tomasz Wójcik', role: 'Barber & Stylista', initials: 'TW' },
	{ name: 'Adam Nowak', role: 'Barber', initials: 'AN' }
];
