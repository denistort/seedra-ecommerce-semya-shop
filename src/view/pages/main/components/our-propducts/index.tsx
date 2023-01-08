import { styled } from 'solid-styled-components';
import { Button } from '../../../../shared-components/ui';
import { Typography } from '../../../../shared-components/ui/Typography';
import Listok from '../../../../assets/svg/w/listok.svg';
import Bundles from '../../../../assets/svg/w/bundles.svg';
import Herbs from '../../../../assets/svg/w/herbs.svg';
import Vegetables from '../../../../assets/svg/w/vegetables.svg';
import Fruits from '../../../../assets/svg/w/fruits.svg';
import Supplies from '../../../../assets/svg/w/suplies.svg';
import Flowers from '../../../../assets/svg/w/Flower.svg';
import { For } from 'solid-js';
import { OurProductList } from '../our-product-list';

const OurProductWrapper = styled('section')`
  padding-bottom: 5rem;
`;
const Title = styled('div')`
  margin: 5rem 0;
  display: flex;
  justify-content: space-between;
`;

const CategoryItem = styled('button')`
  padding: 2.2rem;
  display: flex;
  gap: 1.2rem;
  align-items: center;
  border-radius: 8px;
  border: 2px solid ${(p) => p.theme?.colors.light_grey_stroke};
  background-color: transparent;
  cursor: pointer;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 178.19%;
  color: ${(p) => p.theme?.colors.text_primary};
  text-transform: capitalize;
`;
const CategoryItemsList = styled('div')`
  display: flex;
  justify-content: stretch;
  gap: 1.2rem;
  margin-bottom: 3.2rem;
  width: 100%;
  overflow: hidden;
`;

const categories = [
  { icon: Listok, name: 'ALL' },
  { icon: Bundles, name: 'BUNDLES' },
  { icon: Herbs, name: 'HERBS' },
  { icon: Vegetables, name: 'VEGETABLES' },
  { icon: Fruits, name: 'FRUITS' },
  { icon: Supplies, name: 'SUPPLIES' },
  { icon: Flowers, name: 'FLOWERS' },
];
export const OurProductSection = () => {
  return (
    <OurProductWrapper>
      <Title>
        <Typography as={'heading-two'}>Our products.</Typography>
        <Button apperance={'ghost'}>View all (12)</Button>
      </Title>
      <CategoryItemsList>
        <For each={categories}>
          {(cat) => (
            <CategoryItem>
              {cat.icon}
              <span>{cat.name}</span>
            </CategoryItem>
          )}
        </For>
      </CategoryItemsList>
      <OurProductList></OurProductList>
    </OurProductWrapper>
  );
};
