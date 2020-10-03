import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

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

    expect(screen.getByAltText('1 of 5')).toHaveProperty(
      'src',
      'https://bs3.efohk.com/video/w/320/h/180/enhancement/1/cx1/0/cx2/640/cy1/0/cy2/360/2a1/e0e/2a1e0e4d1c841911fb9cd2c575b064ae.jpg'
    )

    expect(screen.getAllByText('The Perfumed Honeymoon')[0]).toBeInTheDocument()
    expect(screen.getByText('Added: 2020.07.23 22:54')).toBeInTheDocument()
    expect(screen.getByText('Duration: 00:10:22')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Actress' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Climax' })).toBeInTheDocument()
  })

  it('when click on more info, show additional info', async () => {
    render(<IndexPage />)

    const btns = await screen.findAllByText('More info')
    userEvent.click(btns[0])

    expect(screen.getByText('The Perfumed Honeymoon')).toBeInTheDocument()
    expect(screen.getByText('Added: 2020.07.23 22:54')).toBeInTheDocument()
    expect(screen.getByText('Duration: 00:10:22')).toBeInTheDocument()
    expect(screen.getByText('Source: PornHub')).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'Actress' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Climax' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Sunny Leone' })).toBeInTheDocument()

    // expect(screen.getByText('Pornstars:')).toBeInTheDocument()
    expect(screen.queryByText('Christy Mack')).not.toBeInTheDocument()
    expect(screen.queryByText('Webcam Models:')).not.toBeInTheDocument()
  })

  it('when second click on other more info, hide the prevoius one', async () => {
    render(<IndexPage />)

    const btns = await screen.findAllByText('More info')
    userEvent.click(btns[0])
    userEvent.click(btns[1])

    // expect(screen.getByText('Source: PornHub')).not.toBeVisible()

    expect(
      screen.getByText(
        'Watch Cherry on now! - Cherry Crush, Mycherrycrush, Christy Mack, Cherry, Blowjob, Solo, Toy Porn Cherry'
      )
    ).toBeInTheDocument()
    expect(screen.getByText('Added: 2020.07.24 20:42')).toBeInTheDocument()
    expect(screen.getByText('Duration: 00:13:35')).toBeInTheDocument()
    expect(screen.getByText('Source: TNAFlix')).toBeInTheDocument()

    expect(screen.getByText('Pornstars:')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Christy Mack' })).toBeInTheDocument()
    expect(screen.getByText('Webcam Models:')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'MyCherryCrush' })).toBeInTheDocument()
  })

  it('on mobile when show tag and click on close, hide the additional info', async () => {
    render(<IndexPage />)

    const btns = await screen.findAllByText('More info')
    userEvent.click(btns[1])

    userEvent.click(screen.getByRole('button', { name: 'Close' }))

    expect(screen.queryByText('Pornstars:')).not.toBeInTheDocument()
    expect(screen.queryByText('Webcam Models:')).not.toBeInTheDocument()
  })

  it('when click on picture, start to switch pictures', async () => {
    jest.useFakeTimers()
    const spy = jest.spyOn(console, 'error')
    spy.mockImplementation(() => {})

    render(<IndexPage />)

    userEvent.click(await screen.findByAltText('1 of 5'))
    // expect(screen.findByAltText('1 of 5'))
    expect(setInterval).toHaveBeenCalledTimes(1)
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000)

    act(() => {
      // jest.runAllImmediates()
      jest.advanceTimersByTime(4000)
    })

    expect(screen.getByAltText('1 of 5')).toBeVisible()
    expect(screen.getByAltText('2 of 5')).toBeVisible()
    expect(screen.getByAltText('3 of 5')).toBeVisible()
    expect(screen.getByAltText('4 of 5')).toBeVisible()
    expect(screen.getByAltText('5 of 5')).toBeVisible()

    spy.mockRestore()
  })
  it.todo('when second click on picture, stop to switch pictures')

  it.todo('when scroll, it renders more list elements')
  // it.todo('when click on card, it starts to switch pictures')
  it.todo('when second click on the card, it stops to switch pictures')
  it.todo('when second click on an other card, it stops to switch pictures')
})
