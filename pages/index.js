import fs from "fs";
import path from "path";
import Layout from "@/components/Layout";
import Post from "@/components/Post";
import Pagination from "@/components/Pagination";
import CategoryList from "@/components/CategoryList";
import TagList from "@/components/TagList";
import { POSTS_PER_PAGE } from "@/config/index";
import { getPosts } from "@/lib/posts";

export default function BlogPage({
  posts,
  numPages,
  currentPage,
  categories,
  tags,
}) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a]);
  console.log(tags);
  return (
    <Layout>
      <div className="border-gray-100 border-b-4 p-4 border-solid">
        <div className="container mx-auto my-7">
          <h1 className="text-2xl font-bold mb-4 py-4">記事一覧</h1>
        </div>
      </div>
      <div className="container mx-auto my-7 mt-0 md:mt-7">
        <div className="flex justify-between flex-col md:flex-row">
          <div className="md:w-3/4 mr-10 w-full md:m-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-0 mb-4 p-4 md:mt-4">
              {posts.map((post, index) => (
                <Post key={index} post={post} />
              ))}
            </div>

            <Pagination currentPage={currentPage} numPages={numPages} />
          </div>

          <div className="w-full md:w-1/4">
            <CategoryList categories={categories} />
              <TagList tags={tags} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const page = parseInt((params && params.page_index) || 1);

  const files = fs.readdirSync(path.join("posts"));

  const posts = getPosts();

  // Get categories for sidebar
  const categories = posts.map((post) => post.frontmatter.category);
  const uniqueCategories = [...new Set(categories)];

  const tags = posts.map((post) => post.frontmatter.tags);
  const reduceTags = tags.reduce(function (acc, cur) {
    return acc.concat(cur);
  });
  const resultTags = [...new Set(reduceTags)];

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE);
  const pageIndex = page - 1;
  const orderedPosts = posts.slice(
    pageIndex * POSTS_PER_PAGE,
    (pageIndex + 1) * POSTS_PER_PAGE
  );

  return {
    props: {
      posts: orderedPosts,
      numPages,
      currentPage: page,
      categories: uniqueCategories,
      tags: resultTags,
    },
  };
}
