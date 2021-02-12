import { Link } from 'gatsby';
import React, { FC } from 'react';
import styled from 'styled-components';
import colors from '../consts/styles/colors';
import { formatDateTime } from '../utils/date';
import { scale } from '../utils/typography';


const Frame = styled.article`
  position:relative;
  margin-top:${scale(.2).fontSize};
  padding-bottom:${scale(.2).fontSize};
  border-bottom:1px solid ${colors.gray};
  .frame-title {
    margin-bottom:8px;
  }
  .title {
    font-size:1.4rem;
    line-height:1.2em;
  }
  .date {
    /* position:absolute;
    top:0;
    right:0; */
    font-size:.8rem;
    color:${colors.c666};
    text-align:right;
  }
  .category {
    margin-left:10px;
    font-size: 1rem;
    color:${colors.c666};
    &:before {
      content:'/';
      margin-right:8px;
    }
  }
  .ul-tags {
    margin-top:10px;
    color:${colors.c666};
    .li-tag {
      display:inline;
      &:before {
        content:'#';
      }
    }
    .li-tag:not(:first-child) {
      margin-left:6px;
    }
  }
  .frame-description {
    line-height:1.2em;
    margin-bottom:8px;
  }
`;

export interface IPost {
  id: string;
  excerpt: string;
  fields: {
    slug:string;
  }
  frontmatter: {
    tilte?:string;
    cateogries: string[];
    tags: string[];
    date?: string;
    description?:string;
  }
}

interface IPostListItemProps {
  post: IPost;
}

const PostListItem:FC<IPostListItemProps> = ({post}) => {
  const {
    excerpt,
    fields: {
      slug,
    },
    frontmatter: {
      title,
      categories,
      tags,
      date,
      description,
    }
  } = post;
  return (
    <Frame>
          <div className='frame-title'>
            <Link to={slug}>
              <span className='title'>
                {title}
              </span>
            </Link>
            <span className='category'>
              {/* { (categories || []).join(' ') } */}
              {
                (categories || []).map(category => (
                  <Link key={`link-category-${category}`} to={`/category/${category}`}>
                    {category}
                  </Link>
                ))
              }
            </span>
          </div>
        <Link to={slug}>
          <div className='frame-description'>{description || excerpt}</div>
        </Link>
        <ul className='ul-tags'>
          {
            (tags || []).map(tag => (
              <li key={`link-tag-${tag}`} className='li-tag'>
                <Link to={`/tag/${tag}`}>
                  {tag}
                </Link>
              </li>
            ))
          }
        </ul>
        <div className='date'>{formatDateTime(date)}</div>
      </Frame>
  )
}

export default PostListItem;