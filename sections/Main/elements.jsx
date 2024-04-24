import styled from "styled-components";

import { Card } from "../../collections/Card/Card";
import { SectionContainer, SectionHeading, SectionSubheading } from "~/components";

export const StyledCardArticle = styled((props) => <Card {...props} variant="contained" color="main" />)`
  margin-top: 1.375rem;
  padding-top: 0;
  padding-bottom: 0;
`;

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  align-items: center;
  margin-top: 40px;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 100%;
  text-align: center;
  font-family: sans-serif;
`;

export const StyledTitle = styled((props) => <SectionHeading {...props} />)`
  margin: 0;
  color: black;
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
  margin: 0;
`;

export const StyledContentContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  margin-top: 40px;
  
  background-color: red;
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  width: 400px;
  heigt: 500px;
  img {
    object-fit: contain;
  }
`;

export const StyledCardContentContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
