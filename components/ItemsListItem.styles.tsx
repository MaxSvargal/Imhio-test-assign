import styled from 'styled-components'

export const ItemListContainer = styled.li`
  min-width: 240px;
  max-width: 320px;
  list-style-type: none;
  color: white;
`

export const ItemListActiveContainer = styled(ItemListContainer)`
  min-height: 640px;
  border: 1px solid red;
`

export const GalleryContainer = styled.div`
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

export const ItemListInfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  font-size: 0.8em;
  padding: 0.5em 0;
`

export const ItemListOutline = styled.div`
  position: absolute;
  left: 0;
  margin-top: 5rem;
  padding: 2em 1em;
  min-height: 200px;
  background: #ccc;
  color: black;
  width: 100%;
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
