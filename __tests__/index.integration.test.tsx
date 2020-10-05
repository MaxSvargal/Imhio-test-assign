import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import itemsFixture from '../fixtures/itemsShort.json'
import MainPage from '../pages/index'
import * as apiRepo from '../repos/apiRepo'

jest.mock('../repos/apiRepo')

describe('MainPage', () => {
  const fetchItemsSpy = jest.spyOn(apiRepo, 'fetchItems')
  const mockIntersectionObserver = jest.fn()

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

    mockIntersectionObserver.mockImplementation((cb) => {
      // Call callbacks immediately
      cb([{ isIntersecting: true }])
      return {
        new: jest.fn().mockReturnValue(null),
        observe: jest.fn().mockReturnValue(null),
        unobserve: jest.fn().mockReturnValue(null),
        disconnect: jest.fn().mockReturnValue(null)
      }
    })
    window.IntersectionObserver = mockIntersectionObserver
  })

  it('renders page layout correctly', () => {
    render(<MainPage />)
    expect(screen.getByRole('heading', { name: 'OZEEX' })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo', { name: 'Footer' })).toBeInTheDocument()
  })

  it('on init, it renders a list of elements', async () => {
    render(<MainPage />)
    expect(await screen.findAllByRole('listitem')).toHaveLength(2)
  })

  it('on init, it renders correct list element pictures and info', async () => {
    render(<MainPage />)

    expect(screen.getByAltText('1 of 5')).toHaveProperty(
      'src',
      'https://bs3.efohk.com/video/w/320/h/180/enhancement/1/cx1/0/cx2/640/cy1/0/cy2/360/2a1/e0e/2a1e0e4d1c841911fb9cd2c575b064ae.jpg'
    )

    expect(screen.getAllByText('The Perfumed Honeymoon')[0]).toBeInTheDocument()
    expect(screen.getByText('2020.07.23 22:54')).toBeInTheDocument()
    expect(screen.getByText('10:22')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Actress' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Climax' })).toBeInTheDocument()
  })

  it('when click on more info, show additional info', async () => {
    render(<MainPage />)

    const btns = await screen.findAllByText('More info')
    userEvent.click(btns[0])

    expect(screen.getByText('The Perfumed Honeymoon')).toBeInTheDocument()
    expect(screen.getAllByText('2020.07.23 22:54')[0]).toBeInTheDocument()
    expect(screen.getAllByText('10:22')[0]).toBeInTheDocument()
    expect(screen.getAllByText('PornHub')[0]).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'Actress' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Climax' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Sunny Leone' })).toBeInTheDocument()

    // expect(screen.getByText('Pornstars:')).toBeInTheDocument()
    expect(screen.queryByText('Christy Mack')).not.toBeInTheDocument()
    expect(screen.queryByText('Webcam Models:')).not.toBeInTheDocument()
  })

  it('when second click on other more info, hide the prevoius one', async () => {
    render(<MainPage />)

    const btns = await screen.findAllByText('More info')
    userEvent.click(btns[0])
    userEvent.click(btns[1])

    expect(
      screen.getByText(
        'Watch Cherry on now! - Cherry Crush, Mycherrycrush, Christy Mack, Cherry, Blowjob, Solo, Toy Porn Cherry'
      )
    ).toBeInTheDocument()
    expect(screen.getAllByText('2020.07.24 20:42')[0]).toBeInTheDocument()
    expect(screen.getAllByText('13:35')[0]).toBeInTheDocument()
    expect(screen.getAllByText('TNAFlix')[0]).toBeInTheDocument()

    expect(screen.getByText('Pornstars:')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Christy Mack' })).toBeInTheDocument()
    expect(screen.getByText('Webcam Models:')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'MyCherryCrush' })).toBeInTheDocument()
  })

  it('on mobile when show tag and click on close, hide the additional info', async () => {
    render(<MainPage />)

    const btns = await screen.findAllByText('More info')
    userEvent.click(btns[1])

    userEvent.click(screen.getByTitle('Close'))

    expect(screen.queryByText('Pornstars:')).not.toBeInTheDocument()
    expect(screen.queryByText('Webcam Models:')).not.toBeInTheDocument()
  })
})
