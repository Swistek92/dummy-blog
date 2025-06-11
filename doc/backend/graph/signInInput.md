## Przykład mutacji logowania użytkownika

Poniżej znajduje się przykład zapytania GraphQL do logowania użytkownika (`signIn`). Mutacja przyjmuje adres e-mail oraz hasło, a w odpowiedzi zwraca identyfikator użytkownika, nazwę, avatar oraz token dostępu.

```graphql
mutation {
  signIn(signInInput: { email: "a@a.pl", password: "123" }) {
    id
    name
    avatar
    accessToken
  }
}
```
