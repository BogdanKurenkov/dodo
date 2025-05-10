import localFont from "next/font/local";

// Шрифт Neue Haas Unica W1G с разными весами
export const neueHaasUnica = localFont({
  src: [
    {
      path: "../../public/fonts/Neue_Haas_Unica_W1G_Medium.ttf",
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
  variable: "--font-neue-haas", // Опционально: для использования CSS переменных
});

// Шрифт Segoe ui Semibold
export const segoeUiSemibold = localFont({
  src: [
    {
      path: "../../public/fonts/segoe_ui_semibold.woff2",
      weight: "600", // Semibold обычно соответствует 600
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-segoe-ui", // Опционально: для использования CSS переменных
});

// Шрифт Rooftop (у вас уже есть)
export const Rooftop = localFont({
  src: [
    {
      path: "../../public/fonts/Rooftop-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
});
