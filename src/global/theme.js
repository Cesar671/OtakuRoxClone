import { createContext, useMemo, useState } from "react"

const LIGHT = "light"
const DARK = "dark"

export const tokens = (mode) => {
    
    return (mode === LIGHT ? {
        menu: {
          100: "#ffffff",
          200: "#ffffff",
          300: "#ffffff",
          400: "#ffffff",
          500: "#ffffff",
          600: "#cccccc",
          700: "#999999",
          800: "#666666",
          900: "#333333"
        },
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
        red: {
          100: "#fcdde4",
          200: "#f9bcc9",
          300: "#f59aad",
          400: "#f27992",
          500: "#ef5777",
          600: "#bf465f",
          700: "#8f3447",
          800: "#602330",
          900: "#301118"
},
    }: {
        menu: {
          100: "#cfd1d2",
          200: "#a0a2a5",
          300: "#707477",
          400: "#41454a",
          500: "#11171d",
          600: "#0e1217",
          700: "#0a0e11",
          800: "#07090c",
          900: "#030506"
        },
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
          100: "#060809",
          200: "#0c1012",
          300: "#12171c",
          400: "#181f25",
          500: "#1e272e",
          600: "#4b5258",
          700: "#787d82",
          800: "#a5a9ab",
          900: "#d2d4d5",
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
        red: {
          100: "#fcdde4",
          200: "#f9bcc9",
          300: "#f59aad",
          400: "#f27992",
          500: "#ef5777",
          600: "#bf465f",
          700: "#8f3447",
          800: "#602330",
          900: "#301118"
},
    })
};

export const ColorThemeContext = createContext();

export const useMode = () => {
    const [mode, setMode] = useState(LIGHT)
    const useModeF = useMemo(() => ({
        toogleMode: () => setMode((prev) => {
            console.log(prev)
            return (prev === LIGHT ? DARK: LIGHT)
        }),
    }),[])

    return  [mode, useModeF]
}

 