import { Roboto } from "next/font/google";

export const roboto = Roboto({
  weight: ["300", "400", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});
