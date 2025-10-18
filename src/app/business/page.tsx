import Navbar from "@/component/navbar/navbar"
import { Suspense, lazy } from "react"
import Footer from "@/component/footer/footer"


const Business1 = lazy(() => import("@/component/business1/business1"))
const ConstructionPage = lazy(() => import("@/component/construction/construction"))
export default function Business(){

  return (
    <main>
      <Navbar />
{/*Section 1*/}

    {/*Section3*/}
    <Suspense fallback={<div>Loading...</div>}>
      <ConstructionPage/>
    </Suspense>
    <Footer/>
    </main>
  )
}
