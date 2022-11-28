import Head from "next/head"

import Navbar from "./Navbar"

export default function BaseLayout({ children, titulo, descripcion }) {
  return (
    <>
        <Head>
            <title>{titulo}</title>
            <meta name="description" content={descripcion} />
        </Head>
        <Navbar />
        <main className="min-h-screen bg-gray-900">
            {children}
        </main>
    </>
  )
}
