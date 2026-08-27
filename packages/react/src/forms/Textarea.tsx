import type { TextareaProps } from "@paraxe/core";
export type TextareaComponentProps = TextareaProps & {
  onModelValueChange?: (value: string) => void;
};
export function Textarea({
  modelValue = "",
  disabled = false,
  readonly = false,
  error = false,
  success = false,
  maxlength,
  onModelValueChange,
}: TextareaComponentProps) {
  return (
    <textarea
      className={`textarea${error ? " input-error" : ""}${success ? " input-success" : ""}`}
      value={modelValue}
      disabled={disabled}
      readOnly={readonly}
      maxLength={maxlength}
      onInput={(event) => onModelValueChange?.(event.currentTarget.value)}
    />
  );
}
