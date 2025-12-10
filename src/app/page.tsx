import Navbar from "@/component/navbar/navbar"
import { Suspense, lazy } from "react"
import Footer from "@/component/footer/footer"
import Head from "next/head"
import Loading from "@/component/loading/loading"


const Section22 = lazy(() => import("@/component/section2/section2"))
const Section1 = lazy(() => import("@/component/section1/section1"))
const Section3 = lazy(() => import("@/component/section3/section3"))
const GalleryHome = lazy(() => import("@/component/galleryhome/galleryhome"))
const GoldPrice = lazy(()=>import("@/component/gold-price/gold-price"))
export default function HeroSection() {

  return (
    <>
      <Head>
        <link
          rel="canonical"
          href={`https://centraenergioptima.com/`}
        />
      </Head>
    <main>
      <Navbar />
{/*Section 1*/}
        <Suspense fallback={<Loading/>}>
      <Section1 />
    </Suspense>
{/*Section Harga Emas*/}
{/* <Suspense fallback={<Loading/>}>
<GoldPrice/>
</Suspense> */}
{/*Section 2*/}
    <Suspense fallback={<Loading/>}>
      <Section22 />
    </Suspense>
    {/*Section 2*/}
    <Suspense fallback={<Loading/>}>
      <Section3 />
    </Suspense>
       <Suspense fallback={<Loading/>}>
      <GalleryHome />
    </Suspense>
    <Footer/>
    </main>
    </>
  )
}
