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

const TextareaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  position: relative;
  ${handleLayout};

  .textarea-label {
    white-space: nowrap;
  }

  .textarea {
    width: 100%;
    resize: vertical;
  }

  .textarea-error {
    white-space: nowrap;
  }
`;

export default TextareaContainer;
