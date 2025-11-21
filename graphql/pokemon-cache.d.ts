/* eslint-disable */
/* prettier-ignore */
import type { TadaDocumentNode, $tada } from 'gql.tada';
import type { introspection } from "./countries-env.d";
import type { introspection } from "./pokemon-env.d";

declare module 'gql.tada' {
 interface setupCache {
    "\n  query getPokemon {\n    pokemon {\n      id\n      name\n    }\n  }\n":
      TadaDocumentNode<{ pokemon: { id: number; name: string; }[]; }, {}, void>;
  }
}
