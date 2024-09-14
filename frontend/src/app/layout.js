import localFont from 'next/font/local';
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header>
          <nav>
            <h1>Country Info App</h1>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2024 Country Info App</p>
        </footer>
      </body>
    </html>
  );
}
