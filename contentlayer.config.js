import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

/** @type {import("contentlayer/source-files").ComputedFields} */

const computedFields = {
  slug: { type: "string", resolve: (post) => `/${post._raw.flattenedPath}` },
  slugAsParams: {
    type: "string",
    resolve: (post) => post._raw.flattenedPath.split("/").slice(1).join("/")
  }
}

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "content/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    publishDate: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    category: {
      type: "string",
      required: true
    },
    content: {
      type: "string",
      required: false 
    },
    difficulty: {
      type: "string",
      required: true,
    },
    readTime: {
      type: "number",
      required: true
    },
    liveDemo: {
      type: "string",
      required: false
    },
    sourceCode: {
      type: "string",
      required: false,
    }
  },
  computedFields
}))

export default makeSource({
  contentDirPath: "app",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
      rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }]
            }
          }
        }
    ]]
  }
})