/* eslint-disable react/display-name */
import { forwardRef } from "react";
import styled from "styled-components";

export const StyledSectionBigHeading = styled(forwardRef((props, ref) => <h1 {...props} ref={ref} />))`
  font-family: Poppins;
  font-weight: 600;
  font-size: 3rem;
  line-height: 3.94rem;
`;

export const StyledSectionHeading = styled(forwardRef((props, ref) => <h2 {...props} ref={ref} />))`
  font-family: Poppins;
  font-size: 2.5rem;
  line-height: 3.8rem;
  font-weight: 600;

  @media screen and (max-width: 480px) {
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
`;

export const StyledSectionSubheading = styled(forwardRef((props, ref) => <h3 {...props} ref={ref} />))`
  font-family: Poppins;
  font-size: 1.25rem;
  line-height: 1.3rem;
  font-weight: 300;

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const StyledSectionInnerHeading = styled(forwardRef((props, ref) => <h4 {...props} ref={ref} />))`
  font-family: Poppins;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 300;
`;

export const StyledSectionTinyHeading = styled(forwardRef((props, ref) => <h5 {...props} ref={ref} />))`
  font-family: Poppins;
  font-size: 1.2rem;
  line-height: 1.125rem;
  font-weight: 600;

  @media screen and (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

export const StyledSectionParagraph = styled((props) => <p {...props} />)`
  font-family: Poppins;
  font-size: 0.9rem;
  line-height: 1.2rem;
  font-weight: 500;

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
