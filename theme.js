import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

// Create a theme instance.
const theme = responsiveFontSizes(
  createMuiTheme({
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
  })
)

export default theme
