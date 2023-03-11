---
id: quickstart
title: quick start
description: Here, we will confirm that you can build the GraphQL API immediately by installing the required packages for ZAPP.
---

Here, we will confirm that you can build the GraphQL API immediately by installing the required packages for ZAPP.

![ZAPP new](https://storage.googleapis.com/zapp-bucket/img/zapp-new2.gif)

## Installation of required packages

- [Google SDK](https://cloud.google.com/sdk/docs)
- [Docker](https://www.docker.com/)
- [Github CLI](https://cli.github.com/)
- [SeaORM](https://www.sea-ql.org/SeaORM/)
- [Axum](https://github.com/tokio-rs/axum)
- [Async GraphQL](https://github.com/async-graphql/async-graphql)

## Cloud architecture

- [Google Cloud Run](https://cloud.google.com/run)
- [Google Cloud SQL](https://cloud.google.com/sql)
- [Google Cloud IAM](https://cloud.google.com/iam)
- [Google Cloud Container Registry](https://cloud.google.com/container-registry)
- [Google Cloud VPC](https://cloud.google.com/vpc)
- [Google Cloud Nat](https://cloud.google.com/nat)
- [Github Actions](https://github.com/features/actions)

## install

```bash
 $ cargo install zapp
```

```bash
 $ zapp -- help EpicsDAO Rust Serverless Framework USAGE: zapp <SUBCOMMAND> OPTIONS: -h, -- help Print help information -V, --version Print version information SUBCOMMANDS: compute db docker g gcloud gh help Print this message or the help of the given subcommand(s) iam init new run sql
```

## Start PostgreSQL container

Create Docker PostgreSQL

```bash
 $ zapp docker psql ✅ PostgreSQL Container Created: 4619cfc047f3cad6c9db8d255aff841fbfe34bbef0e2661fa3a02db5d5ec5d91
```

## Start a local server

```bash
 $ cargo run
```

Now go to

[http: // localhost: 3000 / api / graphql](http://localhost:3000/api/graphql)
