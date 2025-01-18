import { getPosts } from "@/app/get-posts"
import { MetadataRoute } from "next"

export const runtime = "edge"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = getPosts()
  const blogPosts = posts.map((post) => {
    return {
      url: `https://omeizaowuda.com/blog/${post.slug}`,
      lastModified: new Date(),
    }
  })

  return [
    {
      url: "https://omeizaowuda.com",
      lastModified: new Date(),
    },
    {
      url: "https://omeizaowuda.com/portfolio",
      lastModified: new Date(),
    },
    {
      url: "https://omeizaowuda.com/resume",
      lastModified: new Date(),
    },
    {
      url: "https://omeizaowuda.com/blog",
      lastModified: new Date(),
    },
    ...blogPosts,
  ]
}
