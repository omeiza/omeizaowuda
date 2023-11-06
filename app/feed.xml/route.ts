import { getPosts } from "@/app/get-posts"

export function GET() {
  const posts = getPosts()
  const max = 100 // max returned posts
  return new Response(
    `<?xml version="1.0" encoding="utf-8"?>
  <feed xmlns="http://www.w3.org/2005/Atom">
    <title>Omeiza Owuda</title>
    <subtitle>Blog</subtitle>
    <link href="https://omeizaowuda.me/feed" rel="self"/>
    <link href="https://omeizaowuda.me/"/>
    <updated>${posts[0].date}</updated>
    <id>https://omeizaowuda.me/</id>
    <author>
      <name>Omeiza Owuda</name>
      <email>owudaomeiza@gmail.com</email>
    </author>
    ${posts.slice(0, max).reduce((acc, post) => {
      const dateMatch = post.date.match(/\d{4}/)
      if (!dateMatch) return ""
      return `${acc}
        <entry>
          <id>${post.id}</id>
          <title>${post.title}</title>
          <link href="https://omeizaowuda.me/blog/${post.slug}"/>
          <updated>${post.date}</updated>
        </entry>`
    }, "")}
  </feed>`,
    {
      headers: {
        "Content-Type": "application/atom+xml; charset=utf-8",
      },
    }
  )
}
