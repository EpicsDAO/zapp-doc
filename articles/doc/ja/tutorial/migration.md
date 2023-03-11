---
id: migration
title: マイグレーション
description: マイグレーション
---

`zapp db` コマンドは `sea-orm-cli` をラッピングしています。
詳しい利用方法は以下のリンクより確認してください。

- [sea-orm-cli](https://www.sea-ql.org/SeaORM/docs/generate-entity/sea-orm-cli)

### データベースの移行

`zapp db migrate` コマンドを実行してデータベースの移行を行います。

```bash
$ zapp db migrate
✅ Successfully DB migrated!
```

### データベースのロールバック

```bash
$ zapp db rollback
✅ Successfully DB rollbacked!
```

### データベースのリセット

```bash
$ zapp db reset
✅ Successfully DB reset!
```

### PostgreSQL コンテナの再起動

```bash
$ zapp docker restart
```
