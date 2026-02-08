import { Link } from '../GatsbyCompat';
import React, { type FC } from 'react';
import styled from 'styled-components';
import colors from '../consts/styles/colors';
import { formatDateTime } from '../utils/date';
import { scale } from '../utils/typography';
import { slugify } from '../utils/slugify';
import type { IPost } from './PostListItem';

const HeroItem = styled.article`
  position: relative;
  margin-top: ${scale(0.5).fontSize};
  margin-bottom: ${scale(1.5).fontSize};
  padding-bottom: ${scale(0.5).fontSize};
  border-bottom: 2px solid ${colors.c333};
  
  .hero-label {
    font-size: 0.8rem;
    font-weight: 800;
    color: ${colors.primary};
    text-transform: uppercase;
    margin-bottom: 8px;
    display: inline-block;
    letter-spacing: 0.05em;
  }

  .title-row {
    margin-bottom: 12px;
  }

  .title {
    font-size: 2.2rem;
    line-height: 1.2em;
    font-weight: 800;
    color: ${colors.c333};
    text-decoration: none;
    
    &:hover {
      color: ${colors.primary};
    }
  }

  .category {
    margin-left: 10px;
    font-size: 1rem;
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

  .date {
    font-size: 0.9rem;
    color: ${colors.c666};
    margin-bottom: 12px;
  }

  .description {
    font-size: 1.1rem;
    line-height: 1.6em;
    margin-bottom: 16px;
    color: ${colors.c333};
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .read-more {
    font-size: 0.9rem;
    font-weight: 700;
    text-decoration: none;
    color: ${colors.primary};
    display: inline-block;
    margin-bottom: 16px;
    
    &:hover {
      text-decoration: underline;
    }
  }

  .tags {
    margin-top: 10px;
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

interface HeroPostProps {
  post: IPost;
}

const HeroPost: FC<HeroPostProps> = ({ post }) => {
  const {
    excerpt,
    fields: { slug },
    frontmatter: { title, categories, tags, date, description },
  } = post;

  return (
    <HeroItem>
      <div className="hero-label">Featured Post</div>
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
      <div className="date">{formatDateTime(date || '')}</div>
      
      <Link to={slug} style={{ textDecoration: 'none' }}>
        <div className="description">{description || excerpt}</div>
      </Link>
      
      <Link to={slug} className="read-more">
        Read more →
      </Link>
      
      <div className="tags">
        {(tags || []).map((tag) => (
          <Link key={tag} to={`/tag/${slugify(tag)}`}>
            {tag}
          </Link>
        ))}
      </div>
    </HeroItem>
  );
};

export default HeroPost;
