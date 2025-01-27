import type { Metadata } from "next";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "./globals.css";
import ConvexClerkProvider from "./components/providers/ConvexClerkProvider";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { Toaster } from "react-hot-toast";



export const metadata: Metadata = {
  title: "Vhire",
  description: "Conduct interviews with clarity and codes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={` antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
                <main className="">{children}</main>

              <div>
              </div>
          </ThemeProvider>
          <Toaster />
        </body>
      </html>
    </ConvexClerkProvider>
  );
}