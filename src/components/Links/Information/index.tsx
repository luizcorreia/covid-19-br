import React, { FC } from 'react';

import Img, { FluidObject } from 'gatsby-image';

import Button from '~/components/Button';

import { Container, ImageContainer } from './styles';

interface Props {
  data: {
    id: number;
    title: string;
    description: string;
    url: string;
    fluid: FluidObject;
  };
}

const Link: FC<Props> = ({ data }) => (
  <Container>
    <ImageContainer>
      <Img fluid={data.fluid} style={{ padding: '1rem', maxHeight: 'calc(50vh - 4rem)' }}
   imgStyle={{ objectFit: 'contain' }} />
    </ImageContainer>

    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <Button href={data.url} secondary external>
        Acesse
      </Button>
    </div>
  </Container>
);

export default Link;
