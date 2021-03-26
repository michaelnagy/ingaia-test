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
                name
                type
                image
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
