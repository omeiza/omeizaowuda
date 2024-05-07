import { getPosts } from "@/app/get-posts"
import formatDate from "@/app/utils/formatDate"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Blog",
    description: "Record of personal reflections and technical observations",
    openGraph: {
        title: "Blog",
        url: "https://omeizaowuda.me/blog",
        description: "Record of personal reflections and technical observations",
        images: [
            {
                url: "https://omeizaowuda.me/uploads/social-og-img.jpg",
            },
        ],
    },
}

export default function Blog() {
  const posts = getPosts()

  return (
    <>
      <h1>Blog</h1>
      <ul className="plainlist post-list">
        {posts
          .filter((post) => !post.hidden)
          .sort((lhs, rhs) => rhs.date.localeCompare(lhs.date))
          .map((post) => {
            return (
              <li className="post-list-item" key={post.slug}>
                <Link className="plainlink" href={`/blog/${post.slug}`}>
                  <span>{post.title}</span>
                  <br />
                  <span className="sans meta small">
                    {formatDate(post.date)}
                  </span>
                </Link>
              </li>
            )
          })}
      </ul>
    </>
  )
}
