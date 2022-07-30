import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-gray-100 shadow w-full'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link href='/'>
          <a className='flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0'>
            <span className='ml-3 text-xl'>For Developer</span>
          </a>
        </Link>
      </div>
    </footer>
  )
}