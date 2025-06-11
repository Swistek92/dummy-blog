# Create User Mutation

This example demonstrates how to use a GraphQL mutation to create a new user. Replace the input values with your desired user details.

```graphql
mutation {
  createUser(
    createUserInput: { name: "alladyn", password: "123", email: "a@a.pl" }
  ) {
    id
  }
}
```

**Fields:**

- `name`: The user's name.
- `password`: The user's password.
- `email`: The user's email address.

The mutation returns the `id` of the newly created user.
