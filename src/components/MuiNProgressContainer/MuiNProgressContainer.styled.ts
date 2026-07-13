import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

const Container = styled(Box, {
  shouldForwardProp: (prop) => {
    return prop !== 'isCustomParent'
  }
})<{ isCustomParent: boolean }>(({ isCustomParent }) => {
  return {
    pointerEvents: 'none',
    position: isCustomParent ? 'absolute' : 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1031
  }
})

const SpinnerContainer = styled('div')({
  display: 'block',
  position: 'fixed',
  zIndex: 1031,
  top: 15,
  right: 15
})

const CustomParent = styled('div')({
  overflow: 'hidden',
  position: 'relative'
})

export default {
  Container,
  CustomParent,
  SpinnerContainer
}
