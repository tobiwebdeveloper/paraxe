export type ButtonVariant = 
| "primary"
| "secondary"
| "destructive"
| "ghost";

export type ButtonSize =
| "small"
| "medium"
| "large";

export type ButtonWidth =
| "auto"
| "full";

export type ButtonIconPosition =
| "leading"
| "trailing";

export interface ButtonProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    width?: ButtonWidth;
    // icon
    iconPosition?: ButtonIconPosition;
    // boolean
    disabled?: boolean;
    loading?: boolean; 
}

export interface ButtonEvents {
    activate: () => void;
}

export interface ButtonContract {
    props: ButtonProps;
    events: ButtonEvents;
}