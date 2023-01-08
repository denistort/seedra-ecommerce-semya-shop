import { A } from '@solidjs/router';
import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';
import { Container } from '../ui';
import SeedraLogo from '../../assets/svg/SeedraLogo.svg';

import c from './style.module.css';
import { Divider } from '../ui/Divider';

const FooterNav = styled('ul')`
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
  li {
    padding: 0;
  }
  li a {
    display: flex;
    align-items: center;
  }
  li:not(:first-child):not(:last-child) {
    padding: 0 calc(1.6rem * 2);
  }

  li:not(:first-child) {
    border-left: 1px solid ${(props) => props.theme?.colors.light_grey_stroke};
  }

  li:first-child {
    padding-right: calc(1.6rem * 2);
  }
  li:last-child {
    padding-left: calc(1.6rem * 2);
  }
`;
const InnerWrapper = styled('div')`
  display: grid;
  grid-template-columns: auto calc(12.5rem + 7rem * 2) 1fr;
`;
export const Footer: Component = () => {
  return (
    <footer class={c.footer}>
      <Container>
        <InnerWrapper>
          <FooterNav>
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
          </FooterNav>
          <A
            href="/"
            style={{
              display: 'flex',
              'justify-items': 'center',
              'justify-content': 'space-around',
            }}
          >
            <svg
              width="125"
              height="27"
              viewBox="0 0 125 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_9_559)">
                <path
                  d="M0 23.4949L3.01639 20.1386C4.52597 21.8168 6.57105 22.3767 8.78385 22.3767C11.5333 22.3767 13.009 21.2205 13.009 19.0947C13.009 18.1615 12.7746 17.3785 12.2718 16.8566C11.8016 16.3727 11.265 16.1116 10.1585 15.9248L7.27542 15.4773C5.23035 15.1418 3.72077 14.4334 2.6484 13.2772C1.5082 12.0083 0.938787 10.2924 0.938787 8.05567C0.938787 3.31858 4.09015 0 9.25382 0C12.5388 0 14.9205 0.895153 16.9655 3.0955L14.0142 6.33949C12.506 4.73567 10.6953 4.51259 9.11885 4.51259C6.63772 4.51259 5.43061 6.04205 5.43061 7.86894C5.43061 8.5396 5.63226 9.24826 6.13499 9.7702C6.60519 10.2558 7.37625 10.6653 8.34757 10.8157L11.1653 11.2633C13.3437 11.5987 14.7186 12.2694 15.724 13.3133C16.9994 14.6562 17.5689 16.5953 17.5689 18.9457C17.5689 24.0912 13.7131 27 8.71694 27C5.09561 27 2.34616 26.1426 0 23.4949Z"
                  fill="#359740"
                />
                <path
                  d="M21.9616 26.7769V0.223145H37.6858V4.84809H26.6211V11.0769H36.044V15.7002H26.6211V22.152H37.6858V26.7769H21.9616Z"
                  fill="#359740"
                />
                <path
                  d="M42.2474 26.7769V0.223145H57.9716V4.84809H46.9069V11.0769H56.3298V15.7002H46.9069V22.152H57.9716V26.7769H42.2474Z"
                  fill="#359740"
                />
                <path
                  d="M97.3037 26.7769L92.6425 16.1857H89.2895V26.7769H84.63V0.223145H93.9846C98.8458 0.223145 101.729 3.91635 101.729 8.35316C101.729 12.0827 99.6837 14.3952 97.3703 15.3284L102.702 26.7769H97.3037ZM93.6821 4.84809H89.2895V11.8599H93.6821C95.7272 11.8599 97.0693 10.4048 97.0693 8.35316C97.0693 6.30319 95.7272 4.84809 93.6821 4.84809Z"
                  fill="#359740"
                />
                <path
                  d="M120.137 26.7769L118.73 22.0776H110.247L108.804 26.7769H103.943L112.627 0.223145H116.281L125 26.7769H120.137ZM114.572 8.05572L111.554 17.7152H117.489L114.572 8.05572Z"
                  fill="#359740"
                />
                <path
                  d="M77.4537 2.76012C75.8773 1.00758 73.6305 0.223145 71.1494 0.223145H62.5333V26.7769H67.7574C69.557 21.6204 72.2808 15.9948 70.4243 7.66008C72.8976 16.3517 70.4513 21.8753 68.7248 26.7769H71.1494C73.6305 26.7769 75.8773 25.9939 77.4535 24.2414C80.1363 21.2568 79.8677 17.3783 79.8677 13.3877C79.868 9.39845 80.1365 5.74325 77.4537 2.76012ZM70.2619 23.6401C71.5991 20.3034 73.0046 14.9511 71.0048 8.38951C73.6808 11.7338 74.0952 16.6758 73.5281 18.9304C78.3713 13.5166 73.3938 7.19126 68.4277 4.49612C71.5942 10.4204 71.1167 16.0023 68.6579 22.7178C60.9331 17.3198 70.1038 10.4428 67.5048 3.0415C78.7231 7.83996 80.723 18.6309 70.2619 23.6401Z"
                  fill="#359740"
                />
              </g>
              <defs>
                <clipPath id="clip0_9_559">
                  <rect width="125" height="27" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </A>

          <FooterNav>
            <li>
              <A href="/all-products" activeClass={c.activeClass}>
                Terms&Conditions
              </A>
            </li>
            <li>
              <A href="/about" activeClass={c.activeClass}>
                Privacy Policy
              </A>
            </li>
          </FooterNav>
        </InnerWrapper>
        <Divider></Divider>
      </Container>
    </footer>
  );
};
