import { Html, Head, Main, NextScript } from 'next/document'
 import Link from 'next/link'
export default function Document() {
  return (
    <Html lang="en">

     <Head>
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}