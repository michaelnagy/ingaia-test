import React from "react";
import { LoadingWrapper, LoadingCard, LoadingContent } from "./styles";
import image from "../../assets/loading-bg.jpeg";

export function Loading() {
  return (
    <LoadingWrapper>
      <LoadingContent>
        <LoadingCard>
          <img src={image} alt="Loading" />
        </LoadingCard>
        <span>Loading</span>
      </LoadingContent>
    </LoadingWrapper>
  );
}

export default Loading;
