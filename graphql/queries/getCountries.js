import { gql } from "@apollo/client";
import client from "../apollo-client";

const getCountries = async () => {

  const { data : { countries } } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  });

  return countries
}

export default getCountries
