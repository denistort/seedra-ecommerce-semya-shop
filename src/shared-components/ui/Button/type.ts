import { ComponentProps } from "solid-js";

export type Apperance = 'ghost' | 'primary' | 'icon' | 'text-with-icon'

export type ButtonProps = ComponentProps<'button'> & {
  apperance?: Apperance
}