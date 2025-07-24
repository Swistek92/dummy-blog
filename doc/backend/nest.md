# NestJS CLI Generator - Podstawowa dokumentacja

Nest CLI pozwala szybko generować elementy aplikacji.

---

## kontroler auth

```bash
nest g co auth
```

## 📦 Moduły

Generowanie nowego modułu:

```bash
nest g module <nazwa>
```

**Przykład:**

```bash
nest g module users
```

---

## 🧩 Serwisy (Services)

Generowanie serwisu:

```bash
nest g service <ścieżka>/<nazwa>
```

**Przykład:**

```bash
nest g service users
```

Bez pliku spec (testowego):

```bash
nest g service users --no-spec
```

---

## 🌐 Kontrolery (Controllers)

Generowanie kontrolera:

```bash
nest g controller <ścieżka>/<nazwa>
```

**Przykład:**

```bash
nest g controller users
```

Bez pliku spec:

```bash
nest g controller users --no-spec
```

---

## 🛡️ Guardy

Generowanie guarda (np. do autoryzacji):

```bash
nest g guard <ścieżka>/<nazwa>
```

**Przykład:**

```bash
nest g guard auth/guards/google-auth
```

Bez pliku spec:

```bash
nest g guard auth/guards/google-auth --no-spec
```

---

## 🧵 Interceptory

Generowanie interceptora:

```bash
nest g interceptor <ścieżka>/<nazwa>
```

**Przykład:**

```bash
nest g interceptor common/logging
```

---

## 🪝 Pipe'y

Generowanie pipe:

```bash
nest g pipe <ścieżka>/<nazwa>
```

**Przykład:**

```bash
nest g pipe validation
```

---

## 🧭 Middleware

Generowanie middleware:

```bash
nest g middleware <ścieżka>/<nazwa>
```

**Przykład:**

```bash
nest g middleware logger
```

---

## 🧩 Resolver (GraphQL)

Generowanie resolvera:

```bash
nest g resolver <ścieżka>/<nazwa>
```

**Przykład:**

```bash
nest g resolver users
```

---

## 🔧 Custom Schematics

Aby zobaczyć wszystkie schematy CLI, użyj:

```bash
nest g
```

---

## ℹ️ Przydatne flagi

- `--no-spec` – nie generuj pliku testowego
- `--flat` – nie twórz folderu dla pliku
- `--dry-run` – pokazuje co zostanie utworzone, ale nic nie generuje

---

**Oficjalna dokumentacja:**
[https://docs.nestjs.com/cli/overview](https://docs.nestjs.com/cli/overview)
