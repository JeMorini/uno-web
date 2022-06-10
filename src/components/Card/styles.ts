import styled from "styled-components";

interface ContainerCardProps {
  readonly color: string;
  readonly skin: any;
}

interface CircleProps {
  readonly skin: any;
  readonly color: string;
}

interface LogoProps {
  readonly skin: any;
}

export const ContainerCard = styled.div<ContainerCardProps>`
  ${(props) =>
    props.skin === "default"
      ? `
      height: 10.625rem;
      width: 7.5rem;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${props.color};
      margin: 1rem;
      border-width: 0.3rem;
      border-style: solid;
      border-color: #fff;
      border-radius: 8px;
      box-shadow: 10px 5px 20px black;
      `
      : `
      height: 10.625rem;
      width: 7.5rem;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${props.color};
      margin: 1rem;
      border-width: 0.3rem;
      border-style: solid;
      border-color: #000;
      border-radius: 8px;
      box-shadow: 10px 5px 20px black;
      `}
`;

export const Circle = styled.div<CircleProps>`
  ${(props) =>
    props.skin === "default"
      ? `
    height: 170px;
    width: 95px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props.color};
    border-radius: 50%;
    transform: rotate(30deg);
  `
      : `
  height: 110px;
    width: 87px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
    border-width: 2px;
    border-style: solid;
    border-color: red;
    border-radius: 50%;
    transform: rotate(30deg);
  `}
`;

export const Logo = styled.h1<LogoProps>`
  ${(props) =>
    props.skin === "default"
      ? `
      text-shadow: 4px 4px 4px #000000;
      transform: rotate(-40deg);
      font-size: 3rem;
      font-weight: bold;
      background: -webkit-linear-gradient(#f6ea00, #fff);
      -webkit-background-clip: text;
      color: white;
      `
      : `
      text-shadow: 4px 4px 4px #000000;
      transform: rotate(-40deg);
      font-size: 3rem;
      font-weight: normal;
      background: -webkit-linear-gradient(#f6ea00, #fff);
      -webkit-background-clip: text;
      color: #F1DE67;`}
`;

export const Number = styled.h1`
  color: ${(props) => props.color};
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
