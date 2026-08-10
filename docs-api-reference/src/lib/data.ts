// Dane demonstracyjne dokumentacji — w realnym projekcie generowane z OpenAPI lub MDX.

export const product = {
	name: 'Pulsar API',
	version: 'v2.4',
	tagline: 'Dokumentacja dla programistów',
	baseUrl: 'https://api.pulsar.dev/v2',
	description:
		'REST API do wysyłki i śledzenia powiadomień transakcyjnych: e-mail, SMS i push z jednego endpointu.'
};

export type Snippet = { lang: string; label: string; code: string };

export const quickstart: Snippet[] = [
	{
		lang: 'curl',
		label: 'cURL',
		code: `curl -X POST https://api.pulsar.dev/v2/messages \\
  -H "Authorization: Bearer psk_live_9f2c..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "channel": "email",
    "to": "anna@firma.pl",
    "template": "order-shipped",
    "data": { "order_id": "PL-10428" }
  }'`
	},
	{
		lang: 'js',
		label: 'JavaScript',
		code: `import { Pulsar } from '@pulsar/sdk';

const pulsar = new Pulsar(process.env.PULSAR_KEY);

const message = await pulsar.messages.send({
  channel: 'email',
  to: 'anna@firma.pl',
  template: 'order-shipped',
  data: { order_id: 'PL-10428' }
});

console.log(message.id); // msg_01HZ...`
	},
	{
		lang: 'python',
		label: 'Python',
		code: `from pulsar import Pulsar

pulsar = Pulsar(os.environ["PULSAR_KEY"])

message = pulsar.messages.send(
    channel="email",
    to="anna@firma.pl",
    template="order-shipped",
    data={"order_id": "PL-10428"},
)

print(message.id)  # msg_01HZ...`
	}
];

export const authSnippet = `Authorization: Bearer psk_live_9f2c4d1a8b7e6f5c
Content-Type: application/json`;

export type Param = { name: string; type: string; required: boolean; description: string };

export type Endpoint = {
	id: string;
	method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
	path: string;
	group: 'Wiadomości' | 'Szablony' | 'Kontakty' | 'Webhooki';
	summary: string;
	params: Param[];
	response: string;
};

export const endpoints: Endpoint[] = [
	{
		id: 'send-message',
		method: 'POST',
		path: '/messages',
		group: 'Wiadomości',
		summary: 'Wysyła pojedynczą wiadomość wybranym kanałem.',
		params: [
			{ name: 'channel', type: 'string', required: true, description: '„email", „sms" albo „push".' },
			{ name: 'to', type: 'string', required: true, description: 'Adres e-mail, numer telefonu lub token urządzenia.' },
			{ name: 'template', type: 'string', required: true, description: 'Identyfikator szablonu z panelu.' },
			{ name: 'data', type: 'object', required: false, description: 'Zmienne wstawiane do szablonu.' },
			{ name: 'send_at', type: 'string', required: false, description: 'Data ISO 8601 — wysyłka zaplanowana.' }
		],
		response: `{
  "id": "msg_01HZK4T8QF",
  "status": "queued",
  "channel": "email",
  "created_at": "2026-08-10T09:14:22Z"
}`
	},
	{
		id: 'get-message',
		method: 'GET',
		path: '/messages/{id}',
		group: 'Wiadomości',
		summary: 'Zwraca status i historię doręczenia wiadomości.',
		params: [{ name: 'id', type: 'string', required: true, description: 'Identyfikator wiadomości.' }],
		response: `{
  "id": "msg_01HZK4T8QF",
  "status": "delivered",
  "events": [
    { "type": "queued",    "at": "2026-08-10T09:14:22Z" },
    { "type": "sent",      "at": "2026-08-10T09:14:24Z" },
    { "type": "delivered", "at": "2026-08-10T09:14:31Z" }
  ]
}`
	},
	{
		id: 'list-messages',
		method: 'GET',
		path: '/messages',
		group: 'Wiadomości',
		summary: 'Lista wiadomości z paginacją kursorową.',
		params: [
			{ name: 'status', type: 'string', required: false, description: 'Filtr: queued, sent, delivered, failed.' },
			{ name: 'limit', type: 'integer', required: false, description: 'Domyślnie 25, maksymalnie 100.' },
			{ name: 'cursor', type: 'string', required: false, description: 'Kursor z pola next_cursor.' }
		],
		response: `{
  "data": [ { "id": "msg_01HZK4T8QF", "status": "delivered" } ],
  "next_cursor": "eyJpZCI6Im1zZ18wMUhaSzRUOFFGIn0"
}`
	},
	{
		id: 'cancel-message',
		method: 'DELETE',
		path: '/messages/{id}',
		group: 'Wiadomości',
		summary: 'Anuluje wiadomość zaplanowaną, która nie została jeszcze wysłana.',
		params: [{ name: 'id', type: 'string', required: true, description: 'Identyfikator wiadomości.' }],
		response: `{
  "id": "msg_01HZK4T8QF",
  "status": "canceled"
}`
	},
	{
		id: 'list-templates',
		method: 'GET',
		path: '/templates',
		group: 'Szablony',
		summary: 'Zwraca szablony dostępne w projekcie wraz z listą zmiennych.',
		params: [
			{ name: 'channel', type: 'string', required: false, description: 'Zawęża wynik do jednego kanału.' }
		],
		response: `{
  "data": [
    {
      "id": "order-shipped",
      "channel": "email",
      "variables": ["order_id", "carrier"]
    }
  ]
}`
	},
	{
		id: 'create-template',
		method: 'POST',
		path: '/templates',
		group: 'Szablony',
		summary: 'Tworzy nowy szablon wiadomości.',
		params: [
			{ name: 'id', type: 'string', required: true, description: 'Unikalny identyfikator, np. „order-shipped".' },
			{ name: 'channel', type: 'string', required: true, description: 'Kanał, dla którego szablon obowiązuje.' },
			{ name: 'subject', type: 'string', required: false, description: 'Temat — wymagany dla kanału email.' },
			{ name: 'body', type: 'string', required: true, description: 'Treść z placeholderami {{ zmienna }}.' }
		],
		response: `{
  "id": "order-shipped",
  "channel": "email",
  "created_at": "2026-08-10T09:20:04Z"
}`
	},
	{
		id: 'upsert-contact',
		method: 'PATCH',
		path: '/contacts/{id}',
		group: 'Kontakty',
		summary: 'Tworzy lub aktualizuje kontakt i jego zgody marketingowe.',
		params: [
			{ name: 'id', type: 'string', required: true, description: 'Twój identyfikator użytkownika.' },
			{ name: 'email', type: 'string', required: false, description: 'Adres e-mail kontaktu.' },
			{ name: 'phone', type: 'string', required: false, description: 'Numer w formacie E.164.' },
			{ name: 'consents', type: 'object', required: false, description: 'Mapa zgód, np. { "sms": true }.' }
		],
		response: `{
  "id": "user_5512",
  "email": "anna@firma.pl",
  "consents": { "email": true, "sms": false }
}`
	},
	{
		id: 'create-webhook',
		method: 'POST',
		path: '/webhooks',
		group: 'Webhooki',
		summary: 'Rejestruje adres, na który wysyłamy zdarzenia doręczenia.',
		params: [
			{ name: 'url', type: 'string', required: true, description: 'Adres HTTPS przyjmujący POST.' },
			{ name: 'events', type: 'array', required: true, description: 'Lista zdarzeń, np. ["message.delivered"].' },
			{ name: 'secret', type: 'string', required: false, description: 'Klucz do podpisu HMAC nagłówka.' }
		],
		response: `{
  "id": "whk_8812",
  "url": "https://firma.pl/hooks/pulsar",
  "events": ["message.delivered", "message.failed"]
}`
	}
];

