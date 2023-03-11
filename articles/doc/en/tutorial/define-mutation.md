---
id: tutorial
title: Define a Mutation
description: Define a Mutation
---

### Define Mutation Input

`graphql/src/mutation/user.rs`

```rust
・
・
#[derive(InputObject)]
pub struct CreateUserInput {
    pub username: String,
    pub email: String
}
・
・
```

### Add Mutation functionality

`graphql/src/mutation/user.rs`

```rust
・
・
#[Object]
impl UserMutation {
    pub async fn create_user(
        &self,
        ctx: &Context<'_>,
        input: CreateUserInput,
    ) -> Result<task::Model> {
        let db = ctx.data::<Database>().unwrap();

        let user = user::ActiveModel {
            username: Set(input.username),
            email: Set(input.email),
            ..Default::default()
        };

        Ok(user.insert(db.get_connection()).await?)
    }
    ・
    ・
```

Now you are ready to use GraphQL!

![GraphQL Playground](https://storage.googleapis.com/zapp-bucket/img/graphql.gif)
