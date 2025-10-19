import Navbar from "@/component/navbar/navbar"
import { Suspense, lazy } from "react"
import Footer from "@/component/footer/footer"


const NewsComponent = lazy(() => import("@/component/news/news"))
export default function AllNewsPage() {

  return (
    <main>
      <Navbar />
{/*Section 2*/}
    <Suspense fallback={<div>Loading...</div>}>
      <NewsComponent />
    </Suspense>
    <Footer/>
    </main>
  )
}
