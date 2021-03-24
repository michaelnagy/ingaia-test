/* eslint-disable jsx-a11y/anchor-is-valid */
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { request, gql } from "graphql-request";

const endpoint = "https://rickandmortyapi.com/graphql";

const queryClient = new QueryClient();

export const QueryProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export function useCharacters(search, page) {
  return useQuery(["characters", page, search], async () => {
    const {
      posts: { data },
    } = await request(
      endpoint,
      gql`
        query{
            characters(page: ${page}, filter: ${search}) {
      info {
        count
        pages
        next
        prev
      }
      results {
        name
        type
      }
    }
        }
    
  
      `
    );
    return data;
  });
}

// const { status, data, error, isFetching } = usePosts();
