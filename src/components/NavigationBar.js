import { NavLink } from "react-router-dom";

function NavigationBar() {
    return (
        <header className="m-4 p-2">
            <nav>
                <ul className="flex gap-8 items-center justify-center sm:gap-20 md:gap-28">
                    <li className="transition hover:-translate-y-1">
                        <NavLink to="/my-portfolio" className={({ isActive }) => (isActive ? "border-b-2 border-black" : "")} end>Home</NavLink>
                    </li>
                    <li className="transition hover:-translate-y-1">
                        <NavLink to="projects" className={({ isActive }) => isActive ? "border-b-2 border-black" : ""}>Portfolio</NavLink>
                    </li>
                    <li className="transition hover:scale-110">
                        <NavLink to="/my-portfolio" end className="text-3xl font-semibold tracking-widest">A|D</NavLink>
                    </li>
                    <li className="transition hover:-translate-y-1">
                        <NavLink to="contact" className={({ isActive }) => (isActive ? "border-b-2 border-black" : "")}>Contact</NavLink>
                    </li>
                    <li>
                        <button>🌕</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavigationBar;