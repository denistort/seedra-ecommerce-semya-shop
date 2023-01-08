import { Component, createSignal, splitProps } from 'solid-js';
import { styled } from 'solid-styled-components';

import SearchIcon from '@assets/svg/SearchIcon.svg';

import c from './style.module.css';
import { SearchInputProps } from './types';


const Button = styled('button')`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  border: none;
  padding: 0;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
const SearchWrapper = styled('div')`
  padding: 1.2rem 2rem;
  border: 1px solid ${(props) => props.theme?.colors.light_grey_stroke};
  border-radius: 71px;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  margin: 0 1.3rem;
  transition: all 0.3s ease;
  width: 28.5rem;
`;
const Input = styled('input')`
  border: none;
  height: 100%;
  font-family: 'Lexend';
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 178.19%;
  outline: none;
`;

export const SearchInput: Component<SearchInputProps> = (props) => {
  const [_, rest] = splitProps(props, []);
  const [isFocused, setIsFocused] = createSignal(false);

  return (
    <label for="search-input">
      <SearchWrapper classList={{ [c.focused]: isFocused() }}>
        <Button>
          <SearchIcon />
        </Button>
        <Input
          type="text"
          placeholder="Search"
          onFocusIn={() => setIsFocused(true)}
          onFocusOut={() => setIsFocused(false)}
          {...rest}
          id={'search-input'}
        />
      </SearchWrapper>
    </label>
  );
};
