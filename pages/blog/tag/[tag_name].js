import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Layout from '@/components/Layout'
import Post from '@/components/Post'
import CategoryList from '@/components/CategoryList'
import Search from '@/components/Search'
import matter from 'gray-matter'
import { getPosts } from '@/lib/posts'

export default function TagBlogPage({ posts, tagName,tags }) {
  console.log(posts)
  console.log(tags)
  return (
    <Layout>
      <div className='flex justify-between'>
        <div className='w-3/4 mr-10'>
          <h1 className='border-gray-300 border-b-4 text-center p-2 my-4 border-solid text-xl mb-4'>
            記事一覧 （{tagName}）
          </h1>

          <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-4'>
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>
        </div>

      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const posts = getPosts()


  const  tags = posts.map((post) => post.frontmatter.tags)
  const reduceTags = tags.reduce(function (acc, cur) {
    return acc.concat(cur);
  });
 const resultTags = [...new Set(reduceTags)]

  const paths = resultTags.map((tag) => ({
    params: { tag_name: tag.toLowerCase() },
  })
  )

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { tag_name } }) {
  const files = fs.readdirSync(path.join('posts'))

  const posts = getPosts()

  // Get tags for sidebar
  const  tags = posts.map((post) => post.frontmatter.tags)
  const reduceTags = tags.reduce(function (acc, cur) {
    return acc.concat(cur);
  });
 const resultTags = [...new Set(reduceTags)]

  // Filter posts by category
  /*
  const tagPosts[]
  posts.filter(
   post=> post.frontmatter.tags.forEach(function(tag){
      if( tag === tag_name)
      {tagPosts.push}
    })
   
  )
  */
 /*
  const tagPosts = posts.filter(post => {
    post.frontmatter.tags.forEach(function(tag){
      if(resultTags.indexOf(tag_name) !== -1){
        return true
      }
      else{
        return false
      }
    }
    
    )
  });
  */

  const tagPosts = [];
posts.filter(post => {
  post.frontmatter.tags.forEach(tag => {
  if(tag.indexOf(tag_name.toLowerCase())!== -1) {
    tagPosts.push(post);
  }
 });
});



  

  return {
    props: {
      posts: tagPosts,
      tagName: tag_name,
      tags: resultTags,
    },
  }
}
