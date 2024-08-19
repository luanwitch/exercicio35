import { createGlobalStyle } from 'styled-components'

export const cores = {
  corTexto: '#E66767',
  corFundo1: '#FFEBD9',
  corFundoL: ''
}
export const GlobalCss = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
}

body {
  background-color: ${cores.corFundo1};
  color: ${cores.corTexto};
}
`
