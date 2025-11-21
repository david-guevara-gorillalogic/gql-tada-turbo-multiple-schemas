import { graphql } from "../graphql/pokemon";

export const getPokemonQuery = graphql(`
  query getPokemon {
    pokemon {
      id
      name
    }
  }
`);
