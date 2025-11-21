# How do I reproduce this issue

```sh
git clone git@github.com:david-guevara-gorillalogic/gql-tada-turbo-multiple-schemas.git
cd gql-tada-turbo-multiple-schemas
npm install
npx gql.tada generate turbo
```

After this you can check if `graphql/pokemon-cache.d.ts` and `graphql/countries-cache.d.ts` have multiple `introspection` imports.
