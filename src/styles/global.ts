import { css } from '@emotion/react';

export const global = css`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  html,
  body,
  #root {
    height: 100%;
    font-size: 14px;
  }

  #__next {
    height: 100%;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  ul,
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    outline: none;
    color: inherit;
  }
`;
