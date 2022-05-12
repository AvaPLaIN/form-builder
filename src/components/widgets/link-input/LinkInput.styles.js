import styled, { css } from "styled-components";

const gridLayout = css`
  grid-column-start: ${({ layout }) => layout.columnStart};
  grid-column-end: ${({ layout }) => layout.columnEnd};
  grid-row-start: ${({ layout }) => layout.rowStart};
  grid-row-end: ${({ layout }) => layout.rowEnd};
`;

const flexLayout = css`
  flex: 1;
`;

const handleLayout = ({ layout }) => {
  switch (layout?.display) {
    case "grid":
      return gridLayout;
    case "flex":
      return flexLayout;
    default:
      return null;
  }
};

const LinkInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  position: relative;
  ${handleLayout};

  .input-label {
    white-space: nowrap;
  }

  .input-wrapper {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;

    .input {
      width: 100%;
    }

    .input-control-icons {
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

export default LinkInputContainer;
