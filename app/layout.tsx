import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Ricky's Restaurant Dubai – Eat What Makes You Happy",
  description: "Ricky's Restaurant — finest dining and catering in Dubai. Wedding, corporate, yacht, birthday party catering. Dine-in & delivery. Located in Dubai Marina.",
  keywords: "Ricky's Restaurant, Dubai catering, wedding catering Dubai, corporate catering Dubai, restaurant Dubai Marina",
  openGraph: {
    title: "Ricky's Restaurant Dubai – Eat What Makes You Happy",
    description: "Finest dining and catering services in Dubai. Wedding, corporate, private and yacht party catering.",
    images: ['https://rickyrestaurants.com/wp-content/uploads/2024/05/img-1-676x1024.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
