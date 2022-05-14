import styled from "styled-components";
import { handleGroupControlLayout } from "../group/Group.styles";

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  position: relative;
  ${({ layout }) => handleGroupControlLayout(layout)}

  .select-label {
    white-space: nowrap;
  }

  .select {
    width: 100%;
  }

  .select-error {
    white-space: nowrap;
  }
`;

export default SelectContainer;
