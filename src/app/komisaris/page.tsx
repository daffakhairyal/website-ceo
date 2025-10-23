import Navbar from "@/component/navbar/navbar"
import { Suspense, lazy } from "react"
import Footer from "@/component/footer/footer"


const Komisaris = lazy(() => import("@/component/komisaris/komisaris"))
export default function KomisarisPage() {

  return (
    <main>
      <Navbar />
{/*Section 2*/}
    <Suspense fallback={<div>Loading...</div>}>
      <Komisaris />
    </Suspense>
    <Footer/>
    </main>
  )
}
