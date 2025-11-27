import Navbar from "@/component/navbar/navbar"
import { Suspense, lazy } from "react"
import Footer from "@/component/footer/footer"
import Head from "next/head"


const Business1 = lazy(() => import("@/component/business1/business1"))
export default function Business(){

  return (
    <>
          <Head>
        <link
          rel="canonical"
          href={`https://centraenergioptima.com/business`}
        />
      </Head>
    <main>
      <Navbar />
{/*Section 1*/}

    {/*Section3*/}
    <Suspense fallback={<div>Loading...</div>}>
      <Business1/>
    </Suspense>
    <Footer/>
    </main>
    </>
  )
}
