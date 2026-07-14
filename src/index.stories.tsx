import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { Meta, StoryObj } from '@storybook/react'
import { MuiNProgress, muiNProgress } from './index'

const CodeBlock = ({ code }: { code: string }) => {
  return (
    <Paper
      component="pre"
      variant="outlined"
      sx={{
        backgroundColor: 'grey.100',
        borderRadius: 1,
        fontSize: '0.8rem',
        lineHeight: 1.5,
        mb: 2,
        mt: 0,
        overflow: 'auto',
        p: 2
      }}
    >
      <code>{code}</code>
    </Paper>
  )
}

const meta: Meta<typeof MuiNProgress> = {
  component: MuiNProgress,
  parameters: {
    docs: {
      description: {
        component:
          'A MUI-powered progress bar with the nprogress API. Mount the component once at your app root, then call `muiNProgress.start()` / `.done()` / `.set()` from anywhere.'
      }
    }
  },
  title: 'MuiNProgress'
}

export default meta

type Story = StoryObj<typeof MuiNProgress>

export const Basic: Story = {
  render: () => {
    const handleStart = () => {
      muiNProgress.start()
    }

    const handleSet = () => {
      muiNProgress.set(0.4)
    }

    const handleInc = () => {
      muiNProgress.inc()
    }

    const handleDone = () => {
      muiNProgress.done()
    }

    return (
      <>
        <MuiNProgress />
        <CodeBlock
          code={`// 1. Mount the component once at your app root
<MuiNProgress />

// 2. Call the API from anywhere
muiNProgress.start()    // Show the bar and begin auto-trickle
muiNProgress.set(0.4)   // Set to 40%
muiNProgress.inc()      // Smart increment based on current position
muiNProgress.done()     // Jump to 80–95%, then 100%, then fade out`}
        />
        <Stack direction="row" spacing={1}>
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
        </Stack>
      </>
    )
  }
}

export const Colors: Story = {
  render: () => {
    const colors = [
      'primary',
      'secondary',
      'error',
      'warning',
      'info',
      'success',
      'inherit'
    ] as const

    const handleClick = (color: string) => {
      muiNProgress.configure({ color: color as never })
      muiNProgress.start()
      setTimeout(() => {
        muiNProgress.done()
      }, 1500)
    }

    return (
      <>
        <MuiNProgress />
        <CodeBlock
          code={`// All MUI color literals are supported
muiNProgress.configure({ color: 'error' })
muiNProgress.start()

// Or via the component prop
<MuiNProgress color="warning" />`}
        />
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {colors.map((c) => {
            return (
              <Button
                key={c}
                color={c === 'inherit' ? undefined : c}
                size="small"
                variant="outlined"
                onClick={() => {
                  return handleClick(c)
                }}
              >
                {c}
              </Button>
            )
          })}
        </Box>
      </>
    )
  }
}

export const CustomHeight: Story = {
  render: () => {
    const sizes = [
      { height: 1, label: '1px' },
      { height: 2, label: '2px (default)' },
      { height: 4, label: '4px' },
      { height: 8, label: '8px' },
      { height: 12, label: '12px' }
    ]

    const handleClick = (height: number | string) => {
      muiNProgress.configure({ height })
      muiNProgress.start()
      setTimeout(() => {
        muiNProgress.done()
      }, 1500)
    }

    return (
      <>
        <MuiNProgress />
        <CodeBlock
          code={`// Customize the bar height via configure or component prop
muiNProgress.configure({ height: 8 })   // thick bar
<MuiNProgress height={4} />             // or via prop
<MuiNProgress height="0.5rem" />        // CSS units also work`}
        />
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {sizes.map((s) => {
            return (
              <Button
                key={s.label}
                size="small"
                variant="outlined"
                onClick={() => {
                  return handleClick(s.height)
                }}
              >
                {s.label}
              </Button>
            )
          })}
        </Box>
      </>
    )
  }
}

