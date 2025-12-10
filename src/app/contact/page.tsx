import Navbar from "@/component/navbar/navbar"
import { Suspense, lazy } from "react"
import Footer from "@/component/footer/footer"
import Head from "next/head"
import Loading from "@/component/loading/loading"


const Contact = lazy(() => import("@/component/contact/contact"))
export default function AllNewsPage() {

  return (
    <>
              <Head>
        <link
          rel="canonical"
          href={`https://centraenergioptima.com/contact`}
        />
      </Head>
    <main>
      <Navbar />
{/*Section 2*/}
    <Suspense fallback={<Loading/>}>
      <Contact />
    </Suspense>
    <Footer/>
    </main>
    </>
  )
}
