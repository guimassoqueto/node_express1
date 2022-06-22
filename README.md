# Web Store SQL w/o auth!

Store Application project built in NodeJS. For a more robust app, with auth, cookies and sessions. Please check my **Web Store noSQL** project

## How to install:
 1. Clone the repository:
`git clone https://github.com/guimassoqueto/node_express1.git`

2. Install npm dependencies:
`npm install`

3. Compile to javascript
`npm test`

4. Send static files to dist/ directory
`npm run cpfiles`
5. Open .env_example file in the root and set the database connection according to DB. [Click here to more information](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/connect-your-database-typescript-postgres)
6. Run migrations in prisma
`npx prisma migrate dev --name init`

7. Run nodemon
`npm run nodemon`

7. Open your web browser on http://localhost:3000
