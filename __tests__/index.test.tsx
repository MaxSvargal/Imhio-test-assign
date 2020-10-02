import { render, screen } from '@testing-library/react'

import App from '../pages/index'

describe('IndexPage', () => {
  beforeAll(() => {
    ;(window as { innerWidth: number; innerHeight: number }) = Object.assign(window, {
      innerWidth: 640,
      innerHeight: 480
    })
    window.dispatchEvent(new Event('resize'))
  })

  it('renders page layout correctly', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Hello Next.js 👋' })).toBeInTheDocument()
  })

  it.todo('on init, it renders a list of elements')
  it.todo('on init, it renders correct list element picture and info')
  it.todo('when click on card, it starts to switch pictures')
  it.todo('when click on card, it has show the correct data')
  it.todo('when second click on the card, it stops to switch pictures')
  it.todo('when second click on an other card, it stops to switch pictures')
  it.todo('when click on more info, show additional info and start to switch pictures')
  it.todo('when second click on other more info, hide prevoius one and start to switch pictures')
  it.todo('on mobile when show tag and click on close, hide the additional info')
})
