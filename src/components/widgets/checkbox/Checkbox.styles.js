import styled from "styled-components";
import { handleGroupControlLayout } from "../group/Group.styles";

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  position: relative;
  ${({ layout }) => handleGroupControlLayout(layout)}

  .checkbox-label {
    white-space: nowrap;
  }

  .checkbox-error {
    white-space: nowrap;
  }
`;

export default CheckboxContainer;
