import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';
import Product1Pic from '../../../../assets/img/products/image 1.png';
import Star from '../../../../assets/svg/w/star.svg';
import HalfStar from '../../../../assets/svg/w/star-half-alt.svg';
import CardSimple from '../../../../assets/svg/w/icon_cart_simple.svg';
import CardWithNotification from '../../../../assets/svg/w/icon_cart_notification.svg';

import { Button } from '../../../../shared-components/ui';

const ProductCart = styled('div')`
  position: relative;
  padding: 2.8rem;
  border: 2px solid ${(p) => p.theme?.colors.light_grey_stroke};
  border-radius: 8px;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.25);
  }
`;
const Image = styled('img')`
  max-width: 100%;
  object-fit: cover;
`;
const LikeBlock = styled('div')`
  padding: 8px;
  border: 1px solid ${(p) => p.theme?.colors.light_grey_stroke};
  position: absolute;
  border-radius: 100px;
  cursor: pointer;
  display: flex;
  top: 1.2rem;
  right: 1.2rem;
`;
const CartTitle = styled('h4')`
  font-size: 1.6rem;
  line-height: 2.5rem;
  letter-spacing: -0.04em;
  color: ${(p) => p.theme?.colors.text_primary};
  margin-bottom: 0.8rem;
`;

const CardRatingWrapper = styled('div')`
  display: flex;
  gap: 1.3rem;
  margin-top: 2.4rem;
  margin-bottom: 0.5rem;
`;
const Rating = styled('div')`
  display: flex;
`;
const Span = styled('span')`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 178.19%;
  color: ${(p) => p.theme?.colors.text_secondary};
`;

const PriceBlock = styled('div')`
  display: flex;
  justify-content: space-between;
`;
const PriceSpan = styled('span')`
  font-weight: 600;
  font-size: 2.8rem;
  line-height: 5.4rem;
  color: ${(p) => p.theme?.colors.text_primary};
`;

export const ProductCartComponent: Component = () => {
  return (
    <ProductCart>
      <Image src={Product1Pic} alt="wew" />
      <LikeBlock>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#FFCF55"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.6573 5.80092C18.6273 4.78233 17.2619 4.16064 15.8078 4.04815C14.3538 3.93566 12.9068 4.33979 11.7284 5.18754C10.4921 4.28054 8.9533 3.86926 7.42187 4.03652C5.89044 4.20379 4.48014 4.93718 3.47497 6.08901C2.46981 7.24083 1.94444 8.72554 2.00466 10.2441C2.06488 11.7627 2.70623 13.2024 3.79954 14.2733L9.83364 20.2346C10.3389 20.7251 11.0195 21 11.7284 21C12.4374 21 13.1179 20.7251 13.6232 20.2346L19.6573 14.2733C20.7918 13.1474 21.4286 11.6245 21.4286 10.0371C21.4286 8.44971 20.7918 6.9268 19.6573 5.80092ZM18.2872 12.9507L12.2531 18.9024C12.1845 18.9708 12.1027 19.0251 12.0127 19.0621C11.9226 19.0992 11.826 19.1183 11.7284 19.1183C11.6308 19.1183 11.5342 19.0992 11.4442 19.0621C11.3541 19.0251 11.2724 18.9708 11.2037 18.9024L5.1696 12.9219C4.40757 12.1536 3.98086 11.1215 3.98086 10.0467C3.98086 8.97186 4.40757 7.93977 5.1696 7.17145C5.94612 6.41525 6.99341 5.99123 8.08463 5.99123C9.17584 5.99123 10.2231 6.41525 10.9997 7.17145C11.09 7.26128 11.1975 7.33258 11.3159 7.38124C11.4343 7.4299 11.5613 7.45495 11.6895 7.45495C11.8178 7.45495 11.9448 7.4299 12.0632 7.38124C12.1816 7.33258 12.2891 7.26128 12.3794 7.17145C13.156 6.41525 14.2032 5.99123 15.2945 5.99123C16.3857 5.99123 17.433 6.41525 18.2095 7.17145C18.982 7.9297 19.4227 8.9562 19.4372 10.0311C19.4518 11.1059 19.039 12.1436 18.2872 12.9219V12.9507Z" />
        </svg>
      </LikeBlock>
      <CardRatingWrapper>
        <Rating>
          <Star />
          <Star />
          <Star />
          <Star />
          <HalfStar />
        </Rating>
        <Span>(123)</Span>
      </CardRatingWrapper>
      <CartTitle>
        Seedra Cilantro Seeds for Planting Indoor and Outdoor
      </CartTitle>
      <PriceBlock>
        <PriceSpan>$12.56</PriceSpan>
        <Button apperance={'icon'}>
          <CardSimple />
        </Button>
      </PriceBlock>
    </ProductCart>
  );
};
