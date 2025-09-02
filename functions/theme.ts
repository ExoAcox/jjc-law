"use client"

import { useState } from "react";


const useTheme = () => {
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
        document?.documentElement.setAttribute("data-theme", theme === "dark" ? "light" : "dark");
    }

    return { theme, toggleTheme }
}

export default useTheme