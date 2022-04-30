import styled from "styled-components";

const GroupContainer = styled.div`
  margin: 1rem 0 1rem 2rem;
  position: relative;
  /* border: 1px solid red; */

  .group-label {
    font-size: 1.5rem;
    font-weight: bold;
    padding: 0.5rem;
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
