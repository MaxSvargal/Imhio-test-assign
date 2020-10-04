import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    backgroundColor: string
    blueColor: string
    foregroundColor: string
    darkGrayColor: string
    pinkColor: string
    whiteColor: string
    darkestColor: string
    greenColor: string
    primaryBtnColor: string
  }
}

export const defaultTheme: DefaultTheme = {
  greenColor: 'rgb(50,165,103)',
  backgroundColor: 'rgb(0,0,0)',
  blueColor: 'rgb(9,89,207)',
  foregroundColor: 'rgb(66,66,69)',
  darkGrayColor: 'rgb(44,44,47)',
  pinkColor: 'rgb(243,7,95)',
  whiteColor: 'rgb(255, 255, 255)',
  darkestColor: 'rgb(0,0,0)',
  primaryBtnColor: 'rgb(100,100,100)'
}
