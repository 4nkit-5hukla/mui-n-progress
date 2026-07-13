import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material'
import type { Preview } from '@storybook/react'

const theme = createTheme()

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      )
    }
  ]
}

export default preview
