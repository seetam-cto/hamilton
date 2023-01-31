import { gql } from '@apollo/client';

export const GET_RATING = gql`
    query getRating($productName: String!){
        products(search:$productName){
            items{
                review_count
                rating_summary
            }
        }
    }
`;
