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
    <p className="description">
         
 إنه عام 2022. هذا يعني أنه منذ ظهور ايفون 11 لأول مرة في عام 2019 ، رأينا بالفعل ايفون 13 و ايفون 12. (حتى أننا نبحث عن ايفون 

14 و ايفون SE 3 هذا العام). أن يكون عمرك أكثر من عامين ، لكنه قد يظل خيارًا جيدًا ، خاصة وأن أبل خفضته إلى 499 دولارًا العام الماضي. هناك العديد من العوامل التي يجب مراعاتها عند شراء ايفون جديد ، بالإضافة إلى السعر وميزانيتك الشخصية ، يجب أن تفكر في الميزات التي تحتاجها في الهاتف.
        </p>
    
    <a href="https://sevenimgs.com/%d8%ae%d9%84%d9%81%d9%8a%d8%a7%d8%aa-%d8%a7%d9%8a%d9%81%d9%88%d9%86-%d9%81%d8%ae%d9%85%d9%87/" target="_blank">خلفيات ايفون فخمة</a>
      </main>

      <Footer />
    </div>
  )
}
