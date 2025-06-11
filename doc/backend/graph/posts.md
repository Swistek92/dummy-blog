## Przykładowe zapytanie GraphQL do pobierania postów

Poniżej znajduje się przykładowe zapytanie GraphQL, które pobiera listę postów wraz z ich identyfikatorami i tytułami:

```graphql
query {
  posts {
    id
    title
  }
}
```

Aby wykonać to zapytanie, należy dodać nagłówek autoryzacyjny z tokenem JWT:

```json
{
  "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIzLCJpYXQiOjE3NDk2MjU3NzUsImV4cCI6MTc0OTcxMjE3NX0.VA7QDoNZWaG4jrg6MgcvebakT7zFegYG973rnXBlF3I"
}
```
