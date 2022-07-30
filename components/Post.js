import Link from 'next/link'
import Image from 'next/image'
import CategoryLabel from './CategoryLabel'

export default function Post({ post, compact }) {
  return (
    <div className='w-full py-2 border-b-4 border-gray-100 border-solid'>
      
      <div className='flex items-center'>
        {/* <date className="mr-4 text-gray-400">{post.frontmatter.date}</date> */}
        <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
      </div>

      <div className=''>
        <Link href={`/blog/${post.slug}`}>
          <a className='hover:text-sky-500 text-xl'>
            {post.frontmatter.title}
          </a>
        </Link>
      </div>

    </div>
  )
}
