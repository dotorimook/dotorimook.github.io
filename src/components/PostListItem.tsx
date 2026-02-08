import { Link } from '../GatsbyCompat';
import React, { type FC } from 'react';
import styled from 'styled-components';
import colors from '../consts/styles/colors';
import { formatDateTime } from '../utils/date';
import { scale } from '../utils/typography';
import { slugify } from '../utils/slugify';

const Item = styled.article`
  position: relative;
  margin-top: ${scale(0.5).fontSize};
  padding-bottom: ${scale(0.5).fontSize};
  border-bottom: 1px solid ${colors.gray}40; /* 25% opacity */
  
  &:last-child {
    border-bottom: none;
  }

  .title-row {
    margin-bottom: 8px;
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 10px;
  }

  .title {
    font-size: 1.4rem;
    line-height: 1.3em;
    font-weight: 700;
    color: ${colors.c333};
    text-decoration: none;
    
    &:hover {
      color: ${colors.primary};
    }
  }

  .category {
    font-size: 0.9rem;
    color: ${colors.c666};
    font-weight: 500;
    
    a {
      color: inherit;
      text-decoration: none;
      &:hover {
        color: ${colors.primary};
        text-decoration: underline;
      }
    }
  }

  .description {
    font-size: 1rem;
    line-height: 1.6em;
    color: ${colors.c666};
    margin-bottom: 12px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .meta-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.85rem;
    color: ${colors.c999};
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    
    a {
      color: ${colors.c666};
      text-decoration: none;
      &:hover {
        color: ${colors.primary};
      }
      &:before {
        content: '#';
        margin-right: 1px;
        color: ${colors.c999};
      }
    }
  }
`;

export interface IPost {
  id: string;
  excerpt: string;
  fields: {
    slug: string;
  }
  frontmatter: {
    title?: string;
    categories?: string[];
    tags?: string[];
    date?: string;
    description?: string;
  }
}

interface IPostListItemProps {
  post: IPost;
}

const PostListItem: FC<IPostListItemProps> = ({ post }) => {
  const {
    excerpt,
    fields: { slug },
    frontmatter: { title, categories, tags, date, description },
  } = post;

  return (
    <Item>
      <div className="title-row">
        <Link to={slug} className="title">
          {title}
        </Link>
        {categories && categories.length > 0 && (
          <span className="category">
            {categories.map((category, index) => (
              <React.Fragment key={category}>
                {index > 0 && <span style={{ margin: '0 4px', color: colors.c999 }}>/</span>}
                <Link to={`/category/${slugify(category)}`}>{category}</Link>
              </React.Fragment>
            ))}
          </span>
        )}
      </div>

      <Link to={slug} style={{ textDecoration: 'none' }}>
        <div className="description">{description || excerpt}</div>
      </Link>

      <div className="meta-row">
        <div className="tags">
          {(tags || []).map((tag) => (
            <Link key={tag} to={`/tag/${slugify(tag)}`}>
              {tag}
            </Link>
          ))}
        </div>
        <div className="date">{formatDateTime(date || '')}</div>
      </div>
    </Item>
  );
};

export default PostListItem;
