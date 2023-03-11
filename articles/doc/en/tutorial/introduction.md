---
id: tutorial
title: Introduction
description: This ZAPP tutorial is designed for those who want to get hands-on and learn.
---

This ZAPP tutorial is designed for those who want to get hands-on and learn.

## Before starting the tutorial

This tutorial is a comprehensive cloud app development tutorial that includes the programming languages Rust and GraphQL, Google Cloud, and GitHub.

In this tutorial you will create a basic GraphQL API. The techniques you will learn in this tutorial are basic to any ZAPP app, and mastering them will allow you to build a fast and scalable GraphQL API.

This tutorial is divided into 5 sections.

- [Run Scaffold](/doc/tutorial/execute-scaffold/)
- [Define Entity](/doc/tutorial/define-entity/)
- [migration](/doc/tutorial/migration/)
- [Define Mutatuion](/doc/tutorial/define-mutation/)
- [Deploy to Cloud Run](/doc/tutorial/deploy-to-cloud-run/)

### What to make from now on

We will build a simple GraphQL API. Then use GitHub Actions to deploy to Google Cloud Run 2nd Generation.

### Prerequisite knowledge

I'm assuming you're a little used to Rust, but anyone who has used other programming languages should be able to get started.

The API uses the GraphQL API instead of the REST API, so if you need to review GraphQL, I recommend reading this first.

- [GraphQL](https://graphql.org/)
- [Async GraphQL](https://github.com/async-graphql/async-graphql)

ZAPP exposes only one GraphQL endpoint. No need for internal routing.

In addition, PostgreSQL is used for the database and SeaORM is used for the ORM.

- [PostgreSQL](https://www.postgresql.org/)
- [SeaORM](https://www.sea-ql.org/SeaORM/)

This tutorial uses GitHub Actions to deploy to Google Cloud Run.

- [GitHub Actions](https://github.com/features/actions)
- [Google Cloud Run](https://cloud.google.com/run)

Enjoy the ZAPP framework that allows you to instantly deploy your ideas to a serverless cloud environment!
