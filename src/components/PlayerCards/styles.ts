import styled from "styled-components";

interface ContainerCardProps {
  readonly color: boolean;
}

export const ContainerPlayerCards = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
