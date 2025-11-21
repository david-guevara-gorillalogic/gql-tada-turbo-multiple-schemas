/* eslint-disable */
/* prettier-ignore */
import type { TadaDocumentNode, $tada } from 'gql.tada';
import type { introspection } from "./countries-env.d";
import type { introspection } from "./pokemon-env.d";

declare module 'gql.tada' {
 interface setupCache {
    "\n  query getCountries {\n    countries {\n      name\n      capital\n    }\n  }\n":
      TadaDocumentNode<{ countries: { name: string; capital: string | null; }[]; }, {}, void>;
  }
}
