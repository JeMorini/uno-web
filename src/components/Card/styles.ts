import styled from "styled-components";

interface ContainerCardProps {
  readonly color: boolean;
}

export const ContainerCard = styled.div`
  height: 200px;
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
  margin: 1rem;
`;
