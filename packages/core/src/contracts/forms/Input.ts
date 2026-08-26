export type InputType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "date"
  | "search"
  | "url"
  | "tel";

export interface InputProps {
  type?: InputType;
  placeholder?: string;
  modelValue?: string;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  error?: boolean;
  success?: boolean;
}

export interface InputEmits {
  "update:modelValue": (
    value: string,
  ) => void;
}