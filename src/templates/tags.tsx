import { useStaticQuery } from 'gatsby';
import React, { FC } from 'react'
import { Layout } from '../components/layout';
import PostListItem, { IPost } from '../components/PostListItem';
import IComponentProps from '../interfaces/IComponentProps';

interface ITagProps extends IComponentProps {
  pageContext: {
    tag: string;
  }
}

const Tags:FC<ITagProps> = ({ pageContext: { tag }, data}) => {
  const {nodes: posts, totalCount = 0} = data.allMarkdownRemark;
  return (
    <Layout>
      <div>
        태그 {tag}에 대한 포스트 {totalCount} 건
        {
          posts.map((node:IPost)=>(
            <PostListItem key={`post-${node.id}`} post={node} />
          ))
        }
      </div>
    </Layout>
  )
};

export const query = graphql`
  query($tag: String!) {
    allMarkdownRemark(filter: {frontmatter: {tags: {eq: $tag}}}, sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
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
    }
  }
`

export default Tags;