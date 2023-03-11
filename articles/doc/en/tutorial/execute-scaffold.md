---
id: tutorial
title: Apply Scaffold
description: This tutorial describes how to use the `zapp g model` command to create a GraphQL CRUD API.
---

This tutorial will show you how to use the `zapp g model` command to create a GraphQL CRUD API. If you need to review Async GraphQL, we recommend reading this [Async GraphQL](https://github.com/async-graphql/async-graphql) first.

`zapp g model {TABLE_NAME}` will automatically generate the required files.

## Executing the `zapp g model` command

```bash
$ zapp g model user
✅ Successfully created migration file: migration/src/m20220613_102512_create_user_table.rs
✅ Successfully added route to `migration/src/lib.rs`
✅ Successfully created entity file: entity/src/user.rs
✅ Successfully created mutation file: src/graphql/mutation/user.rs
✅ Successfully created query file: src/graphql/query/user.rs
✅ Successfully added route to `entity/src/lib.rs`
✅ Successfully added mutation route: src/graphql/mutation/mod.rs
✅ Successfully added mutation route: src/graphql/query/mod.rs
```

Four files are created and the routing changes are automatically corrected.
