import styled from "styled-components";
import { media } from "../../../styles/media";

const SIZE = "24px";

export const BurgerStyled = styled.button`
  width: ${SIZE};
  height: ${SIZE};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: transparent;
  border: none;
  cursor: pointer;

  div {
    width: ${SIZE};
    height: 1.7px;
    background: ${props => props.theme.color.primary};
    border-radius: ${props => props.theme.borderRadius.small};

    transition: all 0.2s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ isOpened }) =>
        isOpened ? "rotate(45deg)" : "rotate(0)"};
    }

    :nth-child(2) {
      opacity: ${({ isOpened }) => (isOpened ? "0" : "1")};
    }

    :nth-child(3) {
      transform: ${({ isOpened }) =>
        isOpened ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
  /* Media queries */
  ${media.xlarge`
    display: none;
  `}
`;
