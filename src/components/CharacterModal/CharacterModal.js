import React from "react";
import {
  FixedWrapper,
  CharactersPageContainer,
  CharacterPageCard,
  CharacterInfo,
  InformationBlock,
  InformationTitle,
  InformationH2,
  InformationH3,
  InformationSmall,
  About,
  CharacterWrapper,
  NameWrapper,
  NameTitle,
  NameSubTitle,
} from "./styles";
import { CharacterContext } from "../../context";

const isEmpty = (obj) =>
  obj && Object.keys(obj).length === 0 && obj.constructor === Object;

export function CharacterModalCard({ name, image, type }) {
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

function CharacterModal() {
  //   const [page, setPage] = React.useState(1);
  const [character] = React.useContext(CharacterContext);
  //   const { status, data, error, isFetching, isIdle } = useCharacters(
  //     search,
  //     page
  //   );
  //   if (isIdle) return null;
  //   if (isFetching) return <Loading />;
  //   if (status === "error") return <h1>{error.message}</h1>;
  if (isEmpty(character)) return null;

  return (
    <FixedWrapper>
      <CharactersPageContainer>
        <CharacterPageCard>
          <CharacterModalCard {...character.character} />
        </CharacterPageCard>
        <CharacterInfo>
          <InformationBlock>
            <InformationTitle data-testid="info-block">ABOUT</InformationTitle>
            <About>
              {character.character.name} is a {character.character.gender}{" "}
              {character.character.species}. He is {character.character.status}.
              Last seen in&nbsp;
              {
                character.character.episode[
                  character.character.episode.length - 1
                ]["air_date"]
              }
              .
            </About>
          </InformationBlock>
          <InformationBlock>
            <InformationTitle data-testid="info-block">ORIGIN</InformationTitle>
            <InformationSmall>Planet</InformationSmall>
            <InformationH2>{character.character.origin.name}</InformationH2>
            <InformationH3>
              {character.character.origin.dimension}
            </InformationH3>
            <InformationSmall>
              {character.character.origin.residents.length} residents
            </InformationSmall>
          </InformationBlock>
          <InformationBlock>
            <InformationTitle data-testid="info-block">
              LOCATION
            </InformationTitle>
            <InformationSmall>Planet</InformationSmall>
            <InformationH2>{character.character.location.name}</InformationH2>
            <InformationH3>
              {character.character.location.dimension}
            </InformationH3>
            <InformationSmall>
              {character.character.location.residents.length} residents
            </InformationSmall>
          </InformationBlock>
        </CharacterInfo>
      </CharactersPageContainer>
    </FixedWrapper>
  );
}

export default CharacterModal;
