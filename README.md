# 💿 remix ⤫ 🎈 partykit ⤫ ⚡️ vite

This template leverages [Remix SPA Mode](https://remix.run/docs/en/main/future/spa-mode) to build your app as a Single-Page Application using [Client Data](https://remix.run/docs/en/main/guides/client-data) for all of you data loads and mutations. This is then deployed on to [PartyKit](https://partykit.io), for multiplayer/real-time support.

⚠️ This is built on top of the Remix Vite template. Remix support for Vite is currently unstable and not recommended for production.

📖 See the [Remix Vite docs][remix-vite-docs] for details on supported features.

## Setup

```shellscript
npx create-remix@latest --template partykit/remix-vite-starter
```

## Development

You will be running two processes during development:

- The Remix development server (powered by Vite)
- The PartyKit server

Both are started with one command:

```shellscript
npm run dev
```

If you want to check the production build, you can stop the dev server and run following commands:

```sh
npm run build
npm start
```

Then refresh the same URL in your browser (no live reload for production builds).

## Deployment

```sh
npm run deploy
```

If you don't already have a PartyKit account, you'll be prompted to create one during the deploy process.

[remix-vite-docs]: https://remix.run/docs/en/main/future/vite
