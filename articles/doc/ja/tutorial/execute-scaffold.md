---
id: tutorial
title: Scaffold を実効する
description: このチュートリアルは `zapp g model` コマンドを使って GraphQL の CRUD API を作成する方法を説明します。
---

:::div{.info}
このチュートリアルは `zapp g model` コマンドを使って GraphQL の CRUD API を作成する方法を説明します。Async GraphQL について復習する必要がある方はこちらの [Async GraphQL](https://github.com/async-graphql/async-graphql) を先に読むことをお勧めします。
:::

`zapp g model {TABLE_NAME}` で 必要なファイルを自動で生成します。

## `zapp g model` コマンドの実行

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

4 つのファイルが作成され、ルーティングの変更が自動で修正されます。
