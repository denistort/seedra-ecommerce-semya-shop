import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';
import { Button } from '../../../../shared-components/ui';
import { Typography } from '../../../../shared-components/ui/Typography';
import Bg from '../../../../assets/img/intro_background.png';
import Seed from '../../../../assets/img/seed.png';
import Fire from '../../../../assets/svg/w/ant-design_fire-filled.svg';

const SectionWrapper = styled('section')`
  padding: 4.8rem 7.6rem;
  background-image: url(${Bg});
  border-radius: 2.4rem;
  display: flex;
  position: relative;
  min-height: 44.5rem;
`;

const Image = styled('img')`
  position: absolute;
  right: 0;
`;
const FirstPart = styled('div')`
  width: 70%;
  display: flex;
  flex-direction: column;
`;
const ButtonsBlock = styled('div')`
  display: flex;
  gap: 1.2rem;
`;
const PriceBlock = styled('div')`
  margin-bottom: 2.5rem;
  display: flex;
  gap: 2.1rem;
  align-items: center;
`;
const NewPrice = styled('div')`
  font-weight: 600;
  font-size: 4.2rem;
  line-height: 5.4rem;
  color: ${(p) => p.theme?.colors.text_primary};
`;
const OldPrice = styled('div')`
  text-decoration: line-through;
  font-weight: 600;
  font-size: 2.2rem;
  line-height: 5.2rem;
  color: ${(p) => p.theme?.colors.text_secondary};
`;
export const IntroSection: Component = () => {
  return (
    <SectionWrapper>
      <FirstPart>
        <Typography as={'heading-one'}>
          SEEDRA Basil Seeds for Indoor and Outdoor Planting
        </Typography>
        <Typography as={'light-16'} style={{ width: '86%' }}>
          Be sure of our quality - the freshest batches of this season. Non-GMO,
          Heirloom - our seeds were tested and have the best germination
          ratings. Your easy growing experience is our guarantee
        </Typography>
        <PriceBlock>
          <Fire />
          <NewPrice>$12.56</NewPrice>
          <OldPrice>$15.22</OldPrice>
        </PriceBlock>
        <ButtonsBlock>
          <Button apperance={'primary'}>Add to card</Button>
          <Button apperance={'ghost'}>Discover</Button>
        </ButtonsBlock>
      </FirstPart>
      <div>
        <Image src={Seed} alt="wewe" />
      </div>
    </SectionWrapper>
  );
};
