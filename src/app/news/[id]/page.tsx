import Navbar from "@/component/navbar/navbar"
import { Suspense, lazy } from "react"
import Footer from "@/component/footer/footer"


const NewsId = lazy(() => import("@/component/newsid/newsid"))
const ConstructionPage = lazy(() => import("@/component/construction/construction"))

export default function NewsIdSection() {

  return (
    <main>
      <Navbar />
{/*Section 1*/}
    <Suspense fallback={<div>Loading...</div>}>
      <ConstructionPage />
    </Suspense>
    <Footer/>
    </main>
  )
}
