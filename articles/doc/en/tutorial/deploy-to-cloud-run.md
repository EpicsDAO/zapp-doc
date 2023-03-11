---
id: tutorial
title: Deploy to Cloud Run
description: Deploy to Cloud Run
---

## Deploy to Google Cloud Run

### 1. Log in to Github CLI Auth

```bash
 $ gh auth login
```

### 2. Log in to Gcloud Auth

```bash
 $ gcloud auth login
```

### 3. Create a GitHub repository

Let's create a GitHub repository.

[GitHub link](https://github.com)

```bash
 $ git add . $ git commit -m 'first commit' $ git remote add origin git@github.com:YOURREPO/YOURAPP.git $ git push origin main
```

### 4. Create a Google Cloud Project

[Direction of creating Google Cloud Project](https://cloud.google.com/resource-manager/docs/creating-managing-projects)

### 5. Set up Cloud Compute Network

The zapp compute setup command automatically creates and configures the VPC network and Cloud SQL.

```bash
 $ zapp compute setup
```

The following settings are automatically made by this command.

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

### 6. Deploy using Github Actions Workflow.

The command above added workflows to the `.github` directory. Now when you push a new commit to the `main` branch, the deployment will start automatically.

```bash
 $ git add . $ git commit -m 'first deploy' $ git push origin main
```

Your APP is all set!
