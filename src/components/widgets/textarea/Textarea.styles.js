import styled from "styled-components";
import { handleGroupControlLayout } from "../group/Group.styles";

const TextareaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  position: relative;
  ${({ layout }) => handleGroupControlLayout(layout)}

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
