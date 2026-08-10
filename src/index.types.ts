export type MuiNProgressColor =
  | 'error'
  | 'info'
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'

export interface MuiNProgressSettings {
  minimum: number
  speed: number
  trickle: boolean
  trickleSpeed: number
  showSpinner: boolean
  parent: string | HTMLElement
  color: MuiNProgressColor
  height: number | string
  size: number
  thickness: number
}

export type MuiNProgressConfigureOptions = Partial<MuiNProgressSettings>

export interface MuiNProgressAPI {
  configure(options: MuiNProgressConfigureOptions): MuiNProgressAPI
  start(): MuiNProgressAPI
  done(force?: boolean): MuiNProgressAPI
  set(n: number): MuiNProgressAPI
  inc(amount?: number): MuiNProgressAPI
  trickle(): MuiNProgressAPI
  isStarted(): boolean
  remove(): MuiNProgressAPI
}

export interface MuiNProgressStoreState {
  status: number | null
  settings: MuiNProgressSettings
}

import type { SxProps, Theme } from '@mui/material/styles'

export interface MuiNProgressProps {
  className?: string
  color?: MuiNProgressColor
  height?: number | string
  showSpinner?: boolean
  size?: number
  sx?: SxProps<Theme>
  thickness?: number
}
