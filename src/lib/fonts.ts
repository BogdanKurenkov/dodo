import localFont from "next/font/local";

export const neueHaasUnica = localFont({
  src: [
    {
      path: "../../public/fonts/NeueHaasUnica-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueHaasUnica-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueHaasUnica-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueHaasUnica-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueHaasUnica-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
});
