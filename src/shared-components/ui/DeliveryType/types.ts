type VarianType = { name: string; price: number };

export type DeliveryTypeMenuProps = {
  onChange?: <T>(value: T) => void;
  variants: Array<VarianType>;
};