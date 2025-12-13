import "~/styles/globals.css"

import { type Metadata } from "next"
import { Geist } from "next/font/google"
import { Navigation } from "~/components/Navigation"
import { Footer } from "~/components/Footer"
import { QueryProvider } from "~/providers/QueryProvider"
import { ThemeInitializer } from "~/components/ThemeInitializer"

export const metadata: Metadata = {
  title: "InfinityElectronics - Your One-Stop Shop",
  description: "Discover amazing products at unbeatable prices",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="flex min-h-screen flex-col">
        <QueryProvider>
          <ThemeInitializer />
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  )
}
