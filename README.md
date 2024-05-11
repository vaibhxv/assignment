# Test-2


### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
git clone https://github.com/vaibhxv/test-2.git
```

### Run with yarn zero install

```shell
yarn dev
```

### Install packages

```shell
yarn install
```

### Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL=
```

### Setup Prisma

Add MySQL Database (PlanetScale)

```shell
npx prisma db push

```

### Start the app

```shell
yarn dev
```

## Available commands

Running commands with yarn `yarn [command]`

| command         | description                                   |
| :-------------- | :-------------------------------------------- |
| `dev`           | Starts a development instance of the app      |
| `prisma studio` | Start Prisma studio GUI to view/edit database |
| `lint`          | Run lint check                                |
| `build`         | Start building app for deployment             |
| `start`         | Run build version of app                      |
# assignment
# assignment
# assignment
