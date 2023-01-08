import { Component, createEffect, createSignal, For, on } from 'solid-js';
import { styled } from 'solid-styled-components';

import { WithFilterKeyOnKeyboeardEvent } from '@helpers/witFilterKeyOnKeyboardEvent';
import { DeliveryTypeMenuProps } from './types';
import c from './style.module.css';


const MenuWrapper = styled('div')`
  position: relative;
  width: 28.6rem;
`;
const Block = styled('div')`
  padding: 0.9rem 2.2rem;
  border: 1px solid ${(p) => p.theme?.colors.light_grey_stroke};
  border-radius: 71px;
  background-color: ${(p) => p.theme?.colors.white};
  width: 28.6rem;
  z-index: 2;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  user-select: none;
`;
const Title = styled('h5')`
  font-family: 'Lexend';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 178.19%;
  margin: 0;
  color: ${(p) => p.theme?.colors.text_secondary};
`;

const Arrow = styled('div')`
  position: absolute;
  right: 2.2rem;
  top: calc(50% - 24px / 2);
  display: flex;
  padding: 0;
`;

const Variant = styled('p')`
  font-family: 'Lexend';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 156%;
  letter-spacing: -0.04em;
`;

const DropDownMenu = styled('div')`
  border: 1px solid ${(p) => p.theme?.colors.light_grey_stroke};
  border-radius: 0px 0px 25px 25px;
  position: absolute;
  width: 28.6rem;
  z-index: 1;
  transition: all 0.1s cubic-bezier(0.47, 0, 0.745, 0.715);
  left: 0;
  top: 30px;
  display: flex;
  gap: 0.6rem;
  flex-direction: column;
  overflow: hidden;
  background-color: ${(p) => p.theme?.colors.white};
`;
const DropDownMenuItem = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: calc(1.7rem / 2) 2.2rem calc(1.7rem / 2) 2.2rem;

  &:hover {
    background-color: ${(p) => p.theme?.colors.light_green};
  }
  &:first-child {
    margin-top: 5rem;
  }
`;

export const DeliveryTypeMenu: Component<DeliveryTypeMenuProps> = (props) => {
  const [isOpen, setIsOpen] = createSignal(false);
  const [isHoverOrClicked, setIsHoverOrClicked] = createSignal(false);
  const [currentItem, setCurrentItem] = createSignal('Delivery Example');

  createEffect(
    on(currentItem, () => {
      if (props.onChange) {
        props.onChange(currentItem());
      }
    })
  );

  const onKeyPressHandler = () => {
    setIsOpen(!isOpen());
  };

  return (
    <MenuWrapper>
      <Block
        onMouseEnter={() => setIsHoverOrClicked(true)}
        onMouseLeave={() => setIsHoverOrClicked(false)}
        onClick={() => setIsOpen(!isOpen())}
        classList={{ [c.shadow]: isOpen() || isHoverOrClicked() }}
        tabIndex={0}
        onkeypress={WithFilterKeyOnKeyboeardEvent('Enter', onKeyPressHandler)}
      >
        <Title>Type of delievery</Title>
        <Variant>{currentItem()}</Variant>
        <Arrow classList={{ [c.rotate]: isOpen() }}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 10L12 15L17 10"
              stroke="#70737C"
              style={{ transition: 'all .3s ease' }}
              classList={{ [c.green]: isOpen() || isHoverOrClicked() }}
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Arrow>
      </Block>
      <DropDownMenu classList={{ [c.open]: isOpen(), [c.closed]: !isOpen() }}>
        <For each={props.variants}>
          {(item) => (
            <DropDownMenuItem
              tabIndex={0}
              onKeyPress={WithFilterKeyOnKeyboeardEvent('Enter', () => {
                setCurrentItem(item.name);
                setIsOpen(false);
              })}
              onClick={() => {
                setIsOpen(false);
                setCurrentItem(item.name);
              }}
            >
              <Variant>{item.name}</Variant>
              <Variant class={c.green}>+${item.price}</Variant>
            </DropDownMenuItem>
          )}
        </For>
      </DropDownMenu>
    </MenuWrapper>
  );
};
