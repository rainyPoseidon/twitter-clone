import Head from 'next/head'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Twitter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='min-h-screen flex max-w-[1500px]'>
        <Sidebar/>
        <Feed/>
        
        {/* widgets */}

        {/* Modal */}
      </main>
    </div>
  )
}