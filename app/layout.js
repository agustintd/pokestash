
import { Inter } from "next/font/google";
import "./globals.css";
import { ShoppingCartProvider } from "./context/ShoppingCartContext"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PokeStash",
  description: "List of all pokemon sets and cards",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <ShoppingCartProvider>
        {children}
        </ShoppingCartProvider>
 
      </body>
      
    </html>
  );
}