export const errors: { code: string; status: number; description: string; fix: string }[] = [
	{
		code: 'invalid_api_key',
		status: 401,
		description: 'Klucz nie istnieje, wygasł lub użyto klucza testowego na produkcji.',
		fix: 'Sprawdź prefiks klucza: psk_live_ dla produkcji, psk_test_ dla piaskownicy.'
	},
	{
		code: 'template_not_found',
		status: 404,
		description: 'Szablon o podanym identyfikatorze nie istnieje w tym projekcie.',
		fix: 'Pobierz listę z GET /templates — identyfikatory są zależne od projektu.'
	},
	{
		code: 'missing_variable',
		status: 422,
		description: 'Szablon oczekuje zmiennej, której nie było w polu data.',
		fix: 'Odpowiedź zawiera pole variables z listą brakujących kluczy.'
	},
	{
		code: 'rate_limited',
		status: 429,
		description: 'Przekroczono limit zapytań dla klucza.',
		fix: 'Ponów zapytanie po czasie z nagłówka Retry-After, najlepiej z wykładniczym backoffem.'
	},
	{
		code: 'channel_unavailable',
		status: 503,
		description: 'Operator kanału chwilowo nie przyjmuje ruchu.',
		fix: 'Wiadomość zostaje w kolejce — nie wysyłaj jej ponownie, sprawdzaj status.'
	}
];

export const rateLimits: { plan: string; perMinute: string; burst: string; support: string }[] = [
	{ plan: 'Sandbox', perMinute: '60 zapytań', burst: '100', support: 'dokumentacja' },
	{ plan: 'Start', perMinute: '600 zapytań', burst: '1 000', support: 'e-mail, 24 h' },
	{ plan: 'Scale', perMinute: '6 000 zapytań', burst: '10 000', support: 'e-mail, 4 h' },
	{ plan: 'Enterprise', perMinute: 'indywidualnie', burst: 'indywidualnie', support: 'dedykowany kanał' }
];

export const changelog: { version: string; date: string; changes: string[] }[] = [
	{
		version: 'v2.4',
		date: '2026-07-28',
		changes: ['Nowy kanał push dla aplikacji mobilnych', 'Pole send_at — wysyłka zaplanowana']
	},
	{
		version: 'v2.3',
		date: '2026-05-14',
		changes: ['Paginacja kursorowa na GET /messages', 'Podpis HMAC webhooków']
	},
	{
		version: 'v2.2',
		date: '2026-02-03',
		changes: ['Endpoint PATCH /contacts/{id}', 'Limity zapytań widoczne w nagłówkach odpowiedzi']
	}
];

export const navigation: { id: string; label: string }[] = [
	{ id: 'wprowadzenie', label: 'Wprowadzenie' },
	{ id: 'szybki-start', label: 'Szybki start' },
	{ id: 'uwierzytelnianie', label: 'Uwierzytelnianie' },
	{ id: 'endpointy', label: 'Endpointy' },
	{ id: 'bledy', label: 'Kody błędów' },
	{ id: 'limity', label: 'Limity zapytań' },
	{ id: 'changelog', label: 'Changelog' }
];
