import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/main-header/main-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nextlevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
