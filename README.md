
# Apollo Client + Hasura Example

This project is a simple React app that uses Apollo Client to fetch and display user data from a Postgres database via Hasura's auto-generated GraphQL API. No custom backend server is required—Hasura provides the GraphQL API directly from your database.

## ✨ Features
- Fetches and displays a list of users (id, name, email) from a Postgres database
- Uses Hasura for instant GraphQL API generation
- Uses GraphQL Code Generator for type-safe React hooks

## 🚀 Setup Instructions

### 1. Install dependencies 📦

```sh
cd client
npm install
```



### 2. Start Postgres in Docker 🐳
This command runs a Postgres database in a Docker container and mounts a Docker volume (`pgdata`) to persist your database data, so it is not lost when the container stops or is removed.

```sh
docker run --name local-postgres \
  -e POSTGRES_PASSWORD=mysecretpassword \
  -p 5432:5432 \
  -v pgdata:/var/lib/postgresql/data \
  -d postgres
```

### 3. Start Hasura in Docker 🐳
This command runs Hasura in a Docker container, exposing the Hasura console on port 8080. Hasura connects to the Postgres database using the connection string provided.

```sh
docker run -d --name hasura \
  -p 8080:8080 \
  -e HASURA_GRAPHQL_DATABASE_URL=postgres://postgres:mysecretpassword@host.docker.internal:5432/postgres \
  -e HASURA_GRAPHQL_ENABLE_CONSOLE=true \
  hasura/graphql-engine:latest
```


### 4. Set up the database and Hasura 🗄️
- Open the Hasura console at http://localhost:8080
- Go to the "Data" tab and create a `users` table with columns: `id` (serial/auto-increment), `name` (text), `email` (text)
- Insert some sample users via insert row.

### 5. Generate GraphQL types and hooks 🛠️
```sh
cd client
npm run codegen
```
### 6. Start the React app ⚛️
```sh
npm run dev
```

The app will fetch and display the users from the database on page load.

---

## ℹ️ About Hasura

**Hasura** provides an instant, real-time GraphQL API on top of your Postgres database. This means you can:
- Instantly query and mutate your data with GraphQL, without writing backend code
- Set up permissions, relationships, and subscriptions easily
- Use the Hasura console (http://localhost:8080) to manage your schema, track tables, and insert/edit data directly in your Postgres database. Try it out for yourself to access some of its features.

**Note:** In production, tables and schema changes are usually managed through migrations (for example, using tools like Prisma, Hasura migrations, or SQL migration scripts) to ensure consistency and version control. For this demo, you can create tables and data directly in the Hasura console for quick setup and testing.

---

**Access the Hasura Console:**
- Open [http://localhost:8080](http://localhost:8080) in your browser
- Use the "Data" tab to create tables, insert data, and manage your Postgres database visually

**Benefits of using Hasura:**
- Rapid backend/API development with no boilerplate
- Real-time GraphQL subscriptions out of the box
- Fine-grained access control and permissions
- Easily connect to existing or new Postgres databases
- Scalable and production-ready

---

# 🇯🇵 日本語版 README

このプロジェクトは、Apollo Client を使って Hasura の自動生成 GraphQL API から Postgres データベースのユーザーデータを取得・表示するシンプルな React アプリです。バックエンドサーバーは不要で、Hasura が直接 GraphQL API を提供します。

## ✨ 主な特徴
- Postgres データベースからユーザー一覧（id, name, email）を取得・表示
- Hasura による即時 GraphQL API 生成
- GraphQL Code Generator による型安全な React フック

## 🚀 セットアップ手順

### 1. 依存パッケージのインストール 📦
```sh
cd client
npm install
```

### 2. Docker で Postgres を起動 🐳
このコマンドは Docker コンテナで Postgres データベースを起動し、データ永続化のために Docker ボリューム（pgdata）をマウントします。
```sh
docker run --name local-postgres \
  -e POSTGRES_PASSWORD=mysecretpassword \
  -p 5432:5432 \
  -v pgdata:/var/lib/postgresql/data \
  -d postgres
```

### 3. Docker で Hasura を起動 🐳
このコマンドは Hasura を Docker コンテナで起動し、ポート 8080 で Hasura コンソールを公開します。Hasura は指定した接続文字列で Postgres に接続します。
```sh
docker run -d --name hasura \
  -p 8080:8080 \
  -e HASURA_GRAPHQL_DATABASE_URL=postgres://postgres:mysecretpassword@host.docker.internal:5432/postgres \
  -e HASURA_GRAPHQL_ENABLE_CONSOLE=true \
  hasura/graphql-engine:latest
```

### 4. データベースと Hasura のセットアップ 🗄️
- http://localhost:8080 で Hasura コンソールを開く
- 「Data」タブで `users` テーブルを作成（カラム: `id` (serial/auto-increment), `name` (text), `email` (text)）
- サンプルユーザーを追加

### 5. GraphQL 型とフックの生成 🛠️
```sh
cd client
npm run codegen
```

### 6. React アプリの起動 ⚛️
```sh
npm run dev
```

アプリはページ読み込み時にデータベースからユーザーを取得・表示します。

---

## ℹ️ Hasura について

**Hasura** は Postgres データベース上に即時・リアルタイムな GraphQL API を提供します。これにより：
- バックエンドコードなしで GraphQL でデータのクエリ・更新が可能
- 権限・リレーション・サブスクリプションの設定が簡単
- Hasura コンソール（http://localhost:8080）でスキーマ管理やデータ編集が可能

**注意:** 本番環境では Prisma や Hasura マイグレーション、SQL スクリプト等でスキーマ管理・バージョン管理を行うのが一般的です。このデモでは素早いセットアップのためコンソールから直接テーブルやデータを作成できます。

---

**Hasura コンソールへのアクセス:**
- ブラウザで [http://localhost:8080](http://localhost:8080) を開く
- 「Data」タブでテーブル作成やデータ挿入が可能

**Hasura のメリット:**
- バックエンド/API 開発が高速・ノーボイラープレート
- リアルタイム GraphQL サブスクリプション
- きめ細やかなアクセス制御
- 既存・新規 Postgres DB への簡単接続
- スケーラブルで本番運用も可能
