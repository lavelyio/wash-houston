import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

// Create a theme instance.
const theme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      fontFamily: [
        '"Hind Vadodara"',
        'Roboto',

        'Arial',
        'sans-serif',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',

        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    palette: {
      primary: {
        main: '#19426f',
      },
      secondary: {
        main: '#1c4171',
      },
      lightGrey: {
        main: '#d0d0d2',
      },
      error: {
        main: '#ea4131',
      },
      background: {
        default: '#fff',
      },
    },
    hero: {
      title: {
        textShadow: '1px 1px solid',
      },
    },
  })
)

export default theme
