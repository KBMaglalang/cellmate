This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# PRISMA Setup and Usage

1. run `npm i` or `npm install` to install the new packages added to package.json (prisma and @prisma/client)
2. start up vagrant
3. copy `.env.example` to `.env` and fill in the details - look at the
4. set the 'datbase name' in `.env` to be 'cellmate'
5. run `npx prisma init`
6. run `npx prisma migrate dev`
7. run `npm run seed` to populate the datbase with default user information
8. can run the prisma studio `npx prisma studio` to see the database and confirm the default test users are in the User table

# Stripe Update and Changes

1. there are changes on the stipe shipping rates and may need to be updated in the stripe.js file

# AUTH0 Setup and Usage

1. run `npm i` or `npm install` to install the new packages added to package.json (prisma and @prisma/client)
2. follow along the readme file here: https://github.com/auth0/nextjs-auth0
3. populate the AUTH0 env settings file in the `.env.example` file and put it in your `.env` file
4. default environment variables can be provided
