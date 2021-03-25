import React from "react";
import { CharacterWrapper, CharactersListWrapper } from "./styles";
import { SearchContext } from "../../context";
import { useCharacters } from "../../queries";

export function CharacterCard({ type, name, image }) {
  return (
    <CharacterWrapper>
      <img src={image} alt={name} />
      <span>{name}</span>
      <span>{type}</span>
    </CharacterWrapper>
  );
}

function CharactersList() {
  const [search] = React.useContext(SearchContext);
  const { status, data, error, isFetching } = useCharacters(search, 1);
  if (isFetching) return <h1>Loading</h1>;
  if (status === "error") return <h1>{error.message}</h1>;
  return (
    <CharactersListWrapper>
      {data.results.map(({ image, name, type }) => (
        <CharacterCard
          image={image}
          name={name}
          type={type}
          key={`card-${name}`}
        />
      ))}
    </CharactersListWrapper>
  );
}

export default CharactersList;
