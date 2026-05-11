import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import 'fumadocs-ui/style.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    template: '%s | Optima AI',
    default: 'Optima AI',
  },
  description: 'OptimaAi — AI-powered business intelligence platform documentation',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
