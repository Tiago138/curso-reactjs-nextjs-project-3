import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    margin: a auto;
    padding: ${theme.spacings.large};
  `}
`;
