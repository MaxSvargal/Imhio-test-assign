import styled from 'styled-components'

export const TagButton = styled.button<{ variant: 'default' | 'greenColor' | 'blueColor' }>`
  max-height: 2em;
  background: ${({ theme, variant }) =>
    variant === 'default' ? theme.primaryBtnColor : theme[variant]};
  color: ${({ theme }) => theme.whiteColor};
  border: 0;
  padding: 4px;
  margin: 4px;
  border-radius: 4px;
`
