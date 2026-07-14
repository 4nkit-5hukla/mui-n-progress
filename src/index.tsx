import MuiNProgressContainer from '@components/MuiNProgressContainer/MuiNProgressContainer'
import { clamp } from '@shared/helpers/clamp'
import type {
  MuiNProgressAPI,
  MuiNProgressColor,
  MuiNProgressConfigureOptions,
  MuiNProgressProps,
  MuiNProgressSettings,
  MuiNProgressStoreState
} from './index.types'

export type {
  MuiNProgressColor,
  MuiNProgressConfigureOptions,
  MuiNProgressProps,
  MuiNProgressSettings
}

type Listener = () => void

const defaultSettings: MuiNProgressSettings = {
  color: 'primary',
  height: 2,
  minimum: 0.08,
  parent: 'body',
  showSpinner: true,
  size: 18,
  speed: 200,
  thickness: 4,
  trickle: true,
  trickleSpeed: 200
}

let settings: MuiNProgressSettings = { ...defaultSettings }

let status: number | null = null

const listeners = new Set<Listener>()

let trickleTimer: ReturnType<typeof setTimeout> | null = null

function getSnapshot(): MuiNProgressStoreState {
  return { status, settings }
}

function subscribe(listener: Listener): () => void {
  listeners.add(listener)

  return () => {
    listeners.delete(listener)
  }
}

function emit(): void {
  listeners.forEach((listener) => {
    listener()
  })
}

function isDOMElement(obj: unknown): obj is HTMLElement {
  if (typeof HTMLElement === 'object') {
    return obj instanceof HTMLElement
  }

  return (
    typeof obj === 'object' &&
    obj !== null &&
    (obj as Node).nodeType === 1 &&
    typeof (obj as Node).nodeName === 'string'
  )
}

function resolveParent(): HTMLElement {
  if (isDOMElement(settings.parent)) {
    return settings.parent
  }

  const el = document.querySelector(settings.parent)

  return (el as HTMLElement) ?? document.body
}

function stopTrickle(): void {
  if (trickleTimer !== null) {
    clearTimeout(trickleTimer)
    trickleTimer = null
  }
}

function startTrickle(): void {
  if (!settings.trickle) {
    return
  }

  stopTrickle()

  const work = (): void => {
    trickleTimer = setTimeout(() => {
      if (status === null) {
        return
      }

      trickle()
      work()
    }, settings.trickleSpeed)
  }

  work()
}

function inc(amount?: number): MuiNProgressAPI {
  const n = status

  if (n === null) {
    return start()
  }

  if (n > 1) {
    return api
  }

  let computedAmount = amount

  if (typeof computedAmount !== 'number') {
    if (n >= 0 && n < 0.2) {
      computedAmount = 0.1
    } else if (n >= 0.2 && n < 0.5) {
      computedAmount = 0.04
    } else if (n >= 0.5 && n < 0.8) {
      computedAmount = 0.02
    } else if (n >= 0.8 && n < 0.99) {
      computedAmount = 0.005
    } else {
      computedAmount = 0
    }
  }

  const clamped = clamp(n + computedAmount, 0, 0.994)

  return set(clamped)
}

function trickle(): MuiNProgressAPI {
  return inc()
}

function set(n: number): MuiNProgressAPI {
  const wasStarted = isStarted()

  const clamped = clamp(n, settings.minimum, 1)
  status = clamped === 1 ? null : clamped

  if (!wasStarted) {
    const parent = resolveParent()

    if (parent !== document.body) {
      parent.classList.add('mui-nprogress-custom-parent')
    }
  }

  if (clamped === 1) {
    status = 1
    emit()
    stopTrickle()

    setTimeout(() => {
      remove()
    }, settings.speed * 2)
  } else {
    emit()
  }

  return api
}

function start(): MuiNProgressAPI {
  if (status === null) {
    set(0)
  }

  startTrickle()

  return api
}

function done(force?: boolean): MuiNProgressAPI {
  if (!force && status === null) {
    return api
  }

  return inc(0.3 + 0.5 * Math.random()).set(1)
}

function isStarted(): boolean {
  return typeof status === 'number'
}

function remove(): MuiNProgressAPI {
  stopTrickle()

  const parent = resolveParent()

  parent.classList.remove('mui-nprogress-custom-parent')

  status = null
  emit()

  return api
}

function configure(options: MuiNProgressConfigureOptions): MuiNProgressAPI {
  const keys = Object.keys(options) as (keyof MuiNProgressConfigureOptions)[]

  for (const key of keys) {
    const value = options[key]

    if (value !== undefined) {
      ;(settings as unknown as Record<string, unknown>)[key] = value
    }
  }

  return api
}

const api: MuiNProgressAPI = {
  configure,
  done,
  inc,
  isStarted,
  remove,
  set,
  start,
  trickle
}

const muiNProgress: MuiNProgressAPI = api

const MuiNProgress = (props: MuiNProgressProps) => {
  return (
    <MuiNProgressContainer
      {...props}
      getSnapshot={getSnapshot}
      subscribe={subscribe}
    />
  )
}

export { MuiNProgress, muiNProgress }
