import clsx from "clsx";
import { useTheme } from "./theme-provider";

export default function ToggleTheme() {
    const { theme, setTheme } = useTheme();

    return (
        <label class="relative inline-flex cursor-pointer items-center" aria-label="Toggle dark and light mode">
            <input
                type="checkbox"
                class="peer sr-only"
                checked={theme === "light"}
                onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-checked={theme === "light"}
                role="switch"
            />

            <div
                class={clsx(
                    "h-[27px] w-[54px] rounded-full bg-white p-2 transition-colors duration-200 ease-in-out peer-checked:bg-black"
                )}></div>
            <div
                class={clsx(
                    "absolute inset-y-0 left-1.5 m-auto flex h-[23px] w-[23px] transform items-center justify-center rounded-full bg-white transition-transform duration-200 ease-in-out peer-checked:translate-x-[19px] dark:bg-black"
                )}></div>
        </label>
    );
}
