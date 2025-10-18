import Navbar from "@/component/navbar/navbar"
import { Suspense, lazy } from "react"
import Footer from "@/component/footer/footer"


const Contact = lazy(() => import("@/component/contact/contact"))
const ConstructionPage = lazy(() => import("@/component/construction/construction"))
export default function AllNewsPage() {

  return (
    <main>
      <Navbar />
{/*Section 2*/}
    <Suspense fallback={<div>Loading...</div>}>
      <ConstructionPage />
    </Suspense>
    <Footer/>
    </main>
  )
}
