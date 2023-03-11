---
id: tutorial
title: Cloud Run へデプロイする
description: Cloud Run へデプロイする
---

## Google Cloud Run 　へデプロイする

### 1. Github CLI Auth ログインする

```bash
$ gh auth login
```

### 2. Gcloud Auth ログインする

```bash
$ gcloud auth login
```

### 3. GitHub リポジトリを作成する

GitHub リポジトリを作成しましょう。

[GitHub link](https://github.com)

```bash
$ git add .
$ git commit -m 'first commit'
$ git remote add origin git@github.com:YOURREPO/YOURAPP.git
$ git push origin main
```

### 4. Google Cloud Project を作成する

[Google Cloud Project の作成の方位](https://cloud.google.com/resource-manager/docs/creating-managing-projects)

### 5. Cloud Compute Network を設定する

zapp compute setup コマンドで VPC ネットワークや Cloud SQL を自動で作成、設定します。

```bash
$ zapp compute setup
```

このコマンドによって以下の設定を自動で行っています。

- Creating IAM Service Account
- Adding Roles to your Service Account
- Enable Google Cloud APIs
- Creating a VPC network
- Creating Firewall TCP rules
- Creating Firewall SSH rules
- Creating a network subnet
- Creating a VPC access connector
- Creating a Router
- Obtaining an External IP
- Creating Cloud NAT
- Creating Cloud SQL
- Creating IP Range
- Creating VPC Connector
- Setting Private Network
- Generating GitHub Actions Workflow

### 6. Github Actions Workflow 　を使ってデプロイする。

さきほどのコマンドで `.github` ディレクトリに workflows が追加されました。
これで、 `main` ブランチに新しいコミットをプッシュすると自動でデプロイが始まります。

```bash
$ git add .
$ git commit -m 'first deploy'
$ git push origin main
```

Your APP is all set!
