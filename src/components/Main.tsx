import { useFetch } from "../hooks/useFetch";
import { InMain } from "./CardProducts/InMain";

import styled from "styled-components";
import { Skeleton } from "./Skeleton";

export function Main() {
  const { data, isLoading, quantityProducts, error } = useFetch();

  if (isLoading) {
    return (
      <Wrapper>
        <WrapperCard>
          {Array.from({ length: quantityProducts }, (_, index) => (
            <Skeleton key={index + 1} width={218} height={285} borderRadius={10}></Skeleton>
          ))}
        </WrapperCard>
      </Wrapper>
    );
  }

  if (error) {
    console.log(error);
  }

  return (
    <Wrapper>
      {data && <InMain data={data} />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WrapperCard = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;