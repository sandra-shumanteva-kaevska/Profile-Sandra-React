import { createMuiTheme, darken } from "@material-ui/core/styles";

export const myTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#31afd8"
        },
        text: {
            secondary: "#58595b"
        }
    },
    overrides: {
        MuiButton: {
            root: {
                color: "white"
            },
            containedPrimary: {
                color: "white"
            },
            containedSecondary: {
                color: "white",
                backgroundColor: "#3155d8d9",
                "&:hover": {
                    backgroundColor: darken("#3155d8d9", 0.3)
                }
            }
        },
        MuiIconButton: {
            root: {
                color: "white"
            }
        },
        MuiChip: {
            colorPrimary: {
                color: "white",
                backgroundColor: "#e33371eb"
            }
        }
    },
    typography: {
        fontFamily: ["Montserrat", "Open Sans"].join(","),
        subtitle2: {
            color: "white"
        }

    }
});
