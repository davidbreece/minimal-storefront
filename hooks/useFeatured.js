import { useQuery, gql } from '@apollo/client';

const GET_FEATURED_PRODUCTS = gql`
  query getFeaturedProducts {
    collection(channel: "default-channel", slug: "featured-products") {
      products(first: 50) {
        edges {
          node {
            name
            description
            slug
            pricing {
              priceRange {
                stop {
                  net {
                    amount
                  }
                }
              }
            }
            media {
              url
            }
          }
        }
      }
    }
  }
`;

export const useFeatured = () => {
  const { error, data, loading } = useQuery(GET_FEATURED_PRODUCTS);

  return {
    error,
    data,
    loading,
  };
};
