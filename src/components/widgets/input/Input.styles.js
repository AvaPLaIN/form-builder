import styled from "styled-components";
import { handleGroupControlLayout } from "../group/Group.styles";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  position: relative;
  ${({ layout }) => handleGroupControlLayout(layout)}

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
