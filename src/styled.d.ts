import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
    accentColor: string;
  }
}

// TypeScript definitions for styled-components can be extended by using declaration merging
// So the first step is creating a declarations file.
// Let's name it styled.d.ts for example.

// DefaultTheme is being as an interface of props
