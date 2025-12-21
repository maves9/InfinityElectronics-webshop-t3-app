import "~/styles/globals.css"

import { Geist } from "next/font/google"
import { QueryProvider } from "~/providers/QueryProvider"
import { ThemeInitializer } from "~/components/ThemeInitializer"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={`${geist.variable}`} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <QueryProvider>
          <ThemeInitializer />
          {children}
        </QueryProvider>
      </body>
    </html>
  )
}
