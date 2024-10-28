import clsx from "clsx";
import { sizes, styles, commonClasses } from "./buttonStyles";
import type { ComponentChildren } from "preact";

interface Props {
    children: ComponentChildren;
    onClick?: any;
    disabled?: boolean;
    size?: "md" | "lg";
    style?: "primary";
    title?: string;
    className?: string;
    ariaLabel?: string;
}

export default function Button({
    onClick,
    disabled = false,
    style = "primary",
    size = "md",
    className,
    children,
    title,
    ariaLabel,
}: Props) {
    return (
        <button
            aria-label={ariaLabel}
            title={title}
            type="button"
            onClick={onClick}
            disabled={disabled}
            class={clsx(sizes[size], styles[style], commonClasses, className)}>
            {children}
        </button>
    );
}
