import './globals.css'

export const metadata = {
  title: 'Patrick Miller - Software Designer & Consulting',
  description: 'Software Designer and Computer Science Consulting for Actuarial Catastrophe Modelling',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
