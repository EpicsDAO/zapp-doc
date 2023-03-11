---
id: tutorial
title: Mutation を定義する
description: Mutation を定義する
---

### Mutation Input を定義する

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

### Mutation の機能を追加する

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

これで GraphQL を使う準備ができました！

![GraphQL Playground](https://storage.googleapis.com/zapp-bucket/img/graphql.gif)
