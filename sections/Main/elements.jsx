import styled from "styled-components";

import { Card } from "../../collections/Card/Card";
import { SectionContainer, SectionHeading, SectionSubheading } from "~/components";
import { SectionTinyHeading } from "../../components/Typography/SectionTinyHeading";
import { SectionParagraph } from "../../components/Typography/SectionParagraph";

export const StyledCardArticle = styled((props) => <Card {...props} variant="contained" color="main" />)`
  margin-top: 1.375rem;
  padding-top: 0;
  padding-bottom: 0;
`;

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  align-items: center;
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
  // flex-direction: column;
  margin-top: 40px;
  gap: 50px;

  // display: flex;
  // flex-direction: column;
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  width: 420px;
  heigt: 520px;
  // position: relative;
  // left: -90px;
  img {
    object-fit: contain;
    object-position: right;
  }
  background-image: url("/img/background.png");
  background-size: cover;
  background-position: -40px;
`;

export const StyledCardContentContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  width: 50%;

  article:nth-child(2n) {
    width: 380px;
    background-color: rgb(244 244 244);
  }
  article:nth-child(3n) {
    width: 400px;
    background-color: rgb(241 241 241);
    border: 2px solid dodgerblue;

    h5 {
      color: dodgerblue;
      text-decoration: underline;
    }
  }
`;

export const StyledCardImageContainer = styled(({ ...props }) => <div {...props} />)`
  width: 100px;
  img {
    // width: 100%;
    object-fit: cover;
  }
`;

export const StyledCardArticleWrapper = styled(({ ...props }) => <div {...props} />)`
  width: 70%;
  height: auto;
  border-radius: 12px;
`;
export const StyledTinyHeading = styled((props) => <SectionTinyHeading {...props} />)`
  margin: 10px 0 0 10px;
`;

export const StyledParagraph = styled((props) => <SectionParagraph {...props} />)`
  margin: 10px 0 0 10px;
  span {
    font-weight: 700;
  }
`;
