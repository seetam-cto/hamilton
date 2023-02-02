import { gql } from '@apollo/client';

export const FETCH_NEW_LAUNCHES = gql`
query GETPRODUCTS($search: String) {
    products(search: $search) {
      items {
        name
        sku
        uid
        brand
        __typename
        only_x_left_in_stock
        description {
          html
        }
        short_description {
          html
        }
        meta_description
        rating_summary
        media_gallery {
          label
          position
          url
        }
        product_links {
          link_type
          linked_product_sku
          linked_product_type
        }
        price_range {
          maximum_price {
            final_price {
              currency
              value
            }
          }
        }
      }
    }
  }
`