
# React + Apollo Client + Hasura Example

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
docker run --name local-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -v pgdata:/var/lib/postgresql/data -d postgres
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


-### 4. Set up the database and Hasura 🗄️
- Open the Hasura console at http://localhost:8080
- Go to the "Data" tab and create a `users` table with columns: `id` (serial/auto-increment), `name` (text), `email` (text)
- Insert some sample users
- Make sure the `users` table is tracked

### 5. Generate GraphQL types and hooks 🛠️
### 5. Generate GraphQL types and hooks 🛠️
```sh
cd client
npm run codegen
```
### 6. Start the React app ⚛️
```sh

### 6. Start the React app ⚛️
```sh
npm run dev
```

The app will fetch and display the users from the database on page load.

---

## ⚡ Notes for Vite Migration

- The app now uses [Vite](https://vitejs.dev/) for development and build instead of Create React App.
- Use `npm run dev` to start the development server (default: http://localhost:3000).
- The entry point is `/src/index.tsx` and the main HTML file is `/index.html` in the project root.
- Environment variables must be prefixed with `VITE_` to be exposed to the client (e.g., `VITE_GRAPHQL_ENDPOINT`).
- For production builds, use `npm run build` and preview with `npm run preview`.
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
