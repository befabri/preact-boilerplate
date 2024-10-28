import clsx from "clsx";
import type { ComponentChildren } from "preact";
import { commonClasses, sizes, styles } from "./buttonStyles";

interface Props {
    children: ComponentChildren;
    href: string;
    size?: "md" | "lg";
    style?: "primary";
    className?: string;
}

export default function LinkButton({ href, style = "primary", size = "md", className, children }: Props) {
    return (
        <a href={href} class={clsx(sizes[size], styles[style], commonClasses, className)}>
            {children}
        </a>
    );
}
