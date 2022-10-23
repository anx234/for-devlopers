import fs from "fs";
import path from "path";
import Link from "next/link";
import Layout from "@/components/Layout";
import Post from "@/components/Post";
import CategoryList from "@/components/CategoryList";
import matter from "gray-matter";
import { getPosts } from "@/lib/posts";
import TagList from "@/components/TagList";

export default function CategoryBlogPage({
  posts,
  categoryName,
  categories,
  tags,
}) {
  return (
    <Layout>
      <div className="border-gray-100 border-b-4 p-4 border-solid">
        <h1 className="text-2xl font-bold mb-4 py-8">
          記事一覧 （{categoryName}）
        </h1>
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

  const categories = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return frontmatter.category.toLowerCase();
  });

  const paths = categories.map((category) => ({
    params: { category_name: category },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { category_name } }) {
  const files = fs.readdirSync(path.join("posts"));

  const posts = getPosts();

  // Get categories for sidebar
  const categories = posts.map((post) => post.frontmatter.category);
  const uniqueCategories = [...new Set(categories)];

  // Filter posts by category
  const categoryPosts = posts.filter(
    (post) => post.frontmatter.category.toLowerCase() === category_name
  );

  const tags = posts.map((post) => post.frontmatter.tags);
  const reduceTags = tags.reduce(function (acc, cur) {
    return acc.concat(cur);
  });
  const resultTags = [...new Set(reduceTags)];

  return {
    props: {
      posts: categoryPosts,
      categoryName: category_name,
      categories: uniqueCategories,
      tags: resultTags,
    },
  };
}
