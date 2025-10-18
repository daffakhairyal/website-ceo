import Navbar from "@/component/navbar/navbar"
import { Suspense, lazy } from "react"
import Footer from "@/component/footer/footer"


const Section22 = lazy(() => import("@/component/section2/section2"))
const Section1 = lazy(() => import("@/component/section1/section1"))
const Section3 = lazy(() => import("@/component/section3/section3"))
const GalleryHome = lazy(() => import("@/component/galleryhome/galleryhome"))
export default function HeroSection() {

  return (
    <main>
      <Navbar />
{/*Section 1*/}
        <Suspense fallback={<div>Loading...</div>}>
      <Section1 />
    </Suspense>
{/*Section 2*/}
    <Suspense fallback={<div>Loading...</div>}>
      <Section22 />
    </Suspense>
    {/*Section 2*/}
    <Suspense fallback={<div>Loading...</div>}>
      <Section3 />
    </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
      <GalleryHome />
    </Suspense>
    <Footer/>
    </main>
  )
}
