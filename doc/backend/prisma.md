# 📘 Prisma – Podstawowe Komendy i Konfiguracja

Ten dokument zawiera najważniejsze komendy i informacje dotyczące Prisma w środowisku lokalnym.

---

## 🔧 Inicjalizacja Prisma

```bash
npx prisma init
```

Tworzy:

- `prisma/schema.prisma` – plik z definicjami modeli
- `.env` – dane połączeniowe do bazy danych (`DATABASE_URL`)

---

## 🧱 Migracje

### Tworzenie migracji i aktualizacja bazy danych

```bash
npx prisma migrate dev --name nazwamigracji
```

Przykład:

```bash
npx prisma migrate dev --name init
```

### Reset bazy danych (usuwa wszystkie dane)

```bash
npx prisma migrate reset
```

### Deploy migracji (np. na serwerze produkcyjnym)

```bash
npx prisma migrate deploy
```

---

## ⚙️ Synchronizacja modelu bez migracji (do prototypowania)

```bash
npx prisma db push
```

> Używane do szybkiego testowania bez zapisywania migracji

---

## 🔁 Generowanie Prisma Client (typy, dostęp do bazy)

```bash
npx prisma generate
```

> Generuje kod w `node_modules/@prisma/client` – używany do komunikacji z bazą

---

## 🧪 Prisma Studio

```bash
npx prisma studio
```

> Otwiera GUI w przeglądarce pod `http://localhost:5555`

---

## 📚 Dokumentacja

- Oficjalna dokumentacja: [https://www.prisma.io/docs](https://www.prisma.io/docs)
- Referencja CLI i API: [https://www.prisma.io/reference](https://www.prisma.io/reference)

---

## 📂 Struktura katalogu po `prisma init`

```
.
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── .env
├── package.json
...
```

---

Gotowe do commitowania w repozytorium! ✅
