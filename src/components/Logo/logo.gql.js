import { gql } from '@apollo/client';

export const GET_LOGO = gql`
    query {
        storeConfig {
            store_code
            header_logo_src
        }
    }
`;