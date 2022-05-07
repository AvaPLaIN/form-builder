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

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  position: relative;
  ${handleLayout};

  .input-label {
    white-space: nowrap;
  }

  .input {
    width: 100%;
  }

  .input-error {
    white-space: nowrap;
  }
`;

export default InputContainer;
