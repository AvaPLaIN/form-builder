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
  gap: 1rem;
  align-items: center;
  margin-left: 2rem;
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

  &::before {
    content: "";
    position: absolute;
    top: 10px;
    left: -33px;
    width: 30px;
    height: 1px;
    background-color: black;
  }
`;

export default InputContainer;
