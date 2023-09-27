function ThemeToggler({ theme, handleThemeSwitch }) {
    return (
        <button onClick={handleThemeSwitch}>
            {
                theme === "dark" ?
                    <span className="">🌞</span>
                    :
                    <span>🌙</span>
            }
        </button>
    );
}

export default ThemeToggler;