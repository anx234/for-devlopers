import Link from 'next/link'
import Image from 'next/image'
import Search from '@/components/Search'
export default function Header() {
  return (
    <header className='text-gray-100 shadow w-full border-l-4 border-gray-400'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between'>
        <Link href='/'>
          <a className='flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0'>
            <span className='text-2xl text-emerald-500 logo'>For Developers</span>
          </a>
        </Link>
        <Search />
      </div>
    </header>
  )
}
