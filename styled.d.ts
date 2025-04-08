import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      glass_button: string;
      orange: string;
    };
    mixins: {
      flexCenter: string;
      flexBetween: string;
    };
  }
}
