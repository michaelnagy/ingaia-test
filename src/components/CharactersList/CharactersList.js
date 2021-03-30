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
import { CharacterContext } from "../../context";

export function CharacterCard(props) {
  const [, setCharacter] = React.useContext(CharacterContext);

  const {
    character: { image, name, type },
  } = props;
  return (
    <CharacterWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={() => setCharacter(props)}
      tabIndex={0}
    >
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
        {data.results.map((character, index) => (
          <CharacterCard character={character} key={`card-${index}`} />
        ))}
      </CharactersListWrapper>
      <Pagination info={data.info} setPage={setPage} page={page} />
    </CharactersListContainer>
  );
}

export default CharactersList;
