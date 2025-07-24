# 📘 Dekoratory GraphQL w NestJS – ściąga

## 🧱 Dekoratory do klas i typów (GraphQL typy)

| Dekorator           | Gdzie?        | Co robi?                                                |
| ------------------- | ------------- | ------------------------------------------------------- |
| `@ObjectType()`     | klasa         | Tworzy GraphQL-owy typ obiektu (np. `User`, `Post`)     |
| `@InputType()`      | klasa         | Tworzy typ wejściowy do mutacji (np. `CreateUserInput`) |
| `@ArgsType()`       | klasa         | Używany do wielu argumentów jako jeden obiekt           |
| `@InterfaceType()`  | klasa         | Tworzy interfejs GraphQL (do dziedziczenia)             |
| `@Field(() => Typ)` | pole w klasie | Określa pole, które będzie widoczne w GraphQL           |

---

## ⚙️ Dekoratory do resolverów (metody w klasie Resolver)

| Dekorator                  | Gdzie? | Co robi?                                          |
| -------------------------- | ------ | ------------------------------------------------- |
| `@Query(() => Typ)`        | metoda | Definiuje zapytanie GraphQL (np. `getUsers`)      |
| `@Mutation(() => Typ)`     | metoda | Definiuje mutację GraphQL (np. `createPost`)      |
| `@Subscription(() => Typ)` | metoda | Subskrypcja — real-time dane (np. `onNewComment`) |
| `@ResolveField(() => Typ)` | metoda | Definiuje pole zależne (np. `author` w `Comment`) |

---

## 📥 Dekoratory do argumentów/metod

| Dekorator        | Gdzie?   | Co robi?                                             |
| ---------------- | -------- | ---------------------------------------------------- |
| `@Args('nazwa')` | parametr | Pobiera pojedynczy argument z zapytania              |
| `@Context()`     | parametr | Daje dostęp do kontekstu (np. `req.user`)            |
| `@Parent()`      | parametr | Pobiera obiekt nadrzędny (używany w `@ResolveField`) |
| `@Info()`        | parametr | Surowe info o zapytaniu GraphQL (rzadko używane)     |

---

## 🧪 Przykładowy kod

```ts
@ObjectType()
export class CommentEntity {
  @Field(() => Int)
  id: number;

  @Field()
  content: string;
}

@InputType()
export class CreateCommentInput {
  @Field()
  content: string;

  @Field(() => Int)
  postId: number;
}

@Resolver(() => CommentEntity)
export class CommentResolver {
  @Query(() => [CommentEntity])
  getComments() {
    return this.commentService.findAll();
  }

  @Mutation(() => CommentEntity)
  createComment(
    @Args("createCommentInput") input: CreateCommentInput,
    @Context() context
  ) {
    const userId = context.req.user.id;
    return this.commentService.create(input, userId);
  }

  @ResolveField(() => User)
  author(@Parent() comment: CommentEntity) {
    return this.userService.findById(comment.authorId);
  }
}
```
