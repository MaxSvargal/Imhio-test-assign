import styled from 'styled-components'

export const ItemListContainer = styled.li<{ active: boolean }>`
  color: ${({ theme }) => theme.whiteColor};
  list-style-type: none;
  min-height: ${({ active }) => (active ? 525 : 0)}px;
`

export const ItemListContentBox = styled.div<{ active: boolean }>`
  background: ${({ active, theme }) => (active ? theme.darkestColor : theme.foregroundColor)};
  border: 2px solid ${({ active, theme }) => (active ? theme.pinkColor : theme.foregroundColor)};
  border-bottom: 2px solid
    ${({ active, theme }) => (active ? theme.darkestColor : theme.foregroundColor)};
  min-height: ${({ active }) => (active ? 310 : 0)}px;
  z-index: 2;
  padding: 8px;
  position: relative;
`
