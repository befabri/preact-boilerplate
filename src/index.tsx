import { render } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/_404";
import { Header } from "./components/layout/Header";
import "./style.css";
import { ThemeProvider } from "./components/ui/theme-provider";

export function App() {
    return (
        <LocationProvider>
            <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
                <Header />
                <main class="max-w-screen-custom relative mx-auto flex h-full w-full flex-col items-center justify-center">
                    <Router>
                        <Route path="/" component={Home} />
                        <Route default component={NotFound} />
                    </Router>
                </main>
            </ThemeProvider>
        </LocationProvider>
    );
}

render(<App />, document.getElementById("app"));
