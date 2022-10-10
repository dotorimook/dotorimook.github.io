import { Adsense } from "@ctrl/react-adsense"
import { graphql, Link, PageRendererProps } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Bio } from "../components/bio"
import { Layout } from "../components/layout"
import { FadeLink } from "../components/link"
import { SEO } from "../components/seo"
import { Query, SitePageContext } from "../graphql-types"
import { rhythm, styledScale } from "../utils/typography"
import Utterances from '../components/Utterances';

interface Props extends PageRendererProps {
  pageContext: SitePageContext
  data: Query
}

const Date = styled.p`
  display: block;
  ${styledScale(-1 / 5)};
  margin-bottom: ${rhythm(1)};
  margin-top: ${rhythm(-1)};
`

const Divider = styled.hr`
  margin-bottom: ${rhythm(1)};
`

const PostNavigator = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`

const Frame = styled.article`
  .date {
    font-size:.8rem;
    margin-bottom:1rem;
  }
`;

const BlogPostTemplate = (props: Props) => {
  const data = props.data!
  const post = data.markdownRemark!
  const excerpt = post.excerpt!
  const frontmatter = post.frontmatter!
  const html = post.html!
  const siteTitle = data.site!.siteMetadata!.title!
  const { previous, next } = props.pageContext

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={frontmatter.title!}
        description={frontmatter.description || excerpt}
      />
      <section className='frame-posts frame-inner'>
        <Frame>
          <h1>{post.frontmatter!.title}</h1>
          <div className='date'>{frontmatter.date}</div>
          <Adsense
            client='ca-pub-5013570089563608'
            slot='3747930287'
          />
          <div className='frame-post' dangerouslySetInnerHTML={{ __html: html }} />
          <Divider />
          <PostNavigator>
            <li>
              {previous && (
                <Link to={previous.fields!.slug!} rel="prev">
                  ← {previous.frontmatter!.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields!.slug!} rel="next">
                  {next.frontmatter!.title} →
                </Link>
              )}
            </li>
          </PostNavigator>
          <Adsense
            client='ca-pub-5013570089563608'
            slot='5476601469'
          />
          <Utterances repo='dotorimook/dotorimook.github.io' theme='github-light' />
        </Frame>
      </section>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`