

const useTheme = () => {
    const theme = document.documentElement.getAttribute("data-theme");
    const toggle = document.documentElement.setAttribute("data-theme", theme === "dark" ? "light" : "dark");

    return { theme, toggle }
}

export default useTheme