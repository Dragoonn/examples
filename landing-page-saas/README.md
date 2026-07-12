<h1 align="center">Fakturly — Landing Page</h1>
<p align="center"><strong>Strona sprzedażowa (Landing Page)</strong> nastawiona na jeden cel: konwersję.</p>

<p align="center">
  <img src="docs/screenshots/scroll.gif" alt="Przewijanie landing page Fakturly" width="820">
</p>

> 💡 To przykładowa realizacja usługi **Landing Page** — strona zaprojektowana tak,
> by zamienić odwiedzającego w klienta: rejestrację, zakup lub zapytanie ofertowe.

---

## Czym jest ten projekt

Strona sprzedażowa fikcyjnego produktu SaaS do fakturowania. Każda sekcja prowadzi
odwiedzającego krok po kroku — od problemu, przez korzyści i dowód społeczny, aż po
cennik i wezwanie do działania. To nie jest „strona o firmie", tylko **narzędzie
sprzedaży**.

## Jaki problem rozwiązuje

Ruch z reklam czy Google trafia na stronę, ale nie zamienia się w klientów.
Dobrze zaprojektowany landing naprawia to, ponieważ:

- **Ma jeden, jasny cel** — wszystkie przyciski prowadzą do „Zacznij za darmo".
- **Odpowiada na obiekcje** — sekcja korzyści, „jak to działa" w 3 krokach i FAQ
  rozwiewają wątpliwości, które blokują decyzję.
- **Buduje zaufanie** — opinie klientów i ocena „4,8/5" jako dowód społeczny.
- **Ułatwia wybór** — przejrzysty cennik z wyróżnionym planem i przełącznikiem
  miesięcznie/rocznie, który od razu pokazuje oszczędność.

## Podgląd

| Wersja desktop | Wersja mobilna |
| :---: | :---: |
| <img src="docs/screenshots/desktop.png" alt="Widok desktop" width="440"> | <img src="docs/screenshots/mobile.png" alt="Widok mobilny" width="180"> |

## Co zawiera strona

- **Hero** z mocnym nagłówkiem, podwójnym CTA i paskiem zaufania (ocena, liczba klientów)
- **Sekcja korzyści** — 6 kluczowych funkcji produktu w czytelnych kafelkach
- **„Jak to działa"** — proces w 3 prostych krokach
- **Opinie klientów** — dowód społeczny z ocenami
- **Interaktywny cennik** — przełącznik miesięcznie/rocznie z natychmiastowym
  przeliczaniem ceny i wyróżnionym planem „Najczęściej wybierany"
- **FAQ** — rozwijane odpowiedzi na najczęstsze pytania
- **Końcowe CTA** — ostatni, mocny impuls do działania

## Efekt dla klienta

Strona, która realnie zwiększa liczbę rejestracji/zapytań z tego samego ruchu —
idealna pod kampanie reklamowe (Google Ads, Meta) i premiery produktów.

---

<details>
<summary><strong>Szczegóły techniczne</strong></summary>

Zbudowane w **SvelteKit + Svelte 5 (runes) + TypeScript + Tailwind CSS v4 +
Skeleton UI v4** (motyw `rose`), zarządzane przez **pnpm**. Interaktywny cennik
i akordeon FAQ oparte o `$state`; ceny przeliczane reaktywnie.

```bash
pnpm install
pnpm dev      # podgląd lokalny (http://localhost:5173)
pnpm build    # wersja produkcyjna
pnpm check    # kontrola typów
```
</details>
