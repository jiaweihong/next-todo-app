This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Key Concepts Learned

### Frontend

1. React CreateContext creates an object that can be used to manage a value / state that is changed but doesn't cause a rerender. A context object is wrapped around a component and a value is provided to the Context through the Provider. Components that have been wrapped, can call useContext to access said value.
2. In Next.js, standard env variables are only available in the node js environment. If the browser needs to the environment variables, they need to be prefixed with "NEXT_PUBLIC\_...".

### Backend

1. NoSQL It is non relational database meaning that there are no tables involved, so no predefined schema so you can store different types of data structures in the same collection. A document is basic unit of data, it is JSON like data structure meaning that it can be as simple or complex as needed. A collection is a grouping of documents which is similar to a table (in an SQL manner)
2. Firebase is a suite of cloud based services provided to help app development. Provides realtime (NoSQL) database, meaning it can store and sync data in real time. Provides authentication methods to handle user related functions.
