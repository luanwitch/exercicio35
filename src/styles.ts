import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  corVermelha: '#E66767',
  corClara: '#FFEBD9',
  corBranca: '#FFFFFF',
  corFooter: '#FFEBD9',
  corYellow: '#FFFF00',
  corRed2: '#8A0808'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}

body {
  background-color: ${cores.corClara};
  color: ${cores.corVermelha};
}

img {
  max-width: 100%; /* Garantir que todas as imagens se ajustem ao tamanho do contêiner */
  height: auto; /* Manter a proporção das imagens */
  display: block; /* Evitar espaçamento indesejado abaixo da imagem */
}

@media (max-width: ${breakpoints.tablet}) {
  body {
    font-size: 14px; /* Ajustar o tamanho da fonte em telas menores */
  }
}
`

export const Container = styled.div`
  max-width: ${breakpoints.desktop};
  width: 100%;
  margin: 0 auto;
`
