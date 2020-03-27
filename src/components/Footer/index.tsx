import React, { FC } from 'react';

import { Container } from './styles';

const Footer: FC = () => (
  <Container>
    <p>Desenvolvido por Luiz Correia</p>
    <a
      href="https://github.com/luizcorreia/covid-19-br"
      rel="noopener noreferrer"
      target="_blank"
    >
      Saiba mais
    </a>
  </Container>
);

export default Footer;
