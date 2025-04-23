import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      glass_button: string;
      orange: string;
    };
    breakpoints: {
      sm: string;
      m: string;
      md: string;
      lg: string;
      xl: string;
    };
    mixins: {
      flexCenter: string;
      flexBetween: string;
    };
    font: {
      rooftop: string;
      family: string;
    };
    breakpoints: {
      sm: string;
      m: string;
      lg: string;
      xl: string;
    };
  }
}
