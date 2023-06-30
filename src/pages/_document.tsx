import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={{overflowX:'hidden'}} id='Body' className=' min-h-screen'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
