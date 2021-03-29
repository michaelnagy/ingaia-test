import React from "react";
import { css } from "styled-components";
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
  CloseModal,
} from "./styles";
import Close from "../Icons/Close";
import People from "../Icons/People";
import { OnMobile } from "../../globalStyles";
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

const styled = css`
  left: 0px;
  position: absolute;
  top: -95px;
`;

function CharacterModal() {
  const [character, setCharacter] = React.useContext(CharacterContext);
  if (isEmpty(character)) return null;
  const episodeNumber = character.character.episode.length - 1;
  const episodeDate = character.character.episode[episodeNumber]["air_date"];

  return (
    <FixedWrapper
      key="modal"
      initial={{ height: 0 }}
      animate={{ height: "100vh" }}
      exit={{ height: 0 }}
    >
      <CharactersPageContainer>
        <CharacterPageCard>
          <OnMobile hide>
            <CloseModal onClick={() => setCharacter({})}>Close</CloseModal>
          </OnMobile>
          <OnMobile show styled={styled}>
            <Close onClick={() => setCharacter({})} />
          </OnMobile>
          <CharacterModalCard {...character.character} />
        </CharacterPageCard>
        <CharacterInfo>
          <InformationBlock>
            <InformationTitle data-testid="info-block">ABOUT</InformationTitle>
            <About>
              {character.character.name} is a {character.character.gender}{" "}
              {character.character.species}. He is {character.character.status}.
              Last seen in {episodeDate}.
            </About>
          </InformationBlock>
          <InformationBlock>
            <InformationTitle data-testid="info-block">ORIGIN</InformationTitle>
            <InformationSmall>Planet</InformationSmall>
            <InformationH2>{character.character.origin.name}</InformationH2>
            <InformationH3>
              {character.character.origin?.dimension}
            </InformationH3>
            <InformationSmall>
              <People /> {character.character.origin?.residents?.length}{" "}
              residents
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
              <People /> {character.character.location.residents.length}{" "}
              residents
            </InformationSmall>
          </InformationBlock>
        </CharacterInfo>
      </CharactersPageContainer>
    </FixedWrapper>
  );
}

export default CharacterModal;
