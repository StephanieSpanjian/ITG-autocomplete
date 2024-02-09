# Coding Exercise

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

## Coding Exercise Response

### Questions/Comments/Assumptions

1. onBlur clearing the results, means you user cannot click on an item. Bad UX
2. As disccused during peer coding, use 'url' value in response for clickable link placeholder.

### Next Steps

1. Break up the components into smaller modular components for reusability.
2. Need to be able to exit the modal by clicking outside it.
3. Design needs a lot of work, but wanted to get functionality in place first.

### Installation

```bash
yarn
```

### Local Development

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
