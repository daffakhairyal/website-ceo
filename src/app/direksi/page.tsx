import Navbar from "@/component/navbar/navbar"
import { Suspense, lazy } from "react"
import Footer from "@/component/footer/footer"
import Head from "next/head"
import Loading from "@/component/loading/loading"


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
    <Suspense fallback={<Loading/>}>
      <Direksi />
    </Suspense>
    <Footer/>
    </main>
    </>
  )
}
