import { createContext, useMemo, useState } from "react"

const LIGHT = "light"
const DARK = "dark"

export const tokens = (mode) => {
    return (mode === LIGHT ? {
        footer: {
            100: "#d2d4d5",
            200: "#a5a9ab",
            300: "#787d82",
            400: "#4b5258",
            500: "#1e272e",
            600: "#181f25",
            700: "#12171c",
            800: "#0c1012",
            900: "#060809"
        },
        primary: {
            100: "#fdfdfd",
            200: "#fbfbfb",
            300: "#f9f9f9",
            400: "#f7f7f7",
            500: "#f5f5f5",
            600: "#c4c4c4",
            700: "#939393",
            800: "#626262",
            900: "#313131"
        },
        orange: {
            100: "#ffe5d0",
            200: "#ffcba0",
            300: "#ffb171",
            400: "#ff9741",
            500: "#ff7d12",
            600: "#cc640e",
            700: "#994b0b",
            800: "#663207",
            900: "#331904"
        },
    }: {
        footer: {
            100: "#d2d4d5",
            200: "#a5a9ab",
            300: "#787d82",
            400: "#4b5258",
            500: "#1e272e",
            600: "#181f25",
            700: "#12171c",
            800: "#0c1012",
            900: "#060809"
        },
        primary: {
          100: "#d2d4d5",
          200: "#a5a9ab",
          300: "#787d82",
          400: "#4b5258",
          500: "#1e272e",
          600: "#181f25",
          700: "#12171c",
          800: "#0c1012",
          900: "#060809"
        },
        orange: {
            100: "#ffe5d0",
            200: "#ffcba0",
            300: "#ffb171",
            400: "#ff9741",
            500: "#ff7d12",
            600: "#cc640e",
            700: "#994b0b",
            800: "#663207",
            900: "#331904"
        },
    })
};

export const ColorThemeContext = createContext({
    toogleMode: () => {},
    mode: ""
});

export const useMode = () => {
    const [mode, setMode] = useState(LIGHT)
    const useModeF = useMemo(() => ({
        toogleMode: setMode((mode) => (mode === LIGHT) ? DARK: LIGHT) 
    }),[])

    return  [mode, useModeF] 
}

 