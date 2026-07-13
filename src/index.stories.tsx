import React from 'react'
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material'
import type { Meta, StoryFn } from '@storybook/react-vite'
import { MuiNProgress, muiNProgress } from './index'

export default {
  title: 'MuiNProgress',
  component: MuiNProgress
} as Meta<typeof MuiNProgress>

const theme = createTheme()

export const Basic: StoryFn<typeof MuiNProgress> = () => {
  const handleStart = () => {
    muiNProgress.start()
  }

  const handleDone = () => {
    muiNProgress.done()
  }

  const handleSet = () => {
    muiNProgress.set(0.4)
  }

  const handleInc = () => {
    muiNProgress.inc()
  }

  return (
    <ThemeProvider theme={theme}>
      <MuiNProgress />
      <div style={{ display: 'flex', gap: 8 }}>
        <Button variant="contained" onClick={handleStart}>
          Start
        </Button>
        <Button variant="outlined" onClick={handleSet}>
          Set 40%
        </Button>
        <Button variant="outlined" onClick={handleInc}>
          Increment
        </Button>
        <Button variant="contained" color="success" onClick={handleDone}>
          Done
        </Button>
      </div>
    </ThemeProvider>
  )
}

export const WithCustomParent: StoryFn<typeof MuiNProgress> = () => {
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    muiNProgress.configure({ parent: '#custom-container' })
  }, [])

  const handleStart = () => {
    muiNProgress.start()
  }

  const handleDone = () => {
    muiNProgress.done()
  }

  return (
    <ThemeProvider theme={theme}>
      <MuiNProgress />
      <div
        id="custom-container"
        ref={containerRef}
        style={{
          border: '2px dashed #ccc',
          height: 200,
          overflow: 'hidden',
          padding: 16,
          position: 'relative'
        }}
      >
        <p>Progress bar will appear inside this container</p>
        <div style={{ display: 'flex', gap: 8, marginTop: 40 }}>
          <Button variant="contained" onClick={handleStart}>
            Start
          </Button>
          <Button variant="contained" color="success" onClick={handleDone}>
            Done
          </Button>
        </div>
      </div>
    </ThemeProvider>
  )
}

export const WithoutSpinner: StoryFn<typeof MuiNProgress> = () => {
  const handleStart = () => {
    muiNProgress.start()
  }

  const handleDone = () => {
    muiNProgress.done()
  }

  return (
    <ThemeProvider theme={theme}>
      <MuiNProgress showSpinner={false} />
      <div style={{ display: 'flex', gap: 8 }}>
        <Button variant="contained" onClick={handleStart}>
          Start
        </Button>
        <Button variant="contained" color="success" onClick={handleDone}>
          Done
        </Button>
      </div>
    </ThemeProvider>
  )
}

export const SecondaryColor: StoryFn<typeof MuiNProgress> = () => {
  const handleStart = () => {
    muiNProgress.start()
  }

  const handleDone = () => {
    muiNProgress.done()
  }

  return (
    <ThemeProvider theme={theme}>
      <MuiNProgress color="secondary" />
      <div style={{ display: 'flex', gap: 8 }}>
        <Button variant="contained" onClick={handleStart}>
          Start
        </Button>
        <Button variant="contained" color="success" onClick={handleDone}>
          Done
        </Button>
      </div>
    </ThemeProvider>
  )
}
