import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /*  CSS RESET */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    scroll-behavior: smooth;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  /*  CSS RESET */

  * {
    margin: 0;
    padding: 0;
  }

  body {
    width: 100%;
    -webkit-font-smoothing: antialiased !important;
  }

  *,
  body,
  input,
  button,
  textarea,
  select {
    font-family: 'Clan Pro', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance:none;
    appearance: none;
  }

  [disabled] {
    pointer-events: none;
  }
`;

const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

const customHeightMediaQuery = (minHeight: number) =>
  `@media (height: ${minHeight}px)`;

export const media = {
  bigDesktop: customMediaQuery(2560),
  desktop: customMediaQuery(1920),
  smallDesktop: customMediaQuery(1600),
  notebook: customMediaQuery(1440),
  smallNotebook: customMediaQuery(1366),
  tablet: customMediaQuery(1024),
  smallTablet: customMediaQuery(768),
  mobile: customMediaQuery(576),
  iPhoneX: customHeightMediaQuery(812),
  smallMobile: customMediaQuery(365),
  miniMobile: customMediaQuery(320),
};

export const scale = {
  125: '@media (min-resolution: 120dpi)',
  150: '@media (min-resolution: 144dpi)',
};
