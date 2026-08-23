export type InputType =
| "text" | "email"
| "password" | "number"
| "date" | "search" | "url"
| "tel";

export interface InputProps {
    type: InputType
    placeholder?: string
    value?: string
    required?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    error?: boolean;
    success?: boolean;
}

export interface InputEvents {
input: (value: string) => void;
change: (value: string) => void;
}

export interface InputContract {
    props: InputProps;
    events: InputEvents;
}