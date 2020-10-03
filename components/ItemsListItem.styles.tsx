import styled from 'styled-components'

export const ItemListContainer = styled.li<{ active: boolean }>`
  list-style-type: none;
  color: white;
  min-height: ${({ active }) => (active ? 580 : 0)}px;
  border: 1px solid ${({ active }) => (active ? 'red' : 'black')};
`

export const ItemListActiveContainer = styled(ItemListContainer)`
  min-height: 640px;
  border: 1px solid red;
`

export const Flex = styled.div`
  display: flex;
`

export const ItemListPicContainer = styled.div`
  display: flex;
`

export const ItemListPic = styled.img`
  min-width: 100%;
  min-height: 200px;
  object-fit: cover;
`

export const ItemListDescText = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ItemListInfoRow = styled.div<{ inline: boolean }>`
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ inline }) => (inline ? 'row' : 'column')};
  font-size: ${({ inline }) => (inline ? 0.7 : 0.9)}rem;
  line-height: 1.34rem;
  padding: 0.5em 0;
`

export const ItemListOutline = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background: white;
  left: 0;
  line-height: 2rem;
  /* padding: 2em 1em; */

  background: #ccc;
  color: black;
  width: 100%;
  left: 0;
  top: 0;
  @media (min-width: 480px) {
    position: absolute;
    margin-top: 2rem;
    left: 0;
    top: auto;
    height: auto;
    min-height: 200px;
  }
`

export const TagsList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: hidden;
  max-height: 2em;
  margin: 0.5em -0.25em;
`

export const TagButton = styled.button`
  max-height: 2.1em;
  background: white;
  border: 0;
  padding: 0.25em;
  margin: 0.25em;
`

export const MoreBtn = styled.button`
  max-height: 2.1em;
  background: cyan;
  color: black;
  border: 0;
  padding: 0.25em;
  margin: 0.25em;
  display: block;
  width: 100%;
`

export const CloseBtn = styled.button`
  max-height: 2.1em;
  background: cyan;
  color: black;
  border: 0;
  padding: 0.25em;
  margin: 0.25em;
  display: block;
  width: 2em;
  height: 2em;
`
