/**
 * Contains GraphQL query to get data.
 */

import { gql } from "@apollo/client";


export const GET_ALL_ACTIVITIES_QUERY = gql`
  query getAllActivities {
    activities {
      title
      id
      currency
      price
      rating
      specialOffer
      supplierId
      supplier {
        id
        name
        address
        zip
        city
        country
      }
    }
  }
`;
