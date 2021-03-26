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
import Loading from "../Loading/Loading";
import { SearchContext } from "../../context";
import { useCharacters } from "../../queries";
import ArrowRight from "../Icons/ArrowRight";
import ArrowLeft from "../Icons/ArrowLeft";

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

export function Pagination({ info, setPage, page }) {
  const numberOfPages = Array.from(Array(Math.ceil(info.count / 20)).keys());
  return (
    <PaginationWrapper>
      <PaginationList>
        <ArrowLeft
          data-testid="arrow-left"
          onClick={() => setPage(page - 1)}
          stroke={info.prev ? "#fff" : "#909090"}
          prev={info.prev}
        />
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
        <ArrowRight
          data-testid="arrow-right"
          onClick={() => setPage(page + 1)}
          stroke={info.next ? "#fff" : "#909090"}
          next={info.next}
        />
      </PaginationList>
    </PaginationWrapper>
  );
}

function CharactersList() {
  const [page, setPage] = React.useState(1);
  const [search] = React.useContext(SearchContext);
  const { status, data, error, isFetching, isIdle } = useCharacters(
    search,
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
