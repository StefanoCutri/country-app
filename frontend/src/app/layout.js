import localFont from 'next/font/local';

import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

import './globals.css';

// Import local fonts
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Country Info App',
  description: 'App providing detailed information about countries',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <Header />

        <main>{children}</main>
        <Footer />


      </body>
    </html>
  );
}
