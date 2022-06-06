import styled from "styled-components";

interface ContainerCardProps {
  readonly number: string;
  readonly color: boolean;
}

export const ContainerCard = styled.div`
  height: 10.625rem;
  width: 7.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.color === "yellow" ? "#F5D93D" : props.color};
  margin: 1rem;
  border-width: 0.3rem;
  border-style: solid;
  border-color: #fff;
  border-radius: 8px;
  box-shadow: 10px 5px 20px black;
`;

export const Circle = styled.div`
  height: 170px;
  width: 95px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  transform: rotate(30deg);
`;

export const Logo = styled.h1`
  /* color: #fff; */
  text-shadow: 4px 4px 4px #000000;
  transform: rotate(-40deg);
  font-size: 3rem;
  font-weight: bold;
  background: -webkit-linear-gradient(#f6ea00, #fff);
  -webkit-background-clip: text;
  /* -webkit-text-fill-color: transparent; */
  color: white;
`;

export const Number = styled.h1`
  color: ${(props) => (props.color === "yellow" ? "#F5D93D" : props.color)};
  text-shadow: 2px 2px 4px #000000;
  transform: rotate(-30deg);
  font-size: 4rem;
`;

export const MiniNumber = styled.p`
  text-shadow: 2px 2px 4px #000000;
  color: #fff;
  font-size: 1.8rem;
  font-weight: bold;
  ${(props) =>
    props.color === "top"
      ? `
margin-bottom: 140%;
margin-left: 4px;
  `
      : `
margin-top: 138%;
margin-right: 4px;
transform: rotate(-180deg);
      `}
`;
