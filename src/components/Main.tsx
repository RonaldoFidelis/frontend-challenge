import React from "react";
import styled, { keyframes } from "styled-components";
import { useFetch } from "../hooks/useFetch";
import { CardProductInMain } from "./CardProductInMain";

export function Main() {
  const { data, isLoading, error } = useFetch();

  if (isLoading) {
    return <SkeletonLoader />;
  }

  if (error) {
    console.log(error);
  }

  return (
    <Wrapper>
      {data && <CardProductInMain data={data} />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const shimmer = keyframes` // Animação do gradiente
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const SkeletonLoader = styled.div`
  flex: 1;
  width: 100%;
  height: 300px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
`;
