import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'


export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
          <div className='flex flex-col justify-between min-h-screen'>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <main className='container mx-auto my-7'>{children}</main>
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
