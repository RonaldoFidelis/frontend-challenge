import styled from "styled-components";

type Props = {
  width: number | string;
  height: number | string;
  borderRadius?: number;
};

export function Skeleton({ width, height, borderRadius }: Props) {
  return <Shimmer style={{ width, height, borderRadius }}></Shimmer>;
}

const Shimmer = styled.div`
  background-image: linear-gradient(
    -90deg,
    #FCFAF7 0%,
    #F4F2F0 25%,
    #FCFAF7 50%,
    #F4F2F0 75%,
    #FCFAF7 100%
  );

  background-size: 400% 100%;
  animation: shimmer 2s linear infinite;

  @keyframes shimmer {
    0% {
      background-position: 100% 0;
    }
    100% {
      background-position: -100% 0;
    }
  }
`;
