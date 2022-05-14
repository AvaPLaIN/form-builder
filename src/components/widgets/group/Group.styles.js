import styled, { css } from "styled-components";

// * Dynamic Layout for Group Sub Controls
const controlGridLayout = css`
  grid-column-start: ${({ layout }) => layout.columnStart};
  grid-column-end: ${({ layout }) => layout.columnEnd};
  grid-row-start: ${({ layout }) => layout.rowStart};
  grid-row-end: ${({ layout }) => layout.rowEnd};
`;

const controlFlexLayout = css`
  flex: 1;
`;

export const handleGroupControlLayout = (layout) => {
  switch (layout?.display) {
    case "grid":
      return controlGridLayout;
    case "flex":
      return controlFlexLayout;
    default:
      return null;
  }
};

// * Dynamic Layout for Group
const gridLayout = css`
  display: grid;
  grid-template-columns: repeat(${({ layout }) => layout.columns}, 1fr);
  grid-template-rows: auto;
  gap: 0.5rem;
`;

const flexLayout = css`
  display: flex;
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

const GroupContainer = styled.div`
  margin: 1rem 0;
  position: relative;

  .group-header {
    display: flex;
    align-items: center;

    .group-label {
      font-size: 1.5rem;
      font-weight: bold;
      padding: 0.5rem;
    }
  }

  .group-items {
    padding-left: 2rem;
    overflow: hidden;
    ${handleLayout};
    max-height: ${({ isGroupOpen }) => (isGroupOpen ? "100%" : "0")};
  }

  &::before {
    content: "";
    position: absolute;
    top: 22px;
    left: -33px;
    width: 32px;
    height: 1px;
    background-color: black;
  }

  &::after {
    content: "";
    position: absolute;
    top: 22px;
    left: -1px;
    width: 1px;
    height: calc(100% - 22px);
    background-color: black;
  }
`;

export default GroupContainer;
