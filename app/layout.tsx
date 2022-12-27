import '@fontsource/inter/variable.css'
import '@styles/globals.css'
import ReactQueryWrapper from './ReactQueryWrapper'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <ReactQueryWrapper>{children}</ReactQueryWrapper>
      </body>
    </html>
  )
}
