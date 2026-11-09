# Il mio quaderno

Pagina principale con le materie. Per ora: **Quaderno di matematica** (cartella `matematica/`).

## Quaderno di matematica

Esercizi di matematica sempre nuovi (numeri, numeri relativi, monomi, frazioni, aree, piano cartesiano, geometria piana, cerchio e circonferenza, solidi) da usare su iPad o nel browser.

## Come si usa

- **Alunni:** scelgono «Sono un alunno», scrivono il codice della classe e il proprio nome. Esercizi e stelle vengono salvati.
- **Insegnante:** sceglie «Sono l'insegnante», crea la classe con un PIN e dà il codice agli alunni. Con codice e PIN vede i progressi di tutta la classe.
- **Senza accesso:** «Prova senza salvare i risultati».

## Installare su iPad

1. Apri il sito in **Safari**.
2. Tocca **Condividi** (il quadrato con la freccia in su).
3. Scegli **Aggiungi alla schermata Home** e poi **Aggiungi**.

L'app si apre a tutto schermo con la sua icona e funziona anche senza rete; i risultati fatti offline vengono inviati appena torna la connessione.

## Struttura

- `index.html` – pagina principale «Il mio quaderno»
- `matematica/index.html` – il quaderno di matematica (HTML, CSS, JavaScript, nessuna dipendenza)
- `manifest.webmanifest`, `sw.js`, icone – installazione come app (PWA)
- Dati: Supabase (tabelle `qm_classi`, `qm_alunni`, `qm_risultati`, accessibili solo tramite le funzioni `qm_*`)

Pubblicato con GitHub Pages dal ramo `main`.
