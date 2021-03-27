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
// import Loading from "../../components/Loading/Loading";
// import { SearchContext } from "../../context";
// import { useCharacters } from "../../queries";

export function CharacterModalCard({ type, name, image }) {
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
  //   const [search] = React.useContext(SearchContext);
  //   const { status, data, error, isFetching, isIdle } = useCharacters(
  //     search,
  //     page
  //   );
  //   if (isIdle) return null;
  //   if (isFetching) return <Loading />;
  //   if (status === "error") return <h1>{error.message}</h1>;
  return (
    <FixedWrapper>
      <CharactersPageContainer>
        <CharacterPageCard>
          <CharacterModalCard
            image="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
            name="Morty"
            type="ET"
          />
        </CharacterPageCard>
        <CharacterInfo>
          <InformationBlock>
            <InformationTitle>ABOUT</InformationTitle>
            <About>
              Rick Sanchez is a male human. He is alive and well. Last seen in
              May 31, 2020.
            </About>
          </InformationBlock>
          <InformationBlock>
            <InformationTitle>ORIGIN</InformationTitle>
            <InformationSmall>Planet</InformationSmall>
            <InformationH2>Earth (Replacement Dimension)</InformationH2>
            <InformationH3>Replacement Dimension</InformationH3>
            <InformationSmall>54 residents</InformationSmall>
          </InformationBlock>
          <InformationBlock>
            <InformationTitle>LOCATION</InformationTitle>
            <InformationTitle>ORIGIN</InformationTitle>
            <InformationSmall>Planet</InformationSmall>
            <InformationH2>Earth (Replacement Dimension)</InformationH2>
            <InformationH3>Replacement Dimension</InformationH3>
            <InformationSmall>54 residents</InformationSmall>
          </InformationBlock>
        </CharacterInfo>
      </CharactersPageContainer>
    </FixedWrapper>
  );
}

export default CharacterModal;
