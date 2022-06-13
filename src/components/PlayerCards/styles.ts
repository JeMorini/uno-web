import styled from "styled-components";

interface PerfilContainerProps {
  readonly player: number;
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

export const PerfilContainer = styled.div<PerfilContainerProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  ${(props) =>
    props.player === 2
      ? `
  left: 10px;
  `
      : `
  right: 10px;
  `}
  align-items: center;
  justify-content: center;
`;

export const PerfilTitle = styled.h1`
  font-size: 32px;
  color: #fff;
`;
