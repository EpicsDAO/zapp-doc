---
id: tutorial
title: Entity を定義する
description: Entity を定義する
---

:::div{.info}
このチュートリアルは `zapp g model` コマンドを使って生成した、Entity を編集して、データベースにテーブルを作成します。
:::

### Entity を定義する

`entity/src/user.rs`

```rust
・
・
#[derive(Clone, Debug, PartialEq, DeriveEntityModel, Serialize, Deserialize, SimpleObject)]
#[sea_orm(table_name = "users")]
#[graphql(concrete(name = "User", params()))]
pub struct Model {
    #[sea_orm(primary_key)]
    #[serde(skip_deserializing)]
    pub id: i32,
    pub username: String,
    pub email: String
}
・
・
```

### Entity の構造

詳しい Entity の構造はこちらから

- [Entity の構造](https://www.sea-ql.org/SeaORM/docs/generate-entity/entity-structure/)
