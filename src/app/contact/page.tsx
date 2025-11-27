import Navbar from "@/component/navbar/navbar"
import { Suspense, lazy } from "react"
import Footer from "@/component/footer/footer"
import Head from "next/head"


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
    <Suspense fallback={<div>Loading...</div>}>
      <Contact />
    </Suspense>
    <Footer/>
    </main>
    </>
  )
}
