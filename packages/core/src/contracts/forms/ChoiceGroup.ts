export interface ChoiceGroupProps {
  modelValue?:
    | string
    | number
    | Array<string | number>
    | null;
  multiple?: boolean;
  disabled?: boolean;
}
export interface ChoiceGroupContext {
  multiple: boolean;
  disabled: boolean;
  isSelected: (value: string | number) => boolean;
  toggleChoice: (value: string | number) => void;
}