import styled from "styled-components";

const Button = styled.button`
  border: none;
  /* Gray Main */

  background: #BFBFBF;
  /* Button Framing */
  box-shadow: inset -1px -1px 0px #000000, inset 1px 1px 0px #FFFFFF, inset -2px -2px 0px #808080, inset 2px 2px 0px #DBDBDB;

  &:active:not(:disabled) {
    background: #BFBFBF;
    box-shadow: inset -1px -1px 0px #FFFFFF, inset 1px 1px 0px #818181, inset -2px -2px 0px #DBDBDB, inset 2px 2px 0px #000000;
  }

  &:focus {
    outline:0;
  }
`;

export default Button;