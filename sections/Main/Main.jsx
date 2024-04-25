import Image from "next/image";

import {
  StyledCardArticle,
  StyledCardContentContainer,
  StyledContainer,
  StyledContentContainer,
  StyledDescription,
  StyledImageContainer,
  StyledTextContainer,
  StyledTitle,
  StyledCardImageContainer,
  StyledCardArticleWrapper,
  StyledTinyHeading,
  StyledParagraph,
} from "./elements";

export const Main = ({ image, title, description, imageBg, imagesCard, ...props }) => {
  // TODO: Keep in mind for mobile-version!

  return (
    <StyledContainer {...props}>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>

      <StyledContentContainer>

        <StyledImageContainer>
          <Image layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height} />
        </StyledImageContainer>

        <StyledCardContentContainer>

          <StyledCardArticle>
            <StyledCardImageContainer>
              <Image layout="responsive" src={imagesCard.one.src} alt={image.alt} width={image.width} height={image.height} />
            </StyledCardImageContainer>

            <StyledCardArticleWrapper>
              <StyledTinyHeading>Brief</StyledTinyHeading>
              <StyledParagraph>
                Complete <span>brief writing or<br/> simple guidance</span> on what to include, we've got you covered.
              </StyledParagraph>
            </StyledCardArticleWrapper>
          </StyledCardArticle>

          <StyledCardArticle>
            <StyledCardImageContainer>
              <Image layout="responsive" src={imagesCard.two.src} alt={image.alt} width={image.width} height={image.height} />
            </StyledCardImageContainer>

            <StyledCardArticleWrapper>
              <StyledTinyHeading>Search</StyledTinyHeading>
              <StyledParagraph>
                In-depth agency search covering; <span>criteria matching,</span> door knocking and due-dilligence vetting.
              </StyledParagraph>
            </StyledCardArticleWrapper>
          </StyledCardArticle>

          <StyledCardArticle>
            <StyledCardImageContainer>
              <Image layout="responsive" src={imagesCard.three.src} alt={image.alt} width={image.width} height={image.height} />
            </StyledCardImageContainer>

            <StyledCardArticleWrapper>
              <StyledTinyHeading>Pitch</StyledTinyHeading>
              <StyledParagraph>
                Complete <span>brief writing or simple guidance</span> on what to include, we've got you covered.
              </StyledParagraph>
            </StyledCardArticleWrapper>
          </StyledCardArticle>
        </StyledCardContentContainer>

      </StyledContentContainer>

    </StyledContainer>
  );
};