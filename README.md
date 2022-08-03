# Installation (trin-for-trin)

💡 **Sådan kommer du i gang med Tailwind CSS.**

**_OBS!_** _Det er ikke meningen, at du skal vide alt om, hvad du skal i denne guide._

---

**Trin:**

1. Installer Node
2. Download respository
3. Sæt projektet op
4. Kør dev-server via terminalen
5. Brug Tailwind

---

## 1. Installer Node

Først skal du downloade og installere **Node** via [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

Vælg enten _macOs_ eller _Windows_

<details>
    <summary>Se eksempel</summary>

![Vælg enten `macOS` eller `Windows`](/README/download-node.webp)
Vælg enten `macOS` eller `Windows`

</details>

---

## 2. Download respository

<details>
    <summary><h3>A — Via terminalen (anbefalet)</h3></summary>

1. Opret og åben en ny mappe i VS Code.
2. Åbn terminalen via **View** (se evt. nedenfor), og
3. Kopier følgende kode ind i terminal-vinduet og tryk _Enter_:
   - Indtast "y" og tryk _Enter_, når der står `Ok to proceed? (y)`

```
npx degit https://github.com/daviatkea/tailwind-template-e2022.git . --force
```

![SCR-20220119-lgw.png](/README/SCR-20220119-lgw.png)
'View' -> 'Terminal'

</details>

eller

<details>
    <summary><h3>B — Via GitHub</h3></summary>

1. Klik på "Use this template" (grøn knap)
2. Giv dit projekt et navn
3. Vælg "Public" efterfulgt af "Create repository from template".
4. I dit nyoprettede repository kan du nu klone som normalt via VS Code.

</details>

---

## 3. Sæt projektet op

Indtast følgende kode i terminal-vinduet og tryk _Enter_

```
npm install
```

<details>
    <summary>Se eksempel</summary>

![npm-i.jpg](/README/npm-i.jpg)

</details>

---

## 4. Kør dev-server via terminalen

Setuppet virker ikke med den traditionelle Live-Sever. Så derfor skal vi køre vores egen dev-server. Det gør du ved at kopiere følgende ind i terminal-vinduet efterfulgt af _Enter_

```
npm run dev
```

### 4.1. Stop dev-serveren

Dev-serveren kører indtil du stopper den manuelt eller lukker VS Code. Du stopper dev-serveren ved at indtaste `ctrl+c` i terminal-vinduet.

💡 **OBS!** — Nogle gange er det nødvendigt at stoppe dev-serveren, hvis tingene ikke virker efter hensigten. Prøv da evt. at lukke dev-serveren og starte den op igen vha. `npm run dev`.

---

## 5. Brug Tailwind

Begynd at bruge Tailwinds hjælpeklasser til at style dit indhold. Find `index.html` i `/src`.

Navigér derefter til [Tailwinds dokumentation](https://tailwindcss.com/docs/), for at se alle hjælpeklasser samt øvrige opsætningsmuligheder.

![Untitled](/README/Untitled.png)
