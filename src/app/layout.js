import React from "react";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/Header";
import { productsData } from "../data/products";

const font = Roboto({
  variable: "--font",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aula 02",
  icons: {
    icon: "/icons/favicon.ico",
  },
  description: "My Project Description",

};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={font.variable}>
        <Header 
        title="Turcotrônicos" 
        subtitle="A melhor loja para sua vida digital!" 
        totalProducts={`Total de produtos: ${productsData.length}`}/>
        {children}
      </body>
    </html>
  );
}
