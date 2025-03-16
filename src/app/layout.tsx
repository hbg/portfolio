import './globals.css';
import { metadata } from './metadata';
import Navbar from "@/components/Navbar";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
