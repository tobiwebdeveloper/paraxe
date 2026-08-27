import type { InputProps } from "@paraxe/core";
export type InputComponentProps = InputProps & {
  onModelValueChange?: (value: string) => void;
};
export function Input({
  type = "text",
  placeholder = "",
  modelValue = "",
  required = false,
  disabled = false,
  readonly = false,
  error = false,
  success = false,
  onModelValueChange,
}: InputComponentProps) {
  return (
    <input
      className={`input${error ? " input-error" : ""}${success ? " input-success" : ""}`}
      type={type}
      placeholder={placeholder}
      value={modelValue}
      required={required}
      disabled={disabled}
      readOnly={readonly}
      onInput={(event) => onModelValueChange?.(event.currentTarget.value)}
    />
  );
}
