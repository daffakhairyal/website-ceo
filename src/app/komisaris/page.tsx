import Navbar from "@/component/navbar/navbar"
import { Suspense, lazy } from "react"
import Footer from "@/component/footer/footer"
import Head from "next/head"


const Komisaris = lazy(() => import("@/component/komisaris/komisaris"))
export default function KomisarisPage() {

  return (
    <>
      <Head>
        <link
          rel="canonical"
          href={`https://centraenergioptima.com/komisaris`}
        />
      </Head>
    <main>
      <Navbar />
{/*Section 2*/}
    <Suspense fallback={<div>Loading...</div>}>
      <Komisaris />
    </Suspense>
    <Footer/>
    </main>
    </>
  )
}
