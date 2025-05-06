import localFont from "next/font/local";

export const neueHaasUnica = localFont({
  src: [
    {
      path: "../../public/fonts/NeueHaasUnicaW1G-Regular.woff2",
      style: "normal",
    },
  ],
  display: "swap",
});

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

export const KazakhFallback = localFont({
  src: [
    {
      path: "../../public/fonts/segoe_ui_semibold.woff2",
      style: "normal",
    },
  ],
  display: "swap",
});
