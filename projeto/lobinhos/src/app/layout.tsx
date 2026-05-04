import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Providers from './provider'
import Header from "../components/header/page"
import "./globals.css"


const client = new QueryClient();


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="main">
        <Header />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
