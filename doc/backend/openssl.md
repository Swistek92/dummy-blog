# 🔐 OpenSSL – Podstawowe Komendy i Użycie

Ten dokument opisuje podstawowe zastosowania `openssl`, takie jak generowanie kluczy, losowych danych, czy pary public/private key do JWT, HTTPS, szyfrowania itd.

---

## 📦 Instalacja OpenSSL (Ubuntu/Debian)

```bash
sudo apt update && sudo apt install openssl
```

Sprawdzenie wersji:

```bash
openssl version
```

---

## 🔑 Generowanie losowego sekretu (np. do JWT)

Wygeneruj 32-bajtowy losowy ciąg w formacie hex:

```bash
openssl rand -hex 32
```

Przykładowy wynik:

```
6f9d1b49f1f5a6572f3d13f8616b7c9ff018e5c206d7d89c0c7e88021d7dfb2e
```

Możesz użyć go np. jako `JWT_SECRET`:

```env
JWT_SECRET=6f9d1b49f1f5a6572f3d13f8616b7c9ff018e5c206d7d89c0c7e88021d7dfb2e
```

---

## 🔐 Generowanie pary kluczy RSA

### 1. Klucz prywatny (2048-bit)

```bash
openssl genpkey -algorithm RSA -out private.key -pkeyopt rsa_keygen_bits:2048
```

### 2. Klucz publiczny z klucza prywatnego

```bash
openssl rsa -pubout -in private.key -out public.key
```

Teraz masz:

- `private.key` – klucz prywatny
- `public.key` – klucz publiczny

---

## 🔐 Generowanie certyfikatu self-signed (HTTPS lokalnie)

```bash
openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365 -nodes
```

To stworzy:

- `key.pem` – klucz prywatny
- `cert.pem` – certyfikat

Możesz tego użyć w aplikacjach HTTPS lokalnie.

---

## 🔍 Szyfrowanie i odszyfrowywanie plików

### Szyfrowanie pliku:

```bash
openssl enc -aes-256-cbc -salt -in secret.txt -out secret.txt.enc
```

### Odszyfrowanie:

```bash
openssl enc -aes-256-cbc -d -in secret.txt.enc -out secret.txt
```

---

## 📚 Dokumentacja

- Oficjalna strona OpenSSL: [https://www.openssl.org/docs/](https://www.openssl.org/docs/)
- Cheatsheet: [https://www.sslshopper.com/article-most-common-openssl-commands.html](https://www.sslshopper.com/article-most-common-openssl-commands.html)

---

Gotowe do użycia w README lub jako dokumentacja pomocnicza!
