import styled from "styled-components";

const ListContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 10px;
    left: -33px;
    width: 30px;
    height: 1px;
    background-color: black;
  }

  .list-controls {
    display: flex;
    gap: 0.5rem;

    .list-label {
      cursor: pointer;
      border: none;
      background-color: transparent;
    }
  }

  .list-wrapper {
    overflow: hidden;
    max-height: ${({ isListOpen }) => (isListOpen ? "100%" : "0")};
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export default ListContainer;
