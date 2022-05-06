import styled, { css } from "styled-components";

const gridLayout = css`
  display: grid;
  grid-template-columns: repeat(${({ layout }) => layout.columns}, 1fr);
  grid-template-rows: auto;
  gap: 1rem;
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
  margin: 1rem 0 1rem 2rem;
  position: relative;
  /* border: 1px solid red; */

  .group-label {
    font-size: 1.5rem;
    font-weight: bold;
    padding: 0.5rem;
  }

  .group-items {
    ${handleLayout};
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
