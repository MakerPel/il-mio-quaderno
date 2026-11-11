# Il mio quaderno

Pagina principale con le materie: **Quaderno di matematica** (`matematica/`) **Quaderno di italiano** (`italiano/`) **Quaderno di inglese** (`inglese/`) **Quaderno di francese** (`francese/`) **Quaderno di tedesco** (`tedesco/`) e **Quaderno di informatica** (`informatica/`).

Indirizzo: https://makerpel.github.io/il-mio-quaderno/

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
- `informatica/index.html` – il quaderno di informatica: mouse, tastiera, copia e incolla, mini Word e mini Excel
- `tedesco/index.html` – il quaderno di tedesco: saluti, nome ed età, numeri fino a 20, der/die/das, famiglia, scuola, giorni e mesi
- `francese/index.html` – il quaderno di francese: lessico con pronuncia, mestieri, famiglia, casa, corpo, giornata, tempo, lettera, la Francia
- `inglese/index.html` – il quaderno di inglese: lessico con pronuncia, lavori, luoghi, right/left, tempo libero, vacanze, famiglia, civiltà
- `italiano/index.html` – il quaderno di italiano: 14 brani con domande, completamento, lessico, riordino, nomi e verbi
- `manifest.webmanifest`, `sw.js`, icone – installazione come app (PWA)
- Dati: Supabase (tabelle `qm_classi`, `qm_alunni`, `qm_risultati`, accessibili solo tramite le funzioni `qm_*`)

Pubblicato con GitHub Pages dal ramo `main`.
