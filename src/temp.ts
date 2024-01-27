import { css } from "@emotion/css";

export const tempii = css`
  svg {
    height: 50px;
    width: 50px;
  }
  width: 80%;
  border-radius: 15px;
  background: #f3f3f3;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 15%;
  margin-top: 2%;
`;

export const board = css`
  height: 670px;
  width: 672px;
  background: white;
  border: 1px solid black;
  position: absolute;
  right: 320px;
  top: 2%;
  padding-inline: 5% 10%;
`;

export const keyboardframe = css`
  background: grey;
  height: 27%;
  margin-top: 2%;
  width: 110%;
`;

export const gridbox = css`
  background: red;

  height: 50%;
  width: 110%;
  margin-top: 5%;
`;