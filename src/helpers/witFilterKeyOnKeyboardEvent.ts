import { KeyBoardEventWithTarger } from 'solid-js';

export const WithFilterKeyOnKeyboeardEvent = <T extends HTMLElement>(
  key: string,
  handler: Function
) => {
  return (e: KeyBoardEventWithTarger<T>) => {
    if (e.key !== key) return;
    handler(e);
  };
};
