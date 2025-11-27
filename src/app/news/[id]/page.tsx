"use client";

import { useParams, useRouter } from "next/navigation";
import Head from "next/head";
import Navbar from "@/component/navbar/navbar";
import { Suspense, lazy } from "react";
import Footer from "@/component/footer/footer";

const NewsId = lazy(() => import("@/component/newsid/newsid"));

export default function NewsIdSection() {
const params = useParams();
const id = params.id;

  const canonicalUrl = `https://centraenergioptima.com/news/${id}`;

  return (
    <>
      <Head>
        {id && (
          <link
            rel="canonical"
            href={canonicalUrl}
          />
        )}
      </Head>
      <main>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <NewsId />
        </Suspense>
        <Footer />
      </main>
    </>
  );
}
