import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
    <a href="https://sevenimgs.com/%d8%ae%d9%84%d9%81%d9%8a%d8%a7%d8%aa-%d8%a7%d9%8a%d9%81%d9%88%d9%86-%d9%81%d8%ae%d9%85%d9%87/" target="_blank">خلفيات ايفون فخمة</a>
      </main>

      <Footer />
    </div>
  )
}
