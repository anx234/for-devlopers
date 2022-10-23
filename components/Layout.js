import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'


export default function Layout({ title, keywords, description, children }) {
  return (
    <div>

      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex flex-col justify-between min-h-screen bg-stone-50'>
      <Header />
      <main className='flex-1'>
      <div className="container mx-auto my-7">
        {children}
        </div>
        </main>
      <Footer />
      </div>
    </div>
  )
}

Layout.defaultProps = {
  title: 'Welcome to DevSpace',
  keywords: 'development, coding, programming',
  description: 'The best info and news in development',
}
