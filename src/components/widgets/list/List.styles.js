import styled from "styled-components";

export const ListWrapper = styled.div`
  max-height: ${({ isListOpen }) => (isListOpen ? "100%" : "0")};
  overflow: hidden;
`;
