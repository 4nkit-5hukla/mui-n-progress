# mui-n-progress

MUI-powered progress bar with the [nprogress](https://github.com/rstacruz/nprogress) API. Drop-in procedural calls — `start()`, `set()`, `inc()`, `done()` — backed by MUI's `LinearProgress` and `CircularProgress` components, fully theme-aware.

📖 **[Storybook →](https://4nkit-5hukla.github.io/mui-n-progress/)**

## Installation

```bash
npm install mui-n-progress
```

Requires `@mui/material`, `@emotion/react`, and `@emotion/styled` as peer dependencies (MUI v6, v7, or v9).

## Usage

### 1. Mount the component once at your app root

```tsx
import { MuiNProgress } from 'mui-n-progress'

function App() {
  return (
    <>
      <MuiNProgress />
      <YourRoutes />
    </>
  )
}
```

### 2. Call the API from anywhere

```tsx
import { muiNProgress } from 'mui-n-progress'

// Start the bar
muiNProgress.start()

// Set to a specific value (0.0 – 1.0)
muiNProgress.set(0.4)

// Increment by a smart amount based on current position
muiNProgress.inc()

// Finish — jumps to ~80–95%, then 100%, then fades out
muiNProgress.done()

// Force-show even if not started
muiNProgress.done(true)

// Check if the bar is active
muiNProgress.isStarted()

// Remove immediately
muiNProgress.remove()
```

### Real-world example: Axios interceptor

```tsx
import axios from 'axios'
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
)
```

## API Reference

### `muiNProgress.configure(options)`

Update settings at runtime. Returns `muiNProgress` for chaining.

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `minimum` | `number` | `0.08` | Minimum starting percentage |
| `speed` | `number` | `200` | Transition duration in ms |
| `trickle` | `boolean` | `true` | Auto-increment while started |
| `trickleSpeed` | `number` | `200` | Trickle interval in ms |
| `showSpinner` | `boolean` | `true` | Show circular spinner |
| `parent` | `string \| HTMLElement` | `'body'` | Portal container |
| `color` | `'primary' \| 'secondary' \| 'error' \| 'info' \| 'success' \| 'warning' \| 'inherit'` | `'primary'` | MUI color for bar and spinner |
| `height` | `number \| string` | `2` | Height of the `LinearProgress` bar |
| `size` | `number` | `18` | Diameter of the `CircularProgress` spinner (px) |
| `thickness` | `number` | `4` | Stroke width of the `CircularProgress` spinner |

```tsx
muiNProgress.configure({
  parent: '#content',
  color: 'secondary',
  showSpinner: false
})
```

### `<MuiNProgress />` props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | MUI color literal | settings | Override the bar and spinner color |
| `height` | `number \| string` | settings | Override bar height |
| `showSpinner` | `boolean` | settings | Override spinner visibility |
| `size` | `number` | settings | Override spinner diameter (px) |
| `thickness` | `number` | settings | Override spinner stroke width |
| `className` | `string` | — | CSS class on the container |

```tsx
<MuiNProgress color="secondary" height={4} size={24} thickness={5} showSpinner />
```

## How it works

```
muiNProgress.start() / .set() / .done()
        │
        ▼
  Internal pub/sub store         ← singleton, callable from anywhere
        │
        ▼
  <MuiNProgress />               ← React component subscribes to store
        │
        ▼
  MUI Portal ──► LinearProgress + CircularProgress    ← theme-aware, no DOM manipulation
```

The progress bar is rendered into a MUI Portal targeting the configured `parent`. The trickle timer runs on `setTimeout` (not `setInterval`) — it stops cleanly when `done()` or `remove()` is called.

## Differences from nprogress

| | nprogress | mui-n-progress |
|---|---|---|
| Rendering | Raw DOM manipulation | React + MUI Portal |
| Bar | CSS `transform` on a `<div>` | MUI `LinearProgress` |
| Spinner | CSS `@keyframes` on a `<div>` | MUI `CircularProgress` |
| Theming | Hardcoded `#29d` blue | Inherits MUI theme |
| Template customization | HTML template string | Component props |
| `promise()` helper | jQuery promises | Not included (use native `Promise.all`) |

## License

MIT
