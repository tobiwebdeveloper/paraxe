export interface InputProps {
  type?:
    | "text"
    | "email"
    | "password"
    | "number"
    | "tel"
    | "url"
    | "search"
    | "date"
    | "time"
    | "datetime-local"
    | "month"
    | "week";
  placeholder?: string;
  modelValue?: string;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  error?: boolean;
  success?: boolean;
}