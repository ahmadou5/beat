import { Inter, Numans, Nunito, Fenix, Federo} from "next/font/google";
import "./globals.css";
import { EthProvider } from "@/provider";
import { BeatContextProvider } from "@/context/context";

const inter = Inter({ subsets: ["latin"] });
const neucha = Numans({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <EthProvider>
        <BeatContextProvider>
          <body className={neucha.className}>{children}</body>
        </BeatContextProvider>
      </EthProvider>
    </html>
  );
}