export const SpinnerCustomization: Story = {
  render: () => {
    const handleSmall = () => {
      muiNProgress.configure({ size: 12, thickness: 2 })
      muiNProgress.start()
    }

    const handleDefault = () => {
      muiNProgress.configure({ size: 18, thickness: 4 })
      muiNProgress.start()
    }

    const handleLarge = () => {
      muiNProgress.configure({ size: 32, thickness: 6 })
      muiNProgress.start()
    }

    const handleDone = () => {
      muiNProgress.done()
    }

    return (
      <>
        <MuiNProgress />
        <CodeBlock
          code={`// Customize the spinner size and thickness
muiNProgress.configure({ size: 32, thickness: 6 })
// Or via component props
<MuiNProgress size={12} thickness={2} showSpinner />`}
        />
        <Stack direction="row" spacing={1}>
          <Button size="small" variant="outlined" onClick={handleSmall}>
            Small (12px / thin)
          </Button>
          <Button size="small" variant="outlined" onClick={handleDefault}>
            Default (18px)
          </Button>
          <Button size="small" variant="outlined" onClick={handleLarge}>
            Large (32px / thick)
          </Button>
          <Button color="success" size="small" variant="contained" onClick={handleDone}>
            Done
          </Button>
        </Stack>
      </>
    )
  }
}

export const CustomParent: Story = {
  render: () => {
    React.useEffect(() => {
      muiNProgress.configure({ parent: '#story-custom-container' })

      return () => {
        muiNProgress.remove()
      }
    }, [])

    const handleStart = () => {
      muiNProgress.start()
    }

    const handleDone = () => {
      muiNProgress.done()
    }

    return (
      <>
        <MuiNProgress />
        <CodeBlock
          code={`// Scope the bar to a specific container
muiNProgress.configure({ parent: '#sidebar' })
// Or pass a DOM element directly
muiNProgress.configure({ parent: document.getElementById('app') })`}
        />
        <Box
          id="story-custom-container"
          sx={{
            border: '2px dashed',
            borderColor: 'grey.300',
            borderRadius: 2,
            height: 200,
            overflow: 'hidden',
            p: 2,
            position: 'relative'
          }}
        >
          <Typography gutterBottom variant="body2">
            Bar renders inside this container (position: absolute)
          </Typography>
          <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
            <Button variant="contained" onClick={handleStart}>
              Start
            </Button>
            <Button color="success" variant="contained" onClick={handleDone}>
              Done
            </Button>
          </Stack>
        </Box>
      </>
    )
  }
}

export const AxiosInterceptor: Story = {
  render: () => {
    React.useEffect(() => {
      return () => {
        muiNProgress.remove()
      }
    }, [])

    const handleSimulateRequest = () => {
      muiNProgress.start()
      setTimeout(() => {
        muiNProgress.done()
      }, 2000)
    }

    return (
      <>
        <MuiNProgress />
        <CodeBlock
          code={`import axios from 'axios'
import { muiNProgress } from 'mui-n-progress'

axios.interceptors.request.use((config) => {
  muiNProgress.start()
  return config
})

axios.interceptors.response.use(
  (response) => {
    muiNProgress.done()
    return response
  },
  (error) => {
    muiNProgress.done()
    return Promise.reject(error)
  }
)`}
        />
        <Stack spacing={2}>
          <Typography color="text.secondary" variant="body2">
            Simulates a 2-second API call. The bar auto-trickles while waiting.
          </Typography>
          <Button variant="contained" onClick={handleSimulateRequest}>
            Simulate API Call
          </Button>
        </Stack>
      </>
    )
  }
}

export const WithoutSpinner: Story = {
  render: () => {
    const handleStart = () => {
      muiNProgress.start()
    }

    const handleDone = () => {
      muiNProgress.done()
    }

    return (
      <>
        <MuiNProgress showSpinner={false} />
        <CodeBlock
          code={`// Hide the circular spinner
<MuiNProgress showSpinner={false} />
// Or via configure
muiNProgress.configure({ showSpinner: false })`}
        />
        <Stack direction="row" spacing={1}>
          <Button variant="contained" onClick={handleStart}>
            Start
          </Button>
          <Button color="success" variant="contained" onClick={handleDone}>
            Done
          </Button>
        </Stack>
      </>
    )
  }
}
