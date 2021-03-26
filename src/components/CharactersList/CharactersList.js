import React from "react";
import {
  CharacterWrapper,
  CharactersListWrapper,
  NameWrapper,
  NameTitle,
  NameSubTitle,
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

function CharactersList() {
  const [search] = React.useContext(SearchContext);
  const { status, data, error, isFetching, isIdle } = useCharacters(search, 1);
  if (isIdle) return null;
  if (isFetching) return <Loading />;
  if (status === "error") return <h1>{error.message}</h1>;
  return (
    <CharactersListWrapper>
      {data.results.map((index, { image, name, type }) => (
        <CharacterCard
          image={image}
          name={name}
          type={type}
          key={`card-${index}`}
        />
      ))}
    </CharactersListWrapper>
  );
}

export default CharactersList;
