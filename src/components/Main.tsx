import { useFetch } from "../hooks/useFetch";
import { CardProductInMain } from "./CardProductInMain";

import styled from "styled-components";
import { Skeleton } from "./Skeleton";

export function Main() {
  const { data, isLoading, error } = useFetch();

  if (isLoading) {
    const quantityExpectedProducts: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
      <Wrapper>
        <WrapperCard>
          {quantityExpectedProducts.map((product) => (
            <Skeleton key={product} width={218} height={285} borderRadius={10}></Skeleton>
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
      {data && <CardProductInMain data={data} />}
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