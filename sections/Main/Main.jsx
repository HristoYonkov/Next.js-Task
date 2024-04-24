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
} from "./elements";

export const Main = ({ image, title, description, ...props }) => {
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
          <StyledCardArticle> </StyledCardArticle>
          <StyledCardArticle> </StyledCardArticle>
          <StyledCardArticle> </StyledCardArticle>
        </StyledCardContentContainer>
      </StyledContentContainer>

    </StyledContainer>
  );
};