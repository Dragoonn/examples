<h1 align="center">Fakturly — Landing Page</h1>
<p align="center"><strong>Landing Page</strong> · strona sprzedażowa / conversion-focused sales page</p>

<p align="center">
  <a href="#polski">🇵🇱 Polski</a> · <a href="#english">🇬🇧 English</a>
</p>

<p align="center">
  <img src="docs/screenshots/scroll.gif" alt="Fakturly landing page" width="820">
</p>

---

<a id="polski"></a>

## 🇵🇱 Polski

> 💡 Przykładowa realizacja usługi **Landing Page** — strona zaprojektowana tak,
> by zamienić odwiedzającego w klienta: rejestrację, zakup lub zapytanie ofertowe.

### Czym jest ten projekt

Strona sprzedażowa fikcyjnego produktu SaaS do fakturowania. Każda sekcja prowadzi
odwiedzającego krok po kroku — od problemu, przez korzyści i dowód społeczny, aż po
cennik i wezwanie do działania. To nie „strona o firmie", tylko **narzędzie sprzedaży**.

### Jaki problem rozwiązuje

Ruch z reklam czy Google trafia na stronę, ale nie zamienia się w klientów.
Dobrze zaprojektowany landing to naprawia, ponieważ:

- **Ma jeden, jasny cel** — wszystkie przyciski prowadzą do „Zacznij za darmo".
- **Odpowiada na obiekcje** — korzyści, „jak to działa" w 3 krokach i FAQ
  rozwiewają wątpliwości, które blokują decyzję.
- **Buduje zaufanie** — opinie klientów i ocena „4,8/5" jako dowód społeczny.
- **Ułatwia wybór** — przejrzysty cennik z wyróżnionym planem i przełącznikiem
  miesięcznie/rocznie, który od razu pokazuje oszczędność.

### Co zawiera strona

- **Hero** z mocnym nagłówkiem, podwójnym CTA i paskiem zaufania
- **Sekcja korzyści** — 6 kluczowych funkcji w czytelnych kafelkach
- **„Jak to działa"** — proces w 3 prostych krokach
- **Opinie klientów** — dowód społeczny z ocenami
- **Interaktywny cennik** — przełącznik miesięcznie/rocznie z natychmiastowym
  przeliczaniem ceny i wyróżnionym planem „Najczęściej wybierany"
- **FAQ** — rozwijane odpowiedzi na najczęstsze pytania
- **Końcowe CTA** — ostatni, mocny impuls do działania

### Efekt dla klienta

Strona, która realnie zwiększa liczbę rejestracji/zapytań z tego samego ruchu —
idealna pod kampanie reklamowe (Google Ads, Meta) i premiery produktów.

---

<a id="english"></a>

## 🇬🇧 English

> 💡 An example of the **Landing Page** service — a page designed to turn a
> visitor into a customer: a sign-up, a purchase or a sales inquiry.

### What this project is

A sales page for a fictional SaaS invoicing product. Every section guides the
visitor step by step — from the problem, through benefits and social proof, to
pricing and the call to action. It's not an "about us" page — it's a **sales tool**.

### The problem it solves

Traffic from ads or Google lands on the page but doesn't convert into customers.
A well-designed landing fixes that because it:

- **Has one clear goal** — every button leads to "Start for free".
- **Handles objections** — benefits, a 3-step "how it works" and an FAQ dispel
  the doubts that block a decision.
- **Builds trust** — customer testimonials and a "4.8/5" rating as social proof.
- **Makes the choice easy** — transparent pricing with a highlighted plan and a
  monthly/yearly toggle that instantly shows the savings.

### What the page includes

- **Hero** with a strong headline, dual CTA and a trust bar
- **Benefits section** — 6 key features in clean tiles
- **"How it works"** — a simple 3-step process
- **Testimonials** — social proof with ratings
- **Interactive pricing** — monthly/yearly toggle with instant price
  recalculation and a highlighted "Most popular" plan
- **FAQ** — collapsible answers to the most common questions
- **Final CTA** — one last strong nudge to act

### The outcome for the client

A page that genuinely increases sign-ups/inquiries from the same traffic — ideal
for ad campaigns (Google Ads, Meta) and product launches.

---

<details>
<summary><strong>Szczegóły techniczne · Technical details</strong></summary>

**SvelteKit + Svelte 5 (runes) + TypeScript + Tailwind CSS v4 + Skeleton UI v4**
(motyw / theme `rose`), **pnpm**. Interaktywny cennik i FAQ / interactive pricing
& FAQ powered by `$state`.

```bash
pnpm install
pnpm dev      # http://localhost:5173
pnpm build
pnpm check
```
</details>
