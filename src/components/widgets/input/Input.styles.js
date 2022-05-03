import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2rem;
  position: relative;
  /* border: 1px solid blue; */

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
