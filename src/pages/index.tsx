import { graphql, Link, PageRendererProps, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import WindowFrame from "../../WindowFrame"
import { Bio } from "../components/bio"
import { Layout } from "../components/layout"
import { FadeLink } from "../components/link"
import PostListItem, { IPost } from "../components/PostListItem"
import { SEO } from "../components/seo"
import TitleBar from "../components/TitleBar"
import colors from "../consts/styles/colors"
import { MarkdownRemark } from "../graphql-types"
import { rhythm } from "../utils/typography"

const StyledLink = styled(FadeLink)`
  box-shadow: none;
`

const Title = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
`

const FrameBio = styled.section`
`;


type Props = PageRendererProps;

const BlogIndex = (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              title
              tags
              categories
            }
          }
        }
        nodes {
          excerpt
          fields {
            slug
          }
          id
          frontmatter {
            date
            title
            tags
            categories
            description
          }
        }
        tags: distinct(field: frontmatter___tags)
        categories: distinct(field: frontmatter___categories)
      }
    }
`);

  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.nodes || [];
  const tags = data.allMarkdownRemark.tags;
  const categories = data.allMarkdownRemark.categories;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
          {/* <section className='frame-main-banner'>
            <img className='img-main-banner' src='https://source.unsplash.com/480x320/?vaporwave'/>
          </section>
          <section className='frame-bio'>
            <h1>Dotorimook's blog</h1>
          </section>
          <section className='frame-categories frame-inner'>
            <h1 className='title'>Categories</h1>
            <ul>
              {
                tags.map(tag => (
                  <li key={`link-tag-${tag}`}>
                    <Link to={`/tag/${tag}`}>{tag}</Link>
                  </li>
                ))
              }
            </ul>
          </section>
          <section className='frame-tags frame-inner'>
            <h2 className='title'>Tags</h2>
            <ul>
              {
                categories.map(category => (
                  <li key={`link-category-${category}`}>
                    <Link to={`/category/${category}`}>{category}</Link>
                  </li>
                ))
              }
            </ul>
          </section> */}
          <section className='frame-posts'>
            <h2 className='title'>Posts</h2>
            {posts.map((post: IPost) => (
              <PostListItem key={`post-item-${post.id}`} post={post} />
            ))}
            {/* {posts.map(({ node }: { node: MarkdownRemark }) => {
              const frontmatter = node!.frontmatter!
              const fields = node!.fields!
              const slug = fields.slug!
              const excerpt = node!.excerpt!

              const title = frontmatter.title || fields.slug.replace(/\//g, '').replace(/-/g, ' ')
              return (
                <article className='article-post' key={slug}>
                  <Title>
                    <Link to={slug}>
                      <h3>{title}</h3>
                    </Link>
                  </Title>
                  {frontmatter.tags}
                  {frontmatter.categories}
                  <small>{frontmatter.date}</small>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: frontmatter.description || excerpt,
                    }}
                  />
                </article>
              )
            })} */}
          </section>
        {/* </ContentFrame> */}
        {/* {posts.map(({ node }: { node: MarkdownRemark }) => {
          const frontmatter = node!.frontmatter!
          const fields = node!.fields!
          const slug = fields.slug!
          const excerpt = node!.excerpt!

          const title = frontmatter.title || fields.slug
          return (
            <div key={slug}>
              <Title>
                <Link to={slug}>{title}</Link>
              </Title>
              <small>{frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: frontmatter.description || excerpt,
                }}
              />
            </div>
          )
        })} */}
      {/* </WindowFrame> */}
    </Layout>
  )
}

export default BlogIndex
