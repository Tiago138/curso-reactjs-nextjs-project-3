import styled, { css } from 'styled-components';

const containerBackgroundActivate = (theme) => css`
  color: ${theme.colors.white};
  background: ${theme.colors.primaryColor};
`;

export const Container = styled.div`
  ${({ theme, background }) => css`
    display: flex;
    align-items: center;
    min-height: 100vh;

    color: ${theme.colors.primaryColor};
    background: ${theme.colors.white};

    ${background && containerBackgroundActivate(theme)};
  `}
`;
