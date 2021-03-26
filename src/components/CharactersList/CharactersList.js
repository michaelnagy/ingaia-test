import React from "react";
import {
  CharacterWrapper,
  CharactersListWrapper,
  CharactersListContainer,
  NameWrapper,
  NameTitle,
  NameSubTitle,
  PaginationWrapper,
  Page,
  PaginationList,
} from "./styles";
import Loading from "./Loading";
import { SearchContext } from "../../context";
import { useCharacters } from "../../queries";

export function CharacterCard({ type, name, image }) {
  return (
    <CharacterWrapper>
      <img src={image} alt={name} />
      <NameWrapper>
        <NameTitle>{name}</NameTitle>
        <NameSubTitle>{type}</NameSubTitle>
      </NameWrapper>
    </CharacterWrapper>
  );
}

function Pagination({ info, setPage, page }) {
  const numberOfPages = Array.from(Array(Math.floor(info.count / 20)).keys());
  return (
    <PaginationWrapper>
      <PaginationList>
        {numberOfPages.map((value) => {
          const isCurrentPage = value + 1 === page;
          return (
            <Page
              isCurrentPage={isCurrentPage}
              key={`page-${value}`}
              onClick={isCurrentPage ? null : () => setPage(value + 1)}
            >
              {value + 1}
            </Page>
          );
        })}
      </PaginationList>
    </PaginationWrapper>
  );
}

function CharactersList() {
  const [page, setPage] = React.useState(1);
  const [search] = React.useContext(SearchContext);
  const { status, data, error, isFetching, isIdle } = useCharacters(
    "morty",
    page
  );
  if (isIdle) return null;
  if (isFetching) return <Loading />;
  if (status === "error") return <h1>{error.message}</h1>;
  return (
    <CharactersListContainer>
      <CharactersListWrapper>
        {data.results.map(({ image, name, type }, index) => (
          <CharacterCard
            image={image}
            name={name}
            type={type}
            key={`card-${index}`}
          />
        ))}
      </CharactersListWrapper>
      <Pagination info={data.info} setPage={setPage} page={page} />
    </CharactersListContainer>
  );
}

export default CharactersList;
