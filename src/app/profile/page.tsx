import Navbar from "@/component/navbar/navbar"
import { Suspense, lazy } from "react"
import Footer from "@/component/footer/footer"


const Profile1 = lazy(() => import("@/component/profile1/profile1"))
const Section3 = lazy(() => import("@/component/section3/section3"))
const ConstructionPage = lazy(() => import("@/component/construction/construction"))

export default function Profile() {

  return (
    <main>
      <Navbar />
{/*Section 1*/}
        <Suspense fallback={<div>Loading...</div>}>
      <ConstructionPage />
    </Suspense>
    {/*Section3*/}
    {/* <Suspense fallback={<div>Loading...</div>}>
      <Section3 />
    </Suspense> */}
    <Footer/>
    </main>
  )
}
