import Navbar from "@/component/navbar/navbar"
import { Suspense, lazy } from "react"
import Footer from "@/component/footer/footer"
import Head from "next/head"
import Loading from "@/component/loading/loading"


const Gallery = lazy(() => import("@/component/gallery/gallery"))
export default function GalleryPage() {

  return (
    <>
          <Head>
            <link
              rel="canonical"
              href={`https://centraenergioptima.com/gallery`}
            />
          </Head>
    <main>
      <Navbar />
{/*Section 2*/}
        <Suspense fallback={<Loading/>}>
      <Gallery />
    </Suspense>
    <Footer/>
    </main>
    </>
  )
}
