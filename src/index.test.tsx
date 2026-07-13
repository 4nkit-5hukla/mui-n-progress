import React from 'react'
import { vi } from 'vitest'
import { act, render } from '@testing-library/react'
import type { MuiNProgressProps } from './index.types'
import { MuiNProgress, muiNProgress } from './index'
import '@testing-library/jest-dom/vitest'

const TestWrapper = (props: MuiNProgressProps) => {
  return <MuiNProgress {...props} />
}

const queryBar = (): Element | null => {
  return document.body.querySelector('.MuiLinearProgress-root')
}

const querySpinner = (): Element | null => {
  return document.body.querySelector('.MuiCircularProgress-root')
}

describe('MuiNProgress', () => {
  afterEach(() => {
    act(() => {
      muiNProgress.remove()
    })
    vi.restoreAllMocks()
  })

  test('should render nothing when not started', () => {
    render(<TestWrapper />)

    expect(queryBar()).toBeNull()
  })

  test('should render progress bar when started', () => {
    render(<TestWrapper />)

    act(() => {
      muiNProgress.start()
    })

    expect(queryBar()).toBeTruthy()
  })

  test('should hide after done', () => {
    vi.useFakeTimers()
    render(<TestWrapper />)

    act(() => {
      muiNProgress.start()
    })

    expect(queryBar()).toBeTruthy()

    act(() => {
      muiNProgress.done()
    })

    act(() => {
      vi.advanceTimersByTime(500)
    })

    expect(queryBar()).toBeNull()
    vi.useRealTimers()
  })

  test('should show spinner when showSpinner is true', () => {
    render(<TestWrapper showSpinner />)

    act(() => {
      muiNProgress.start()
    })

    expect(querySpinner()).toBeTruthy()
  })

  test('should hide spinner when showSpinner is false', () => {
    render(<TestWrapper showSpinner={false} />)

    act(() => {
      muiNProgress.start()
    })

    expect(querySpinner()).toBeNull()
  })

  test('isStarted should return correct state', () => {
    expect(muiNProgress.isStarted()).toBe(false)

    act(() => {
      muiNProgress.start()
    })

    expect(muiNProgress.isStarted()).toBe(true)

    act(() => {
      muiNProgress.remove()
    })

    expect(muiNProgress.isStarted()).toBe(false)
  })

  test('configure should update settings', () => {
    muiNProgress.configure({ minimum: 0.1, speed: 300 })

    act(() => {
      muiNProgress.start()
    })

    expect(muiNProgress.isStarted()).toBe(true)

    act(() => {
      muiNProgress.remove()
    })
  })

  test('set should update progress to specific value', () => {
    render(<TestWrapper />)

    act(() => {
      muiNProgress.set(0.5)
    })

    expect(muiNProgress.isStarted()).toBe(true)
    expect(queryBar()).toBeTruthy()
  })

  test('done with force=true should show bar even if not started', () => {
    render(<TestWrapper />)

    act(() => {
      muiNProgress.done(true)
    })

    expect(queryBar()).toBeTruthy()
  })

  test('done without force should not show if not started', () => {
    muiNProgress.done()

    expect(muiNProgress.isStarted()).toBe(false)
  })
})
