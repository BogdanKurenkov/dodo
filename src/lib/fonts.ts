import localFont from "next/font/local";

export const neueHaasUnica = localFont({
  src: [
    {
      path: "../../public/fonts/Neue_Haas_Unica_W1G_Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueHaasUnicaW1G.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-neue-haas",
});

export const segoeUiSemibold = localFont({
  src: [
    {
      path: "../../public/fonts/Segoe_UI.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/segoe_ui_semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-segoe-ui",
});
