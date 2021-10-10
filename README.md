# next-auth-github

## Notes from creating this repository

**Started from next-typescript-prettier-eslint**

**Start dev:**

```
npm run dev
```

**Add dependency:**

```
npm i next-auth
```

**Add dev dependencies:**

```
npm i -D prisma @types/next-auth
```

**Create new local database:**

```
postgres=# CREATE DATABASE next_auth_github;
```

**Initialize Prisma:**

```
npx prisma init
```

**Add database URL to .env file, use .env.example file:**

```
DATABASE_URL="postgresql://myUsername:myPassword@localhost:5432/next_auth_github?schema=public"
```

**Add .env to the .gitignore file**

**Add schema.prisma routes (from the repository linked below)**

**Migrate database:**

```
npx prisma migrate dev --name init
```

**Launch Prisma Studio to view tables:**

```
npx prisma studio
```

**Generate Prisma Client with the following command**

```
npx prisma generate
```

**Allows Prisma Client in your code:**

```
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
```

**Configure NextAuth, create a /pages/api/[...nextauth].ts file:**

**Add an GetHub OAuth App, go to Settings>Developer Settings>OAuth Apps and create new app:**

- Application name: next-auth-github
- Homepage URL: http://localhost:3000
- Authorization callback URL: http://localhost:3000/api/auth

**A new app needs to be created for a production callback URL**

**Get GITHUB_ID and GITHUB_SECRET and add to .env file**

**Add the following files from the repository linked below:**

- pages/api/auth/[...nextauth].ts
- pages/api/auth/secret.ts
- pages/\_app.tsx (add Provider)
- pages/index.tsx

**Re-start dev:**

```
Ctl-C
npm run dev
```

**Should work now**

**Done**

### Settings are from:

**Building with Next.js and Prisma: Passwordless Authentication with next-auth**

https://www.youtube.com/watch?v=GPBD3acOx_M&t=430s

https://github.com/hexrcs/prisma-next-auth
