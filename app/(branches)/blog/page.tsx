import { getPosts } from "@/app/get-posts"
import formatDate from "@/app/utils/formatDate"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Blog",
    description: "Reflections on life, AI, and software engineering",
    openGraph: {
        title: "Blog",
        url: "https://omeizaowuda.com/blog",
        description: "Reflections on life, AI, and software engineering",
        images: [
            {
                url: "https://omeizaowuda.com/uploads/omeiza-img.jpg",
                alt: "Omeiza Owuda",
            },
        ],
    }
}

export default function Blog() {
  const posts = getPosts()

  return (
    <>
      <h1>Blog</h1>
      {/* <p>I've decided to wipe the slate clean.</p>
      <p>This site used to be a collection of scattered posts - bits and pieces from different times in my journey. Some of it still matters, some of it doesn’t. But instead of leaving behind clutter, I’m starting fresh.</p>
      <p>From here on, everything I write will focus on the ideas that matter most to me (and maybe to you too):</p>
      <ul>
        <li><strong>Life</strong> - lessons from work, creativity, and everyday struggles.</li>
        <li><strong>AI</strong> - how it's reshaping how we live and build.</li>
        <li><strong>Software Engineering</strong> - practical ways to write better code and thrive in tech.</li>
      </ul>
      <p>Think of this page as a placeholder, a marker for a new beginning. The real writing is coming soon.</p>
      <p>Stay tuned - and thanks for being here from the start.</p> */}
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