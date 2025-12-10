import Navbar from "@/component/navbar/navbar"
import { Suspense, lazy } from "react"
import Footer from "@/component/footer/footer"
import Head from "next/head"
import Loading from "@/component/loading/loading"


const Legal = lazy(() => import("@/component/legal/legal"))
export default function GalleryPage() {

  return (
    <>
          <Head>
        <link
          rel="canonical"
          href={`https://centraenergioptima.com/legal`}
        />
      </Head>
    <main>
      <Navbar />
{/*Section 2*/}
        <Suspense fallback={<Loading/>}>
      <Legal />
    </Suspense>
    <Footer/>
    </main>
    </>
  )
}
