import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'
import Layout from '@/components/Layout'
import CategoryList from '@/components/CategoryList'
import Search from '@/components/Search'
import CategoryLabel from '@/components/CategoryLabel'

import hljs from 'highlight.js'
import 'highlight.js/styles/vs2015.css';
marked.setOptions({
  langPrefix: '',
  highlight: function (code, lang) {
    return hljs.highlightAuto(code, [lang]).value
  }
})

export default function PostPage({
  frontmatter: { title, category, date, tags, author, author_image },
  content,
  slug,
}) {
  return (
    <Layout title={title}>
      <Link href='/blog'>Go Back</Link>
      <div className='w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6'>
        <div className='flex justify-between items-center mt-4'>
          <h1 className='text-5xl mb-7'>{title}</h1>
          <CategoryLabel>{category}</CategoryLabel>
          <div className="tags-article">
            {tags && tags.length > 0 && tags.map(tag => {
              return (
                <button>{tag}</button>
              )
            })}
          </div>
        </div>


        <div className='flex justify-between items-center bg-gray-100 p-2 my-8'>
          <div className='mr-4'>{date}</div>
        </div>

        <div className='blog-text mt-2'>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)
  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  }
}
