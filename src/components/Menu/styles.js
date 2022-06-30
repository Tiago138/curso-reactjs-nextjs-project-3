import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';
import { Title as Heading } from '../Heading/styles';

const menuVisible = (theme) => css`
  visibility: visible;
  opacity: 1;
`;

export const Container = styled.div`
  ${({ theme, visible }) => css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    background-color: ${theme.colors.white};
    border-bottom: ${theme.colors.mediumGray};

    transition-duration: 300ms;
    transition-timing-function: ease-in-out;
    transition-property: visibility opacity;

    z-index: 5;

    > ${SectionContainer} {
      padding-block: 0;
    }

    & ${Heading} {
      margin-block: 0;
    }

    @media ${theme.media.lteMedium} {
      height: 100vh;

      visibility: hidden;
      opacity: 0;
      ${visible && menuVisible(theme)}

      > ${SectionContainer} {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        align-items: center;
        height: 100vh;

        overflow-y: auto;
      }

      & ${Heading} {
        display: flex;
        justify-content: center;

        padding-bottom: ${theme.spacings.large};
      }
    }
  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${theme.media.lteMedium} {
      display: block;
      text-align: center;
      padding: ${theme.spacings.xxlarge} 0;
    }
  `}
`;

export const Button = styled.button`
  ${({ theme, visible }) => css`
    position: fixed;
    top: 2rem;
    right: 2rem;

    display: none;
    width: 4rem;
    height: 4rem;

    color: ${theme.colors.white};

    background-color: ${theme.colors.primaryColor};
    border: none;

    pointer-events: ${visible ? 'none' : 'all'};
    z-index: 6;

    @media ${theme.media.lteMedium} {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    > svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  `}
`;
