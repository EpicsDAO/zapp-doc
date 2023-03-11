---
id: tutorial
title: Define Entity
description: Define Entity
---

This tutorial edits the Entity generated using the `zapp g model` command to create a table in the database.

### Define Entity

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

### Structure of Entity

Click here for the detailed Entity structure

- [Structure of Entity](https://www.sea-ql.org/SeaORM/docs/generate-entity/entity-structure/)
