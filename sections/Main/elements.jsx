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
  margin-top: 50px;
  @media screen and (max-width: 1024px) {
    margin-top: 0;
  }
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
  gap: 50px;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  width: 420px;
  heigt: 520px;

  img {
    object-fit: contain;
    object-position: right;
  }

  background-image: url("/img/background.png");
  background-size: cover;
  background-position: -40px;
  
  @media screen and (max-width: 1024px) {
    width: 320px;
    heigt: 420px;
    position: relative;
    left: -20px;
  }
  
  @media screen and (max-width: 480px) {
    width: 260px;
    heigt: 360px;
    position: relative;
    left: -10px;
    background-position: -30px;
  }

`;

export const StyledCardContentContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  width: 50%;

  article:nth-child(2n) {
    width: 380px;
    background-color: rgb(244 244 244);

    @media screen and (max-width: 480px) {
      width: 300px;
      height: 110px;
    }
  }
  article:nth-child(3n) {
    width: 400px;
    background-color: rgb(241 241 241);
    border: 2px solid dodgerblue;

    h5 {
      color: dodgerblue;
      text-decoration: underline;
    }

    @media screen and (max-width: 480px) {
      width: 320px;
      height: 110px;
    }
  }
`;

export const StyledCardImageContainer = styled(({ ...props }) => <div {...props} />)`
  width: 30%;
  img {
    object-fit: cover;
    border-radius: 12px;
  }
  @media screen and (max-width: 480px) {
    margin: 15px 0 0 0;
  }
`;

export const StyledCardArticleWrapper = styled(({ ...props }) => <div {...props} />)`
  position: relative;
  width: 80%;
  height: auto;
  border-radius: 12px;
`;
export const StyledTinyHeading = styled((props) => <SectionTinyHeading {...props} />)`
  margin: 10px 0 0 10px;
  @media screen and (max-width: 480px) {
    margin: 10px 0 0 0;
  }
`;

export const StyledParagraph = styled((props) => <SectionParagraph {...props} />)`
  margin: 10px 0 0 10px;
  span {
    font-weight: 700;
  }

  @media screen and (max-width: 480px) {
    margin: 0 0 0 0;
  }
`;

export const StyledSpanText = styled((props) => <span {...props} />)`
  position: absolute;
  display: none;
  top: 10px;
  right: -73px;
  color: red;
  font-weight: 600;
  transform: rotate(10deg);
  
  @media screen and (max-width: 1024px) {
    display: block;
  }
  @media screen and (max-width: 389px) {
    font-size: 0.8rem;
    right: -50px;
  }
`;