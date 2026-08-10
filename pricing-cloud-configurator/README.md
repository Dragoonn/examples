<h1 align="center">CloudNest — konfigurator serwerów</h1>
<p align="center"><strong>Konfigurator produktu</strong> · interaktywny cennik / interactive pricing configurator</p>

<p align="center">
  <a href="#polski">🇵🇱 Polski</a> · <a href="#english">🇬🇧 English</a>
</p>

<p align="center">
  <img src="docs/screenshots/scroll.gif" alt="CloudNest — konfigurator serwerów" width="820">
</p>

---

<a id="polski"></a>

## 🇵🇱 Polski

> 💡 Przykładowa realizacja konfiguratora produktu — narzędzie, które zastępuje
> formularz „poproś o wycenę" i podaje cenę od razu.

### Czym jest ten projekt

Strona dostawcy chmury z pełnym konfiguratorem maszyny wirtualnej: suwaki CPU, RAM
i dysku, wybór lokalizacji, dodatki i okres rozliczeniowy. Cena netto i brutto
przelicza się w tej samej chwili, w której użytkownik rusza suwakiem.

### Jaki problem rozwiązuje

Gdy cennik jest „na zapytanie", część klientów po prostu wychodzi do konkurencji,
która ceny pokazuje. Ta strona:

- **Daje odpowiedź natychmiast** — cena zmienia się na żywo, bez przeładowania i
  bez kontaktu z handlowcem.
- **Pokazuje, z czego wynika kwota** — rozpisana kalkulacja pozycja po pozycji
  buduje zaufanie i ucina pytanie „skąd ta cena".
- **Podbija wartość koszyka** — dodatki i płatność roczna z rabatem są widoczne w
  momencie decyzji, a nie po niej.
- **Prowadzi za rękę** — cztery gotowe konfiguracje (Starter, Business, Scale,
  Dedicated) są punktem startu dla kogoś, kto nie wie, ile mocy potrzebuje.

### Co zawiera strona

- **Konfigurator** z suwakami vCPU / RAM / dysk NVMe i natychmiastową wyceną
- **Gotowe zestawy** — kliknięcie ustawia wszystkie parametry naraz
- **Wybór lokalizacji** z mnożnikiem ceny i informacją o opóźnieniu
- **Dodatki** (backup, anty-DDoS, panel, monitoring) doliczane na bieżąco
- **Przełącznik miesięcznie / rocznie** z wyliczoną kwotą oszczędności
- **Panel podsumowania** przyklejony przy przewijaniu, z rozpisaną kalkulacją
- **Tabela porównawcza** z typową ofertą rynkową i rozwijane **FAQ**

### Efekt dla klienta

Cennik, który sprzedaje sam: odwiedzający widzi swoją cenę, rozumie, skąd się
wzięła, i przychodzi do kontaktu z gotową decyzją zamiast pytania „ile to kosztuje".

---

<a id="english"></a>

## 🇬🇧 English

> 💡 An example product configurator — a tool that replaces the "request a quote"
> form and gives the price right away.

### What this project is

A cloud provider's site with a full virtual machine configurator: CPU, RAM and disk
sliders, region choice, add-ons and billing period. Net and gross prices recalculate
the moment the user moves a slider.

### The problem it solves

When pricing is "on request", some clients simply leave for a competitor who shows
theirs. This site:

- **Answers instantly** — the price changes live, with no reload and no sales call.
- **Shows where the number comes from** — an itemised breakdown builds trust and
  kills the "why so much?" question.
- **Raises cart value** — add-ons and the discounted yearly plan are visible at the
  moment of decision, not after it.
- **Guides the undecided** — four ready configurations (Starter, Business, Scale,
  Dedicated) are a starting point for someone who doesn't know how much power they need.

### What the page includes

- **Configurator** with vCPU / RAM / NVMe sliders and instant pricing
- **Presets** — one click sets every parameter at once
- **Region selector** with a price multiplier and latency note
- **Add-ons** (backup, anti-DDoS, panel, monitoring) priced in on the fly
- **Monthly / yearly toggle** with the calculated saving
- **Summary panel** that sticks while scrolling, with a full breakdown
- **Comparison table** against a typical market offer and a collapsible **FAQ**

### The outcome for the client

Pricing that sells itself: the visitor sees their own price, understands how it was
built, and arrives at the contact form with a decision instead of a question.

---

<details>
<summary><strong>Szczegóły techniczne · Technical details</strong></summary>

**SvelteKit + Svelte 5 (runes) + TypeScript + Tailwind CSS v4 + Skeleton UI v4**
(motyw / theme `seafoam`), **pnpm**. Cała kalkulacja to `$state` + `$derived` —
zero bibliotek do formularzy i zero zapytań do serwera.

```bash
pnpm install
pnpm dev      # http://localhost:5173
pnpm build
pnpm check
```
</details>
