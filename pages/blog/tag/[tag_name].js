import fs from "fs";
import path from "path";
import Link from "next/link";
import Layout from "@/components/Layout";
import Post from "@/components/Post";
import CategoryList from "@/components/CategoryList";
import TagList from "@/components/TagList";
import { getPosts } from "@/lib/posts";

export default function TagBlogPage({ posts, tagName, tags,categories }) {
  console.log(posts);
  console.log(tags);
  return (
    <Layout>
      <div className="border-gray-100 border-b-4 p-4 border-solid">
        <h1 className="text-2xl font-bold mb-4 py-8">記事一覧 （{tagName}）</h1>
      </div>
      <div className="flex justify-between flex-col md:flex-row">
        <div className="md:w-3/4 mr-10 w-full md:m-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-0 p-4 md:mt-4">
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/4">
          <CategoryList categories={categories} />
          <div className="mt-2">
            <TagList tags={tags} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = getPosts();

  const tags = posts.map((post) => post.frontmatter.tags);
  const reduceTags = tags.reduce(function (acc, cur) {
    return acc.concat(cur);
  });
  const resultTags = [...new Set(reduceTags)];

  const paths = resultTags.map((tag) => ({
    params: { tag_name: tag.toLowerCase() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { tag_name } }) {
  const files = fs.readdirSync(path.join("posts"));

  const posts = getPosts();
  const categories = posts.map((post) => post.frontmatter.category);
  const uniqueCategories = [...new Set(categories)];

  // Get tags for sidebar
  const tags = posts.map((post) => post.frontmatter.tags);
  const reduceTags = tags.reduce(function (acc, cur) {
    return acc.concat(cur);
  });
  const resultTags = [...new Set(reduceTags)];

  const tagPosts = [];
  posts.filter((post) => {
    post.frontmatter.tags.forEach((tag) => {
      if (tag.indexOf(tag_name.toLowerCase()) !== -1) {
        tagPosts.push(post);
      }
    });
  });

  return {
    props: {
      posts: tagPosts,
      tagName: tag_name,
      tags: resultTags,
      categories: uniqueCategories,
    },
  };
}
