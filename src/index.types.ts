export interface MuiNProgressSettings {
  minimum: number
  speed: number
  trickle: boolean
  trickleSpeed: number
  showSpinner: boolean
  parent: string | HTMLElement
  color: 'primary' | 'secondary' | 'inherit'
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

export interface MuiNProgressProps {
  color?: MuiNProgressSettings['color']
  showSpinner?: boolean
  className?: string
}
