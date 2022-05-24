import styled from "styled-components";

const FormBuilderContainer = styled.div`
  margin: 1rem;
  border-left: 1px solid black;

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const StateContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export { FormBuilderContainer, StateContainer };
