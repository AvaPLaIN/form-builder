import styled from "styled-components";
import { handleGroupControlLayout } from "../group/Group.styles";

const MultiSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  position: relative;
  ${({ layout }) => handleGroupControlLayout(layout)}

  .multi-select-label {
    white-space: nowrap;
  }

  .multi-select {
    width: 100%;
  }

  .multi-select-error {
    white-space: nowrap;
  }
`;

export default MultiSelectContainer;
