import { Component, ComponentProps, splitProps } from 'solid-js';
import { styled } from 'solid-styled-components';
import { A } from '@solidjs/router';

//LOGOS SVG
import SeedraLogo from '../../assets/svg/SeedraLogo.svg';
import InstaLogo from '../../assets/svg/ant-design_instagram-filled.svg';
import FacebookLogo from '../../assets/svg/akar-icons_facebook-fill.svg';
import CartLogo from '../../assets/svg/icon_cart_simpleicon.svg';
import FavorLogo from '../../assets/svg/Outlineicon.svg';

import { Container, SearchInput } from '../ui';

import c from './style.module.css';

const HeaderWrapper = styled('header')`
  width: 100%;
  height: 7.2rem;
  box-shadow: ${(props) => props.theme?.boxShadow};
  display: flex;
`;
const HeaderInnerWrapper = styled('div')`
  display: grid;
  grid-template-columns: 1fr auto auto 1fr auto;
  width: 100%;
  align-items: center;
  height: 100%;
  width: 100%;
`;
const HeaderNav = styled('ul')`
  padding: 0;
  list-style-type: none;
  display: flex;
  font-size: 1.4rem;
  text-transform: capitalize;
  color: ${(props) => props.theme?.colors.text_secondary};
  font-family: 'Lexend';
  font-weight: 400;
  line-height: 178.19%;
  margin: 0;

  li:not(:first-child):not(:last-child) {
    padding: 0 1.6rem;
  }

  li:not(:first-child) {
    border-left: 1px solid ${(props) => props.theme?.colors.light_grey_stroke};
  }

  li:first-child {
    padding-right: 1.6rem;
  }
  li:last-child {
    padding-left: 1.6rem;
  }
`;

const HeaderLogos = styled('div')`
  display: flex;
  gap: 8px;
  justify-self: flex-end;
  margin-left: 4.5rem;
`;

const HeaderCartAndFavoritesWrapper = styled('div')`
  display: flex;
  gap: 2.4rem;
  justify-self: flex-end;
`;
export type HeaderProps = ComponentProps<'header'>;

export const Header: Component<HeaderProps> = (props) => {
  const [_, rest] = splitProps(props, []);
  return (
    <HeaderWrapper {...rest}>
      <Container>
        <HeaderInnerWrapper>
          <A href="/">
            <SeedraLogo />
          </A>
          <nav>
            <HeaderNav>
              <li>
                <A href="/all-products" activeClass={c.activeClass}>
                  ALL PRODUCTS
                </A>
              </li>
              <li>
                <A href="/about" activeClass={c.activeClass}>
                  ABOUT SEEDRA
                </A>
              </li>
              <li>
                <A href="/blog" activeClass={c.activeClass}>
                  OUR BLOG
                </A>
              </li>
              <li>
                <A href="/contacts" activeClass={c.activeClass}>
                  CONTACTS
                </A>
              </li>
            </HeaderNav>
          </nav>
          <HeaderLogos>
            <FacebookLogo />
            <InstaLogo />
          </HeaderLogos>
          <SearchInput></SearchInput>

          <HeaderCartAndFavoritesWrapper>
            <FavorLogo />
            <CartLogo />
          </HeaderCartAndFavoritesWrapper>
        </HeaderInnerWrapper>
      </Container>
    </HeaderWrapper>
  );
};
