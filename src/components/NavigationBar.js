import { NavLink } from "react-router-dom";
import ThemeToggler from "./ThemeToggler";

function NavigationBar({ theme, handleThemeSwitch }) {
    return (
        <header className="m-4 p-2">
            <nav>
                <ul className="flex max-[400px]:gap-3 gap-8 items-center justify-center sm:gap-20 md:gap-28">
                    <li className="transition hover:-translate-y-1">
                        <NavLink to="/my-portfolio" className={({ isActive }) => (isActive ? "bottom-border" : "")} end>Home</NavLink>
                    </li>
                    <li className="transition hover:-translate-y-1">
                        <NavLink to="projects" className={({ isActive }) => isActive ? "bottom-border" : ""}>Portfolio</NavLink>
                    </li>
                    <li className="transition hover:scale-110">
                        <NavLink to="/my-portfolio" end className="text-3xl font-semibold tracking-widest">A|D</NavLink>
                    </li>
                    <li className="transition hover:-translate-y-1">
                        <NavLink to="contact" className={({ isActive }) => (isActive ? "bottom-border" : "")}>Contact</NavLink>
                    </li>
                    <li className="transition-all hover:-translate-y-1 text-xl md:text-2xl">
                        <ThemeToggler theme={theme} handleThemeSwitch={handleThemeSwitch} />
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavigationBar;