import type { FormFieldProps } from "@paraxe/core";
import type { ReactNode } from "react";
import { Label } from "../typography/Label";
import { Text } from "../typography/Text";
export function FormField({
  id,
  label,
  description,
  error,
  required = false,
  optional = false,
  disabled = false,
  children,
}: FormFieldProps & { children?: ReactNode }) {
  return (
    <div className="form-field">
      {label ? (
        <Label
          for={id}
          required={required}
          optional={optional}
          disabled={disabled}
        >
          {label}
        </Label>
      ) : null}
      {children}
      {description && !error ? <Text tone="muted">{description}</Text> : null}
      {error ? <Text tone="accent">{error}</Text> : null}
    </div>
  );
}
