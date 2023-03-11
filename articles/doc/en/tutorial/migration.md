---
id: migration
title: migration
description: migration
---

`zapp db` command is wrapping `sea-orm-cli` . Please check the link below for details on how to use it.

- [sea-orm-cli](https://www.sea-ql.org/SeaORM/docs/generate-entity/sea-orm-cli)

### Database migration

Run the `zapp db migrate` command to migrate the database.

```bash
$ zapp db migrate
✅ Successfully DB migrated!
```

### Database rollback

```bash
$ zapp db rollback
✅ Successfully DB rollbacked!
```

### Database reset

```bash
$ zapp db reset
✅ Successfully DB reset!
```

### Restart the PostgreSQL container

```bash
$ zapp docker restart
```
