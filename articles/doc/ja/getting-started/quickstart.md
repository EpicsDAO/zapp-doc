---
id: quickstart
title: クイックスタート
description: ここでは ZAPP に必要なパッケージをインストールすれば、すぐに GraphQL API を構築できることを確認します。
---

:::div{.info}
ここでは ZAPP に必要なパッケージをインストールすれば、すぐに GraphQL API を構築できることを確認します。
:::

![ZAPP new](https://storage.googleapis.com/zapp-bucket/img/zapp-new2.gif)

## 必要なパッケージのインストール

- [Google SDK](https://cloud.google.com/sdk/docs)
- [Docker](https://www.docker.com/)
- [Github CLI](https://cli.github.com/)
- [SeaORM](https://www.sea-ql.org/SeaORM/)
- [Axum](https://github.com/tokio-rs/axum)
- [Async GraphQL](https://github.com/async-graphql/async-graphql)

## Cloud アーキテクチャ

- [Google Cloud Run](https://cloud.google.com/run)
- [Google Cloud SQL](https://cloud.google.com/sql)
- [Google Cloud IAM](https://cloud.google.com/iam)
- [Google Cloud Container Registry](https://cloud.google.com/container-registry)
- [Google Cloud VPC](https://cloud.google.com/vpc)
- [Google Cloud Nat](https://cloud.google.com/nat)
- [Github Actions](https://github.com/features/actions)

## インストール

```bash
$ cargo install zapp
```

```bash
$ zapp --help
EpicsDAO
Rust Serverless Framework

USAGE:
    zapp <SUBCOMMAND>

OPTIONS:
    -h, --help       Print help information
    -V, --version    Print version information

SUBCOMMANDS:
    compute
    db
    docker
    g
    gcloud
    gh
    help       Print this message or the help of the given subcommand(s)
    iam
    init
    new
    run
    sql
```

## PostgreSQL コンテナの起動

Create Docker PostgreSQL

```bash
$ zapp docker psql
✅ PostgreSQL Container Created: 4619cfc047f3cad6c9db8d255aff841fbfe34bbef0e2661fa3a02db5d5ec5d91
```

## ローカルサーバーを起動

```bash
$ cargo run
```

Now go to

[http://localhost:3000/api/graphql](http://localhost:3000/api/graphql)
