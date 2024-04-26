// Styled elements for the Card go here
import styled from "styled-components";


export const StyledCard = styled(({ ...props }) => <article {...props} />)`
  display: flex;
  width: 360px;
  height: 110px;
  background-color: rgb(249 249 249);
  border-radius: 12px;
  @media screen and (max-width: 480px) {
    width: 280px;
    height: 110px;
  }
`;
