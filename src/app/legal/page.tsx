import Navbar from "@/component/navbar/navbar"
import { Suspense, lazy } from "react"
import Footer from "@/component/footer/footer"


const Legal = lazy(() => import("@/component/legal/legal"))
export default function GalleryPage() {

  return (
    <main>
      <Navbar />
{/*Section 2*/}
    <Suspense fallback={<div>Loading...</div>}>
      <Legal />
    </Suspense>
    <Footer/>
    </main>
  )
}
