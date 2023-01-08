import type { Component, JSX } from 'solid-js';

declare module 'solid-js' {
  export type ComponentWithChildren<P = {}> = Component<
    P & { children?: JSX.Element }
  >;

  export type KeyBoardEventWithTarger<T extends HTMLElement> = KeyboardEvent & {
    currentTarget: T;
    target: Element;
  };
}
