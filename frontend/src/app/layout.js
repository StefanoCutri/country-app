
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

import './globals.css';

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
