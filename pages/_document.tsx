import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html className="light">
            <Head />
            <body className="dark:bg-gray-800 bg-slate-50 mx-2">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}