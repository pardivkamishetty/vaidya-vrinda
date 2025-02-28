// // import './globals.css';
// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import { ThemeProvider } from '@/components/theme-provider';
// import { Toaster } from '@/components/ui/toaster';
// import { Toaster as SonnerToaster } from '@/components/ui/sonner';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Lung Cancer Detection Dashboard',
//   description: 'A modern dashboard for healthcare professionals and researchers',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={inter.className}>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="system"
//           enableSystem
//           disableTransitionOnChange
//         >
//           {children}
//           <Toaster />
//           <SonnerToaster />
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as SonnerToaster } from '@/components/ui/sonner';
import { SidebarProvider } from '@/components/ui/sidebar'; // ✅ Import SidebarProvider

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lung Cancer Detection Dashboard',
  description: 'A modern dashboard for healthcare professionals and researchers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider> {/* ✅ Wrap children inside SidebarProvider */}
            {children}
            <Toaster />
            <SonnerToaster />
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
