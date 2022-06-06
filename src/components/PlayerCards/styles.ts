import styled from "styled-components";

interface ContainerCardProps {
  readonly color: boolean;
}

export const ContainerPlayerCards = styled.div`
  height: 200px;
  width: 1500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlusNumber = styled.h1`
  color: #fff;
  font-size: 3rem;
`;
