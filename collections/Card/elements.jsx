// Styled elements for the Card go here
import styled from "styled-components";


export const StyledCard = styled(({ ...props }) => <article {...props} />)`
  width: 400px;
  height: 110px;
  background-color: rgb(237, 237, 237);
  border-radius: 12px;
`;
