import type { IconProps } from "@paraxe/core";
export function Icon({ name, size = "inherit", label }: IconProps) {
  return (
    <span
      className={`icon icon-${size}`}
      aria-hidden={label ? undefined : true}
      aria-label={label}
    >
      {name}
    </span>
  );
}
