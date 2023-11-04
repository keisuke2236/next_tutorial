import './globals.css'

export const metadata = {
  title: 'ろれんすさんの App router Next.js example',
  description: 'Change Description',
}

export default function RootLayout({ children }) {
  return (
    <html lang='ja'>
      <body>
        <div className='container'>
          {children}
        </div>
      </body>
    </html>
  )
}
