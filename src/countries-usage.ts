import { graphql } from "../graphql/countries";

export const getCountriesQuery = graphql(`
  query getCountries {
    countries {
      name
      capital
    }
  }
`);
