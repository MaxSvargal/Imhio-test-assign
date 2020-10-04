import styled from 'styled-components'

export const ItemsListBox = styled.ul`
  background: ${(props) => props.theme.foregroundColor};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  position: relative;
`
