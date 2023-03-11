---
id: what-is-zapp
title: Get a comfortable development environment
description: Thanks to the efforts of the great open source developers and the evolution of IDEs (Integrated Development Environments) like Visual Studio Code, we have a comfortable development environment.
---

Thanks to the efforts of the great open source developers and the evolution of IDEs (Integrated Development Environments) like [Visual Studio Code](https://code.visualstudio.com/) , we have a comfortable development environment.

## Async GraphQL Axum, SeaORM and Scaffold

Axum Async GraphQL and SeaORM PostgreSQL allow you to launch asynchronous GraphQL web servers at high speed. We adopted SeaORM and rebuilt the entity-driven Scaffold for distributed systems because we wanted to achieve a similar development experience in a cloud-native environment.

## Type check with Rust Analyzer

Providing a type-safe development environment with Rust Analyzer reduces unnecessary mistakes, makes building large-scale applications more secure, and keeps teams agile.

## Code unification by Rustfmt

Historically, we have been plagued by esoteric code that looks like a lithograph. Unifying coding styles brings order and transparency to the code base. Simple and easy-to-read code is easy to manage.

## Cargo Test

The test gives immediate feedback so that changes can quickly detect any negative impact on other parts of the system. Independent verification is performed for each code to prevent bugs from entering.

## GitHub Actions (CI / CD)

Minimize code integration issues by auto-deploying small each commit. If the test fails, you won't bring the error into production, so you can check the results and make calm corrections.

## GraphQL API

Designed to improve speed, flexibility, and ease of use for developers, it also provides an integrated development environment (IDE) that allows you to see what's going on. Requests from multiple data sources can be configured with a single API call.

## Supports fixed IP restrictions

Distributed IP limits that scale to multiple instances and handle requests have been difficult to address. ZAPP solves this problem by using Cloud NAT.

## Effortless Routing

The task of routing is simple but widespread and prone to mistakes. ZAPP automates routing-related work as much as possible, including GraphQL queries and mutations, as well as migration files.

## Docker container

By coding the infrastructure and sharing files, you can create the same environment anywhere. You can continue development on a reproducible infrastructure without being bothered by environmental differences such as the local development environment or the production environment on the cloud.
