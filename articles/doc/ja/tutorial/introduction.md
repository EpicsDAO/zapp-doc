---
id: tutorial
title: はじめに
description: この ZAPP チュートリアル は実際に手を動かして学びたい人向けに構成されています。
---

:::div{.info}
この ZAPP チュートリアル は実際に手を動かして学びたい人向けに構成されています。
:::

## チュートリアルを始める前に

本チュートリアルは、プログラミング言語 Rust と GraphQL, Google Cloud, GitHub を含めた総合的なクラウドアプリの開発チュートリアルです。

このチュートリアルでは 基本的な GraphQL API を作成します。このチュートリアルで学ぶ技法はどのような ZAPP のアプリにおいても基本的なものであり、マスターすることで高速にスケーラブルな GraphQL API を構築することができるようになります。

このチュートリアルは 5 つ のセクションに分割されています。

- [Scaffold を実行する](/ja/doc/tutorial/execute-scaffold/)
- [Entity を定義する](/ja/doc/tutorial/define-entity/)
- [マイグレーション](/ja/doc/tutorial/migration/)
- [Mutatuion を定義する](/ja/doc/tutorial/define-mutation/)
- [Cloud Run へデプロイする](/ja/doc/tutorial/deploy-to-cloud-run/)

### これから作るもの

シンプルな GraphQL API を構築していきます。そして GitHub Actions を使って、Google Cloud Run 第 2 世代 へデプロイしてみます。

### 前提知識

Rust に多少慣れていることを想定していますが、他のプログラミング言語を使ってきた人でも進めていくことはできるはずです。

API には REST API ではなく GraphQL API を採用しているので、
GraphQL を復習する必要がある方はこちらを先に読むことをお勧めします。

- [GraphQL](https://graphql.org/)

- [Async GraphQL](https://github.com/async-graphql/async-graphql)

ZAPP は GraphQL のエンドポイント一点のみを公開しています。
内部ルーティングの必要はありません。

また、データベースには PostgreSQL を採用しており、ORM には SeaORM を採用しています。

- [PostgreSQL](https://www.postgresql.org/)

- [SeaORM](https://www.sea-ql.org/SeaORM/)

本チュートリアルでは GitHub Actions を使って Google Cloud Run にデプロイします。

- [GitHub Actions](https://github.com/features/actions)

- [Google Cloud Run](https://cloud.google.com/run)

想いついたアイディアを即座にサーバーレスなクラウド環境にデプロイすることができる ZAPP フレームワークをお楽しみください！
