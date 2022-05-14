import styled from "styled-components";
import { handleGroupControlLayout } from "../group/Group.styles";

const UrlInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  position: relative;
  ${({ layout }) => handleGroupControlLayout(layout)}

  .input-label {
    white-space: nowrap;
  }

  .input-wrapper {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;

    .url-input {
      width: 100%;
    }

    .url-input-control-icons {
      position: absolute;
      right: 0;
      display: flex;
      align-items: center;

      a {
        cursor: pointer;
        color: black;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      button {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .input-error {
    white-space: nowrap;
  }
`;

export default UrlInputContainer;
