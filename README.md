# Coding Exercise

## Installation

```bash
yarn
```

## Instructions

Using the [Star Wars API](https://swapi.dev/documentation), create an autocomplete component that allows a user to find and select a Planet from the Star Wars universe. You can use any library you’d like, and any styling methodology/library that suits you (css, scss, css-in-js, Styled Components, etc).

### Acceptance Criteria

- The autocomplete list should open upon focus and close upon blur.
- The component should allow the user to type in a partial or full planet name to query the Star Wars API and display the filtered results.
- At least 2 letters are required before searching begins.
- The user must be able to select a planet from the list.
- As the user types, the request to fetch planets should be debounced.
- Unnecessary requests (ie: once already made) should be cached.
- The user should be able to tell when planets are being fetched.

**This exercise is more about seeing how YOU think and code.**

🎉 Good luck!

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
