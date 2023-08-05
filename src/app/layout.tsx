import './globals.css'
import type { Metadata } from 'next'
import { Caveat } from 'next/font/google'
import {ReactNode} from "react";

const font = Caveat({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'QuizRace',
  description: 'Ultimate Quiz Competition',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {

  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
