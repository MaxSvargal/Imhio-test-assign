import styled from 'styled-components'

export const ItemsListBox = styled.ul`
  background: ${(props) => props.theme.primaryColor};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 2em;
  padding: 0.5em;
`
