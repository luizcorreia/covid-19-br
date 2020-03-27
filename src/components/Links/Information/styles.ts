import styled from 'styled-components';
import Img from 'gatsby-image';

import media from '~/styles/media';

export const ImageContainer = styled.div`
   height: 100%;
   position: relative;
   border-radius: 10px;
   @media (max-width: ${media.smallTablet}) {
      max-width: 200px;
      max-height: 205px;
      border-radius: 10px;
      max-width: 90%;
      margin-bottom: 48px;
      border: 2px solid ${({ theme }) => theme.colors.active};
      background-color: #fff;
    
   }

   @media (max-width: ${media.phone}) {
  
      max-width: 100%;
    }
`;

export const Container = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;



  div:first-of-type {
    margin-top: 0 !important; 
    width: 100%;
    height: 100%;
    border-radius: 10px;

    max-width: 200px;
    max-height: 200px;
    align-items: baseline;
  }

  div:nth-of-type(2) {
    margin-left: 48px;

    h1 {
      font-size: 2.4rem;
      max-width: 658px;
    }

    p {
      font-size: 1.8rem;
      max-width: 800px;
      margin: 16px 0 64px;
    }
  }

  @media (max-width: ${media.smallTablet}) {
    flex-direction: column;



    div:nth-of-type(2) {
      margin-left: 0px;
      max-width: 90%;

      p {
        margin-bottom: 32px;
      }
    }
  }

  @media (max-width: ${media.phone}) {
    div:first-of-type,
    div:nth-of-type(2) {
      max-width: 100%;
    }
  }
`;
