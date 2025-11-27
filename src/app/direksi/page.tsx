import Navbar from "@/component/navbar/navbar"
import { Suspense, lazy } from "react"
import Footer from "@/component/footer/footer"
import Head from "next/head"


const Direksi = lazy(() => import("@/component/direksi/direksi"))
export default function DireksiPage() {

  return (
    <>
      <Head>
        <link
          rel="canonical"
          href={`https://centraenergioptima.com/direksi`}
        />
      </Head>
    <main>
      <Navbar />
{/*Section 2*/}
    <Suspense fallback={<div>Loading...</div>}>
      <Direksi />
    </Suspense>
    <Footer/>
    </main>
    </>
  )
}
