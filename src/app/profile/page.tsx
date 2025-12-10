import Navbar from "@/component/navbar/navbar"
import { Suspense, lazy } from "react"
import Footer from "@/component/footer/footer"
import Head from "next/head"
import Loading from "@/component/loading/loading"


const Profile1 = lazy(() => import("@/component/profile1/profile1"))
const Section3 = lazy(() => import("@/component/section3/section3"))
export default function Profile() {

  return (
    <>
      <Head>
        <link
          rel="canonical"
          href={`https://centraenergioptima.com/profile`}
        />
      </Head>
    <main>
      <Navbar />
{/*Section 1*/}
            <Suspense fallback={<Loading/>}>
      <Profile1 />
    </Suspense>
    {/*Section3*/}
    <Suspense fallback={<Loading/>}>
      <Section3 />
    </Suspense>
    <Footer/>
    </main>
    </>
  )
}
