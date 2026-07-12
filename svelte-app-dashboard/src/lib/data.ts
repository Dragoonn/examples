// Dane demonstracyjne panelu sprzedaży. W realnej aplikacji pochodziłyby z API.

export type Status = 'nowe' | 'wyslane' | 'dostarczone' | 'zwrot';

export const statusMeta: Record<Status, { label: string; classes: string }> = {
	nowe: { label: 'Nowe', classes: 'preset-tonal-primary' },
	wyslane: { label: 'Wysłane', classes: 'preset-tonal-warning' },
	dostarczone: { label: 'Dostarczone', classes: 'preset-tonal-success' },
	zwrot: { label: 'Zwrot', classes: 'preset-tonal-error' }
};

export type Order = {
	id: string;
	customer: string;
	email: string;
	date: string; // ISO
	amount: number; // zł
	items: number;
	status: Status;
};

export const orders: Order[] = [
	{ id: 'ZAM-1042', customer: 'Anna Zielińska', email: 'anna.z@example.com', date: '2026-07-11', amount: 349.99, items: 3, status: 'nowe' },
	{ id: 'ZAM-1041', customer: 'Piotr Lewandowski', email: 'p.lewand@example.com', date: '2026-07-11', amount: 129.0, items: 1, status: 'nowe' },
	{ id: 'ZAM-1040', customer: 'Katarzyna Mazur', email: 'k.mazur@example.com', date: '2026-07-10', amount: 899.5, items: 5, status: 'wyslane' },
	{ id: 'ZAM-1039', customer: 'Tomasz Wójcik', email: 't.wojcik@example.com', date: '2026-07-10', amount: 59.99, items: 1, status: 'dostarczone' },
	{ id: 'ZAM-1038', customer: 'Magdalena Krawczyk', email: 'm.kraw@example.com', date: '2026-07-09', amount: 1249.0, items: 8, status: 'wyslane' },
	{ id: 'ZAM-1037', customer: 'Marek Kowalczyk', email: 'marek.k@example.com', date: '2026-07-09', amount: 214.75, items: 2, status: 'dostarczone' },
	{ id: 'ZAM-1036', customer: 'Ewa Nowak', email: 'ewa.nowak@example.com', date: '2026-07-08', amount: 78.0, items: 1, status: 'zwrot' },
	{ id: 'ZAM-1035', customer: 'Jakub Kaczmarek', email: 'j.kaczmarek@example.com', date: '2026-07-08', amount: 445.2, items: 4, status: 'dostarczone' },
	{ id: 'ZAM-1034', customer: 'Aleksandra Wieczorek', email: 'ola.w@example.com', date: '2026-07-07', amount: 156.5, items: 2, status: 'dostarczone' },
	{ id: 'ZAM-1033', customer: 'Michał Jankowski', email: 'm.jankowski@example.com', date: '2026-07-07', amount: 2100.0, items: 12, status: 'wyslane' },
	{ id: 'ZAM-1032', customer: 'Natalia Grabowska', email: 'n.grab@example.com', date: '2026-07-06', amount: 39.99, items: 1, status: 'zwrot' },
	{ id: 'ZAM-1031', customer: 'Grzegorz Pawlak', email: 'g.pawlak@example.com', date: '2026-07-06', amount: 675.0, items: 6, status: 'dostarczone' },
	{ id: 'ZAM-1030', customer: 'Monika Dąbrowska', email: 'm.dabrowska@example.com', date: '2026-07-05', amount: 320.0, items: 3, status: 'dostarczone' },
	{ id: 'ZAM-1029', customer: 'Rafał Zając', email: 'r.zajac@example.com', date: '2026-07-05', amount: 89.9, items: 1, status: 'nowe' },
	{ id: 'ZAM-1028', customer: 'Joanna Król', email: 'j.krol@example.com', date: '2026-07-04', amount: 540.3, items: 4, status: 'wyslane' },
	{ id: 'ZAM-1027', customer: 'Paweł Wróbel', email: 'p.wrobel@example.com', date: '2026-07-04', amount: 1780.0, items: 9, status: 'dostarczone' },
	{ id: 'ZAM-1026', customer: 'Agnieszka Sikora', email: 'a.sikora@example.com', date: '2026-07-03', amount: 112.4, items: 2, status: 'dostarczone' },
	{ id: 'ZAM-1025', customer: 'Krzysztof Baran', email: 'k.baran@example.com', date: '2026-07-03', amount: 249.0, items: 2, status: 'zwrot' }
];

// Miesięczny przychód (ostatnie 12 miesięcy, w tys. zł).
export const revenueSeries: { month: string; value: number }[] = [
	{ month: 'Sie', value: 82 },
	{ month: 'Wrz', value: 95 },
	{ month: 'Paź', value: 88 },
	{ month: 'Lis', value: 121 },
	{ month: 'Gru', value: 154 },
	{ month: 'Sty', value: 132 },
	{ month: 'Lut', value: 118 },
	{ month: 'Mar', value: 141 },
	{ month: 'Kwi', value: 137 },
	{ month: 'Maj', value: 165 },
	{ month: 'Cze', value: 172 },
	{ month: 'Lip', value: 189 }
];

export function formatPLN(value: number): string {
	return value.toLocaleString('pl-PL', { style: 'currency', currency: 'PLN' });
}
