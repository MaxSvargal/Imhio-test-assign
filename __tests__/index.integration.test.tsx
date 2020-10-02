import { render, screen } from '@testing-library/react'

import itemsFixture from '../fixtures/items.json'
import IndexPage from '../pages/index'
import * as apiRepo from '../repos/apiRepo'

jest.mock('../repos/apiRepo')

describe('IndexPage', () => {
  const fetchItemsSpy = jest.spyOn(apiRepo, 'fetchItems')

  beforeAll(() => {
    ;(window as { innerWidth: number; innerHeight: number }) = Object.assign(window, {
      innerWidth: 640,
      innerHeight: 480
    })
    window.dispatchEvent(new Event('resize'))
  })

  beforeEach(() => {
    fetchItemsSpy.mockReset()
    fetchItemsSpy.mockResolvedValueOnce(Promise.resolve(itemsFixture))
  })

  it.skip('renders page layout correctly', () => {
    render(<IndexPage />)
    expect(screen.getByRole('heading', { name: 'Hello Next.js' })).toBeInTheDocument()
  })

  it('on init, it renders a list of elements', async () => {
    render(<IndexPage />)
    expect(fetchItemsSpy).toHaveBeenCalledTimes(1)
    expect(fetchItemsSpy).toHaveBeenCalledWith('/items')
    expect(await screen.findAllByRole('listitem')).toHaveLength(60)
  })

  it.todo('on init, it renders correct list element picture and info')
  it.todo('when scroll, it renders more list elements')
  it.todo('when click on card, it starts to switch pictures')
  it.todo('when click on card, it has show the correct data')
  it.todo('when second click on the card, it stops to switch pictures')
  it.todo('when second click on an other card, it stops to switch pictures')
  it.todo('when click on more info, show additional info and start to switch pictures')
  it.todo('when second click on other more info, hide prevoius one and start to switch pictures')
  it.todo('on mobile when show tag and click on close, hide the additional info')
})
