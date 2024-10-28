import LinkButton from "../ui/buttons/LinkButton";
import ToggleTheme from "../ui/ToggleSwitch";

export function Header() {
    return (
        <header class="py-4">
            <nav class="mx-auto flex h-[39px] w-full max-w-screen-2xl flex-row items-center justify-center gap-4 px-3 text-white transition-all duration-150 ease-in sm:h-[39.4px] sm:px-8">
                <LinkButton href="/" size="md" style="primary">
                    /
                </LinkButton>
                <LinkButton href="/404" size="md" style="primary">
                    /404
                </LinkButton>
                <ToggleTheme />
            </nav>
        </header>
    );
}
