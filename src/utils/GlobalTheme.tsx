import { extendTheme } from "@chakra-ui/react"

//COLORS PALETTE
const colors = {

    transparent: "transparent",
    black: "#000",
    white: "#fff",
    gray:
    {
        50: '#eff2f5',
        100: '#d4d7dc',
        200: '#b7bdc5',
        300: '#99a3b0',
        400: '#7b889b',
        500: '#626f82',
        600: '#4c5665',
        700: '#373e48',
        800: '#21252b',
        900: '#0a0c10',
    },
    primary: {

        100: '#fff3eb',
        200: '#ffd4b8',
        300: '#ffc59f',


    }

}
// PRIMARY THEME COLORS
export const themeColors = {

    background: {
        normal: colors.primary[100],

    },
    characters: {
        lighter: colors.gray[50],
        light: colors.gray[100],
        normal: colors.gray[200],
        dark: colors.gray[600],
    },
    highlight: {

        light: colors.primary[200],
        normal: colors.primary[200],
        dark: colors.primary[300],
    }
}



//PRIMARY BORDER
export const themeBorder = {
    radius: "0.5em",
    divider: {
        borderBottom: "1px",
        borderColor: themeColors.characters.lighter,
    },
    border: `1px solid ${themeColors.characters.lighter}`,

}

 // PRIMARY MARGINS
export const themeMargins = {
    frame: "1.2em",
    halfFrame: "0.6em",
}

// PRIMARY BUTTON
const defaultThemeButton = {

    baseStyle: {

        fontSize: 'sm',
        borderRadius: "0.1em",
      
        bg: colors.transparent,
        _focus: { boxShadow: 'none', _focus: "none" },
        _hover: {
            color: colors.primary[200],
            bg: colors.primary[100],
        },
        //}
    },

}

export const theme = extendTheme({

    // BORDER

    border: {
        ...themeBorder
    },
    margin: {
        ...themeMargins
    },

     // COMPONETS STYLES

     components: {

        // BUTTONS 
        Button: {
            ... defaultThemeButton
        },
    }
});