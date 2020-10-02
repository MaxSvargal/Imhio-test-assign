import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
  }
}

export const defaultTheme: DefaultTheme = {
	primaryColor: "#333",
	secondaryColor: "#666",
}