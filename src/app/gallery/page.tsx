import Navbar from "@/component/navbar/navbar"
import { Suspense, lazy } from "react"
import Footer from "@/component/footer/footer"


const Gallery = lazy(() => import("@/component/gallery/gallery"))
export default function GalleryPage() {

  return (
    <main>
      <Navbar />
{/*Section 2*/}
    <Suspense fallback={<div>Loading...</div>}>
      <Gallery />
    </Suspense>
    <Footer/>
    </main>
  )
}
