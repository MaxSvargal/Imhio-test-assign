import { render, screen } from '@testing-library/react'

import itemsFixture from '../fixtures/itemsShort.json'
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
    expect(await screen.findAllByRole('listitem')).toHaveLength(2)
  })

  it('on init, it renders correct list element pictures and info', async () => {
    render(<IndexPage />)

    expect(screen.getAllByAltText('1 of 5')[0]).toHaveProperty(
      'src',
      'https://bs3.efohk.com/video/w/320/h/180/enhancement/1/cx1/0/cx2/640/cy1/0/cy2/360/2a1/e0e/2a1e0e4d1c841911fb9cd2c575b064ae.jpg'
    )

    expect(screen.getAllByText('The Perfumed Honeymoon')[0]).toBeInTheDocument()
    expect(screen.getByText('Added: 2020.07.23 22:54')).toBeInTheDocument()
    expect(screen.getByText('Duration: 00:10:22')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Actress' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Climax' })).toBeInTheDocument()
  })
  it.todo('when scroll, it renders more list elements')
  it.todo('when click on card, it starts to switch pictures')
  it.todo('when click on card, it has show the correct data')
  it.todo('when second click on the card, it stops to switch pictures')
  it.todo('when second click on an other card, it stops to switch pictures')
  it.todo('when click on more info, show additional info and start to switch pictures')
  it.todo('when second click on other more info, hide prevoius one and start to switch pictures')
  it.todo('on mobile when show tag and click on close, hide the additional info')
})
