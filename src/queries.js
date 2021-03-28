import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { request, gql } from "graphql-request";

const endpoint = "https://rickandmortyapi.com/graphql";

const queryClient = new QueryClient();

export const QueryProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export function useCharacters(search = { name: "" }, page) {
  return useQuery(
    ["characters", page, search],
    async () => {
      const { characters } = await request(
        endpoint,
        gql`
          query characters($page: Int, $filter: FilterCharacter) {
            characters(page: $page, filter: $filter) {
              info {
                count
                pages
                next
                prev
              }
              results {
                id
                name
                type
                image
                status
                created
                species
                gender
                episode {
                  air_date
                }
                location {
                  name
                  type
                  dimension
                  residents {
                    name
                  }
                }

                origin {
                  name
                  type
                  dimension
                  residents {
                    name
                  }
                }
              }
            }
          }
        `,
        { page: page, filter: { name: search } }
      );
      return characters;
    },
    { staleTime: 1000 * 60, enabled: !!search }
  );
}

// export function useCharacter(search = { name: "" }, page) {
//   return useQuery(
//     ["character", page, search],
//     async () => {
//       const { character } = await request(
//         endpoint,
//         gql`
//           query character($id: Int) {
//             character(page: $page, filter: $filter) {

//               results {
//                 name
//                 type
//                 image
//                 status
//                 created
//               }
//             }
//           }
//         `,
//         { page: page, filter: { name: search } }
//       );
//       return character;
//     },
//     { staleTime: 1000 * 60, enabled: !!search }
//   );
// }
