import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import LinearProgress from '@mui/material/LinearProgress'
import Portal from '@mui/material/Portal'
import type { MuiNProgressProps, MuiNProgressStoreState } from '../../index.types'
import Styled from './MuiNProgressContainer.styled'

interface MuiNProgressContainerProps extends MuiNProgressProps {
  getSnapshot: () => MuiNProgressStoreState
  subscribe: (listener: () => void) => () => void
}

const useStore = (
  getSnapshot: MuiNProgressContainerProps['getSnapshot'],
  subscribe: MuiNProgressContainerProps['subscribe']
) => {
  const [state, setState] = React.useState<MuiNProgressStoreState>(getSnapshot)

  React.useEffect(() => {
    return subscribe(() => {
      setState(getSnapshot())
    })
  }, [getSnapshot, subscribe])

  return state
}

const MuiNProgressContainer = ({
  getSnapshot,
  subscribe,
  className,
  color: colorProp,
  height: heightProp,
  showSpinner: showSpinnerProp,
  size: sizeProp,
  thickness: thicknessProp
}: MuiNProgressContainerProps) => {
  const { status, settings } = useStore(getSnapshot, subscribe)
  const [visible, setVisible] = React.useState(false)
  const [phase, setPhase] = React.useState<'fading' | 'hidden' | 'visible'>('hidden')
  const speedRef = React.useRef(settings.speed)
  speedRef.current = settings.speed

  const color = colorProp ?? settings.color
  const height = heightProp ?? settings.height
  const showSpinner = showSpinnerProp ?? settings.showSpinner
  const size = sizeProp ?? settings.size
  const thickness = thicknessProp ?? settings.thickness

  React.useEffect(() => {
    if (status === null) {
      setPhase('hidden')
      setVisible(false)

      return
    }

    setVisible(true)
    setPhase('visible')

    if (status === 1) {
      const fadeTimer = setTimeout(() => {
        setPhase('fading')

        const hideTimer = setTimeout(() => {
          setPhase('hidden')
          setVisible(false)
        }, speedRef.current)

        return () => {
          clearTimeout(hideTimer)
        }
      }, speedRef.current)

      return () => {
        clearTimeout(fadeTimer)
      }
    }

    return
  }, [status])

  if (!visible) {
    return null
  }

  const isCustomParent = settings.parent !== 'body' && settings.parent !== document.body
  const parentNode = typeof settings.parent === 'string' ? document.querySelector(settings.parent) : settings.parent
  const container = (parentNode as HTMLElement) ?? document.body

  const bar = (
    <Styled.Container className={className} isCustomParent={isCustomParent}>
      <LinearProgress
        color={color}
        variant="determinate"
        value={status === null ? 0 : status * 100}
        sx={{
          height,
          opacity: phase === 'fading' ? 0 : 1,
          transition:
            phase === 'fading'
              ? `opacity ${speedRef.current}ms linear`
              : undefined
        }}
      />
    </Styled.Container>
  )

  const spinner = showSpinner ? (
    <Styled.SpinnerContainer>
      <CircularProgress
        color={color}
        size={size}
        thickness={thickness}
        variant="determinate"
        value={status === null ? 0 : status * 100}
      />
    </Styled.SpinnerContainer>
  ) : null

  return (
    <Portal container={container}>
      {bar}
      {spinner}
    </Portal>
  )
}

export default MuiNProgressContainer
