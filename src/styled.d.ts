// styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: { xs: string; sm: string; md: string; lg: string; xl: string };
    colors: { primary: string; secondary: string; gray: string };
  }
}
