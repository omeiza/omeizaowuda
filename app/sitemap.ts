import { getPosts } from "@/app/get-posts"
import { MetadataRoute } from "next"

export const runtime = "edge"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = getPosts()
  const blogPosts = posts.map((post) => {
    return {
      url: `https://omeizaowuda.me/blog/${post.slug}`,
      lastModified: new Date(),
    }
  })

  return [
    {
      url: "https://omeizaowuda.me",
      lastModified: new Date(),
    },
    {
      url: "https://omeizaowuda.me/portfolio",
      lastModified: new Date(),
    },
    {
      url: "https://omeizaowuda.me/resume",
      lastModified: new Date(),
    },
    {
      url: "https://omeizaowuda.me/blog",
      lastModified: new Date(),
    },
    {
      url: "https://omeizaowuda.me",
      lastModified: new Date(),
    },
    ...blogPosts,
  ]
}
