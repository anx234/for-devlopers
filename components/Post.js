import Link from 'next/link'
import Image from 'next/image'
import CategoryLabel from './CategoryLabel'
import TagLabel from './TagLabel'

export default function Post({ post, compact }) {
  return (
    <div className='w-full py-4 border-b-4 border-gray-100 border-solid'>
      
      <div className='flex items-center'>
        {/* <date className="mr-4 text-gray-400">{post.frontmatter.date}</date> */}
        <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
      </div>

      <div className=''>
        <Link href={`/blog/${post.slug}`}>
          <a className='hover:opacity-8 text-xl'>
            {post.frontmatter.title}
          </a>
        </Link>

        <div className="tags-article flex flex-wrap mt-2">
            {post.frontmatter.tags && post.frontmatter.tags.length > 0 && post.frontmatter.tags.map((tag, index) => {
              return (
                <TagLabel key={index}>{tag}</TagLabel>
              )
            })}
          </div>
      </div>

    </div>
  )
}
