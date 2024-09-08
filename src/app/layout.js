import "./globals.css";
import { Inter, Roboto_Mono, Honk, Tomorrow } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

const honk_sans = Honk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-honk-sans'
});

const tomorrow_sans = Tomorrow({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-tomorrow-sans'
});

export const metadata = {
  title: "ByteJutsu",
  description: "Welcome to ByteJutsu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable} ${honk_sans.variable} ${tomorrow_sans.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
