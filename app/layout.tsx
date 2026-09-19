import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Marquee from "@/components/layout/Marquee";
import ThemeProvider from "@/components/providers/ThemeProvider";
import "./globals.css";
import ScrollProgress from "@/components/layout/ScrollProgress";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <ScrollProgress />
          <Header />

          {children}

          <Marquee />

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}