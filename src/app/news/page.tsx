import Navbar from "@/component/navbar/navbar"
import { Suspense, lazy } from "react"
import Footer from "@/component/footer/footer"
import Head from "next/head"


const NewsComponent = lazy(() => import("@/component/news/news"))
export default function AllNewsPage() {

  return (
    <>
              <Head>
        <link
          rel="canonical"
          href={`https://centraenergioptima.com/news`}
        />
      </Head>
    <main>
      <Navbar />
{/*Section 2*/}
    <Suspense fallback={<div>Loading...</div>}>
      <NewsComponent />
    </Suspense>
    <Footer/>
    </main>
    </>
  )
}
